<?php

namespace App\Enums;

trait EnumHelperTrait
{
    public static function getArray(): array
    {
        return array_column(self::cases(), 'name');
    }
}
