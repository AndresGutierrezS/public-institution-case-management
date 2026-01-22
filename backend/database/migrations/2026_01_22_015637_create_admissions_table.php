<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('minor_id')->constrained()->onDelete('cascade');
            $table->date('admission_date');
            $table->foreignId('shelter_id')->constrained()->onDelete('cascade');
            $table->foreignId('authority_id')->constrained()->onDelete('cascade');
            $table->text('admission_reason');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admissions');
    }
};
