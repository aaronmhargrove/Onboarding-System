<?php

namespace Tests\Feature;

use App\User;
use App\Hire;
use App\HireLock;
use App\HireType;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HireTest extends TestCase
{
    use RefreshDatabase; // NOTICE: tests are set up to run on a testing database. Adjust .env accordingly
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetAllHires()
    {
        // Arrange 
        $users = factory(User::class, 2)->create();
        factory(Hire::class, 10)->create([
            'manager_id' => $users[0]->id,
            'admin_id' => $users[1]->id
        ]);

        // Act
        $response = $this->get('/hires');

        // Assert
        $response->assertStatus(200);
        $this->assertTrue(count($response->decodeResponseJson()) == 10);
    }

    public function testLockHire(){
        // Arrange 
        $hire = factory(Hire::class)->create([
            'manager_id' => null,
            'admin_id' => null
        ]);
        factory(HireLock::class)->create([
            'hire_id' => $hire->id
        ]);

        // Act
        $response1 = $this->patch("/hires/{$hire->id}/lock");
        $response2 = $this->patch("/hires/{$hire->id}/lock");
        $response3 = $this->patch("/hires/1000/lock");

        // Assert
        $response1->assertStatus(200);
        $response2->assertStatus(200);
        $response3->assertStatus(404);
        $this->assertTrue($response1->decodeResponseJson()['success'] == true);
        $this->assertTrue($response2->decodeResponseJson()['success'] == false);
        $this->assertDatabaseHas('hire_locks',[
            'hire_id' => $hire->id,
            'locked' => true
        ]);
    }

    public function testUnockHire(){
        // Arrange 
        $hire = factory(Hire::class)->create([
            'manager_id' => null,
            'admin_id' => null
        ]);
        factory(HireLock::class)->create([
            'hire_id' => $hire->id,
            'locked' => 1
        ]);

        // Act
        $response1 = $this->patch("/hires/{$hire->id}/unlock");
        $response2 = $this->patch("/hires/1000/unlock");

        // Assert
        $response1->assertStatus(200);
        $response2->assertStatus(404);
        $this->assertTrue($response1->decodeResponseJson()['success'] == true);
        $this->assertDatabaseHas('hire_locks',[
            'hire_id' => $hire->id,
            'locked' => false
        ]);
    }

    public function testSearchHires(){
        $this->assertTrue(true);
    }

    public function testStoreHire(){
        // Arrange
        $jsonBody = [
            "id" => 321321,
            "regional_location" => "STL",
            "first_name" => "Dwight",
            "last_name" => "Schrute",
            "email" => "dschrute@example.com",
            "cwid" => "dwigh",
            "gender" => "M",
            "start_date" => "2019-9-20",
            "vendor" => "NBC",
            "role" => "Sales Associate",
            "pl_ic" => "pl",
            "team_name" => "The Office",
            "platform" => "sales",
            "hire_status" => "New",
            "onboarding_buddy" => "Jim",
            "computer_needs" => "macbook",
            "seat_number" => "CC206",
            "campus" => "CH",
            "manager_comments" => "Assistant to the regional manager at previous job",
            "neid" => 98134,
            "hire_ticket" => "REQ12645",
            "mac_ticket" => "REQ45818"
        ];

        // Act
        $response = $this->json('POST', '/hires', $jsonBody);
        $fail = $this->json('POST', '/hires', ['regional_location' => 'STL']); // does not contain required info

        // Assert
        $response->assertStatus(200);
        $fail->assertStatus(422);
        $this->assertDatabaseHas('hires', ['email' => 'dschrute@example.com']);
        $this->assertDatabaseMissing('hires', ['id' => 321321]); // specifying id should be rejected
    }

    public function testUpdateHire(){
        // Arrange
        $hire = factory(Hire::class)->create([
            'manager_id' => null,
            'admin_id' => null
        ]);
        $jsonBody = [
            "id" => 321321,
            "email" => "dschrute@example.com",
            "cwid" => "dwigh"
        ];

        // Act
        $response = $this->json('PATCH', "/hires/{$hire->id}", $jsonBody);
        $fail = $this->json('PATCH', "/hires/10000", $jsonBody); // does not exist

        // Assert
        $response->assertStatus(200);
        $fail->assertStatus(404);
        $this->assertDatabaseHas('hires', ['email' => 'dschrute@example.com', 'cwid' => 'dwigh']);
        $this->assertDatabaseMissing('hires', ['id' => 321321]); // id updating should be rejected
    }

    public function testDestroyHire(){
        // Arrange
        $hire = factory(Hire::class)->create([
            'manager_id' => null,
            'admin_id' => null
        ]);

        // Act
        $response = $this->delete("/hires/{$hire->id}");
        $fail = $this->delete("/hires/10000"); // does not exist

        // Assert
        $response->assertStatus(200);
        $fail->assertStatus(404);
        $this->assertDatabaseMissing('hires', ['id' => $hire->id]);
        $this->assertDatabaseMissing('hire_steps', ['hire_id' => $hire->id]);
        $this->assertDatabaseMissing('hire_locks', ['hire_id' => $hire->id]);
    }
}
