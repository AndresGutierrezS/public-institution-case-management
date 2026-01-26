<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EscapeRecord extends Model
{
    protected $fillable = [
        'minor_id',
        'status',
        'description',  
    ];
}
