<?php


namespace App\Http\Filters;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

abstract class QueryFilter
{

    protected $request;


    protected $builder;


    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @param Builder $builder
     */
    public function aplicar(Builder $builder)
    {
        $this->builder = $builder;

        foreach ($this->campos() as $campo => $value) {
            $methods = Str::camel($campo);

            if (method_exists($this, $methods)) {

                call_user_func_array([$this, $methods], (array) $value);
            }
        }
    }

    /**
     * @return array
     */
    protected function campos(): array
    {
        return array_filter($this->request->all());
    }
}