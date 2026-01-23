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
        Schema::create('judicial_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('minor_id')->constrained()->onDelete('cascade');
            $table->string('judicial_authority');
            $table->string('procedural_status');
            $table->date('process_start_date');
            $table->string('investigation_file');
            $table->text('observations')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('judicial_records');
    }
};
