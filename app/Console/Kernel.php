<?php
namespace App\Console;

use App\Hire;
use App\HireStep;
use App\HireLock;
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
        $schedule->call(function(){
            $idList = Hire::select('id')->where('is_active', 0)->whereRaw('DATEDIFF(CURDATE(), set_inactive_on) > 180')->get();
            foreach($idList as $id){
                HireLock::where('hire_id', $id)->delete();
                HireStep::where('hire_id', $id)->delete();
                Hire::where('id', $id)->delete();
            }
        })->dailyAt('3:00')->timezone('America/Chicago');

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
