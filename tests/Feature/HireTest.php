<?php

namespace Tests\Feature;

use App\User;
use App\Hire;
use App\HireLock;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HireTest extends TestCase
{
    use RefreshDatabase;
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
        $hireLock = HireLock::where('hire_id', $hire->id)->first();
        $this->assertTrue($hireLock->locked == true);
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
        $hireLock = HireLock::where('hire_id', $hire->id)->first();
        $this->assertTrue($hireLock->locked == false);
    }

    public function testSearchHires(){

    }

    public function testStoreHire(){

    }

    public function testUpdateHire(){

    }

    public function testDestroyHire(){
        
    }
}
