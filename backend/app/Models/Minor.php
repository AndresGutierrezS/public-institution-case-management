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

    public function admission()
    {
        return $this->hasOne(Admission::class);
    }

    public function caretakers()
    {
        return $this->hasMany(Caretaker::class);
    }

    public function judicialRecord()
    {
        return $this->hasOne(JudicialRecord::class);
    }

    public function followUps()
    {
        return $this->hasOne(FollowUp::class);
    }

    public function protectionMeasures()
    {
        return $this->hasMany(ProtectionMeasure::class);
    }
}
