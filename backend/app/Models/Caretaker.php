<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Caretaker extends Model
{
    protected $fillable = [
        'minor_id',
        'full_name',
        'relationship',
        'phone_number',
    ];

    public function minor()
    {
        return $this->belongsTo(Minor::class);
    }
}
