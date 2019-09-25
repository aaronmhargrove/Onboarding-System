<?php
namespace App\Console;

use App\Hire;
use App\HireStep;
use App\HireLock;
use App\User;
use App\Notifications\StepsNotComplete;
use App\Console\Commands\TestNotification;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        TestNotification::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Delete inactive hires after 6 months
        $schedule->call(function(){
            $idList = Hire::select('id')->where('is_active', 0)->whereRaw('DATEDIFF(CURDATE(), set_inactive_on) > 180')->get(); 
            foreach($idList as $id){
                HireLock::where('hire_id', $id)->delete();
                HireStep::where('hire_id', $id)->delete();
                Hire::where('id', $id)->delete();
            }
        })->dailyAt('3:00')->timezone('America/Chicago');

        // If there are incomplete steps within 3 days of start date, send an alert
        $schedule->call(function(){
            $hires = Hire::where('is_active', 1)
                ->whereRaw('DATEDIFF(start_date, CURDATE()) < 4') 
                ->select('first_name', 'last_name', 'start_date')
                ->withCount(['hireSteps' => function($query){
                    $query->where('status', '!=', 2);
                }])
                ->having('hire_steps_count', '>', 0)->get();
            foreach($hires as $hire){
                $user = User::find($hire->manager_id);
                if ($user == null){
                    $user = User::first();
                }
                $user->notify(new StepsNotComplete($hire));
            }
        })->dailyAt('7:00')->timezone('America/Chicago');

        // Unlock hires that have been locked for more than 5 minutes
        $schedule->call(function(){
            $hireLocks = HireLock::where('locked', 1)->whereRaw("TIMESTAMPDIFF(MINUTE,locked_at,NOW()) > 5")->get();
            foreach($hireLocks as $lock){
                $lock->locked = 0;
                $lock->save();
            }
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
