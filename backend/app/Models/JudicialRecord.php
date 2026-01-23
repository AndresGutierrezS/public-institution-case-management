<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JudicialRecord extends Model
{
    protected $fillable = [
        'minor_id',
        'judicial_authority',
        'procedural_status',
        'process_start_date',
        'investigation_file',
        'observations',
    ];


    public function menor()
    {
        return $this->belongsTo(Minor::class);
    }
}
