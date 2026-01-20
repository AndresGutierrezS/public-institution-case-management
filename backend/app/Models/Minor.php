<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Minor extends Model
{
    protected $fillable = [
        'name',
        'paternal_last_name',
        'maternal_last_name',
        'curp',
        'birth_date',
        'gender',
        'nationality',
    ];
}
