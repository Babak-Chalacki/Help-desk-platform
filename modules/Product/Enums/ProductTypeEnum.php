<?php

namespace Modules\Product\Enums;

use App\Enums\EnumHelperTrait;

enum ProductTypeEnum
{
    use EnumHelperTrait;
    case HARDWARE;
    case SOFTWARE;
    case SERVICE;
    case ACCESSORIES;
}
