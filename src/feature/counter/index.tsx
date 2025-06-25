"use client"
import React from 'react';
import useCounterStore from '@/stores/useCounterStore';

export default function Counter() {
  const { count, increase, decrease,reset } = useCounterStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className='btn btn-danger' onClick={reset}>o</button>
      <button className='btn btn-warning' onClick={decrease}>-</button>
      <button className='btn btn-primary' onClick={increase}>+</button>
    </div>
  );
}
