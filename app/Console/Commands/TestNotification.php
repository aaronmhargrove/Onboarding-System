<?php

namespace App\Console\Commands;

use App\User;
use App\Hire;
use App\HireStep;
use App\Notifications\NewHireAdded;
use App\Notifications\StepsNotComplete;
use App\Notifications\StartDateChanged;
use App\Notifications\HireCompleted;
use App\Notifications\HireStepChanged;
use Illuminate\Console\Command;

class TestNotification extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:slack';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'For testing slack notifications';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // // New Hire Added
        // $hire = Hire::first();
        // User::first()->notify(new NewHireAdded($hire));

        // // Steps not complete
        // $hire = Hire::where('is_active', 1)
        //     ->whereRaw('DATEDIFF(start_date, CURDATE()) < 1000') // large number to ensure we have a match
        //     ->select('first_name', 'last_name', 'start_date')
        //     ->withCount(['hireSteps' => function($query){
        //         $query->where('status', '!=', 2);
        //     }])
        //     ->having('hire_steps_count', '>', 0)->first();
        // User::first()->notify(new StepsNotComplete($hire));

        // // Start date changed
        // $hire = Hire::first();
        // User::first()->notify(new StartDateChanged($hire));

        // // Hire Complete
        // $hire = Hire::first();
        // User::first()->notify(new HireCompleted($hire));

        // Step update
        $hire = Hire::first();
        $hireStep = HireStep::where('status', '=', 2)->first();
        User::first()->notify(new HireStepChanged($hire, $hireStep));
    }
}
