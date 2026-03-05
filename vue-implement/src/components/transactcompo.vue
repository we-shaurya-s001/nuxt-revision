<script setup>
import { useTransactionStore } from '@/stores/transaction';
import { reactive } from 'vue';

const Transaction = useTransactionStore();
const entrynew = reactive({
  name: '',
  amount: 0
});

const onFormSubmit = () => {
  if (newEntry.name && newEntry.amount !== 0) {
    useTransactionStore.addTransaction({
      id: Date.now(),
      name: newEntry.name,
      amount: newEntry.amount
    });
    newEntry.name = '';
    newEntry.amount = 0;
  }
};
</script>
<template>
   <div v-for="tranValues in source">

   </div>
</template>
<!-- 

transactions,
        addTransaction,
        deleteTransaction,
        totalBalance -->