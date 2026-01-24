<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProtectionMeasure extends Model
{
    protected $fillable = [
        'minor_id',
        'start_date',
        'status',
    ];

    public function menor()
    {
        return $this->belongsTo(Minor::class);
    }
}
