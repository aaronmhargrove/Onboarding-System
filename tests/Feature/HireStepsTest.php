<?php

namespace Tests\Feature;

use App\Hire;
use App\Step;
use App\HireStep;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HireStepsTest extends TestCase
{
    use RefreshDatabase; // NOTICE: tests are set up to run on a testing database. Adjust .env accordingly
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testUpdateStep()
    {
        // Arrange 
        $step = factory(Step::class)->create();
        $hire = factory(Hire::class)->create(['manager_id'=>null, 'admin_id'=>null]);
        $hireStep = factory(HireStep::class)->create(['hire_id'=>$hire->id, 'step_name'=>$step->name]);
        $body = [
            'status' => 2,
            'date' => '2019-9-19'
        ];

        $response = $this->patch("/hire-steps/{$hireStep->id}", $body);
        $response->assertStatus(200);
        $this->assertDatabaseHas('hire_steps', ['hire_id' => $hire->id]);
    }
}
