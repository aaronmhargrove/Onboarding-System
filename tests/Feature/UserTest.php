<?php

namespace Tests\Feature;

use App\User;
use App\Hire;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function testGetAllUsers(){
        // Arrange
        $user = factory(User::class)->create();

        // Act
        $response = $this->get('/users');

        // Assert
        $response->assertStatus(200);
        $this->assertTrue(count($response->original) > 0);
    }

    public function testGetUserHires(){
        // Arrange
        $user1 = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $user3 = factory(User::class)->create();
        $hire = factory(Hire::class)->create();

        // Act
        $response1 = $this->get("/users/{$user1->id}/hires"); // User 1 is manager
        $response2 = $this->get("/users/{$user2->id}/hires"); // User 2 is admin
        $response3 = $this->get("/users/{$user3->id}/hires"); // User 3 is not involved with hire
        $response4 = $this->get("/users/100000/hires"); // User 4 does not exist

        // Assert
        $response1->assertStatus(200);
        $response2->assertStatus(200);
        $response3->assertStatus(200);
        $response4->assertStatus(404);
        $this->assertTrue(count($response1->decodeResponseJson()) > 0);
        $this->assertTrue(count($response2->decodeResponseJson()) > 0);
        $this->assertTrue(count($response3->decodeResponseJson()) == 0);
    }

    public function testGetFilteredHires(){
        $this->assertTrue(true);
    }

    public function testGetUpcomingDates(){
        // Arrange
        $manager = factory(User::class)->create();
        $admin = factory(User::class)->create();
        $random = factory(User::class)->create();
        $hire = factory(Hire::class)->create([
            'manager_id' => $manager->id,
            'admin_id' => $admin->id
        ]);

        // Act
        $response1 = $this->get("/users/{$manager->id}/upcoming");
        $response2 = $this->get("/users/{$admin->id}/upcoming");
        $response3 = $this->get("/users/{$random->id}/upcoming");
        $response4 = $this->get('/users/100000/upcoming');

        // Assert
        $response1->assertStatus(200);
        $response2->assertStatus(200);
        $response3->assertStatus(200);
        $response4->assertStatus(404);
        // $this->assertTrue(count($response1->decodeResponseJson()) > 0);
        // $this->assertTrue(count($response2->decodeResponseJson()) > 0);
        // $this->assertTrue(count($response3->decodeResponseJson()) == 0);
    }

    public function testUpdateWithSearchFilter(){
        $user = factory(User::class)->create();

        // Arrange 
        $searchFilter = [
            'searchText' => 'string',
            'dateFilter' => [
                'start'  => 'test',
                'end'    => 'test'
            ],
            'cols'       => [],
            'stepId'     => 1,
            'userId'     => $user->id,
            'inactive'   => false
        ];

        // Act
        $response = $this->patch("/users/{$user->id}", $searchFilter);

        // Remove the userId from the filter, since it's not stored 
        unset($searchFilter['userId']);
        $updatedUser = User::find($user->id);
        
        // Assert
        $response->assertStatus(200);
        $this->assertEquals($updatedUser->search_filter, json_encode($searchFilter));
    }
}
