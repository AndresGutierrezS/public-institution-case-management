<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FollowUp extends Model
{
    protected $fillable = [
        'minor_id',
        'legal_follow_up',
        'psychological_follow_up',
        'social_follow_up',
    ];

    public function minor()
    {
        return $this->belongsTo(Minor::class);
    }
}
