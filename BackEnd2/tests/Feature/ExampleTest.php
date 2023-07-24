<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;



class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}

class IncidenteControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndex()
    {
        $response = $this->get('/incidentes');

        $response->assertStatus(200);
        $response->assertViewIs('incidentes.index');
    }

    public function testCrearIncidencia()
    {
        $data = [
            'inci_observacion' => 'Este es un incidente de prueba',
            // Agregar más datos para la creación de un incidente válido
        ];

        $response = $this->post('/incidentes', $data);

        $response->assertRedirect('/incidentes'); // Verifica si la redirección es correcta
        $this->assertDatabaseHas('incidentes', $data); // Verifica si los datos están en la base de datos
    }

}
