<script setup>
import { useTransactionStore } from '@/stores/transaction';
import {ref} from vue;
import { reactive } from 'vue';

const spends = useTransactionStore();


const newEntry = reactive({
  name: '',
  amount: 0
});

</script>

<template>
<div>
    checking for the values

</div>
</template>


<!-- 

transactions,
        addTransaction,
        deleteTransaction,
        totalBalance -->