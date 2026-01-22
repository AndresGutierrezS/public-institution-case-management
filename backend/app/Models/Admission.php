<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admission extends Model
{
    protected $fillable = [
        'minor_id',
        'admission_date',
        'shelter_id',
        'authority_id',
        'admission_reason',
    ];

    public function minor()
    {
        return $this->belongsTo(Minor::class);
    }

    public function shelter()
    {
        return $this->belongsTo(Shelter::class);
    }

    public function authority()
    {
        return $this->belongsTo(Authority::class);
    }
}
