<?php

use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for ($i = 0; $i <= 10; $i++) {
            Task::create([
                'title' => 'title' . $i,
                'content' => 'content' . $i,
                'person_in_charge' => 'person_in_charge' . $i,
            ]);
        }
    }
}
