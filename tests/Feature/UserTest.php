<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    public function testUpdateWithSearchFilter()
    {
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
