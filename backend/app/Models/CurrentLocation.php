<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CurrentLocation extends Model
{
    protected $fillable = [
        'minor_id',
        'location_type',
        'location_name',
        'relationship',
        'status',
        'address',
    ];

    public function minor()
    {
        return $this->belongsTo(Minor::class);
    }
}
