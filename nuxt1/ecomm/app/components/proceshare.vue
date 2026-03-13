<template>
<div>
    export const useCounter = () => {
  // 'counter' is a unique key that identifies this state
  return useState('counter', () => 0)
}
</div>
    </template>
