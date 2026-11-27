<?php

namespace Modules\Product\Enums;

use App\Enums\EnumHelperTrait;

enum ProductStatusEnum
{
    use EnumHelperTrait;
    case ACTIVE;
    case INACTIVE;
}
