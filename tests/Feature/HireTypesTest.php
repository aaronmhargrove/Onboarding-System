<?php

namespace Tests\Feature;

use App\HireType;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HireTypesTest extends TestCase
{
    use RefreshDatabase; // NOTICE: tests are set up to run on a testing database. Adjust .env accordingly
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        // Arrange
        factory(HireType::class, 10)->create();

        // Act
        $response = $this->get('/hire-types');

        // Assert
        $response->assertStatus(200);
        $this->assertTrue(count($response->decodeResponseJson()) == 10);
    }
}
