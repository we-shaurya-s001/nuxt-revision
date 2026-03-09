<script setup>
import { ref, reactive } from 'vue';
import { useTransactionStore } from '@/stores/transaction';

const transactionStore = useTransactionStore();

const newEntry = reactive({
  name: '',
  amount: 0
});

const onFormSubmit = () => {
  if (newEntry.name && newEntry.amount !== 0) {
    transactionStore.addTransaction({
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
  <div> 
    <h2>SwiftSpend Dashboard</h2>

    <h3 class="color-red">Total Balance: {{ transactionStore.totalBalance }}</h3>
    <hr />
    <h1>121</h1>
    <h3>dsddsds{{ transactionStore.counter}}</h3>

  
    <ul>
      <li v-for="item in transactionStore.transactions" :key="item.id">
        {{ item.name  }} : <strong>${{ item.amount }}</strong>
        <button @click="transactionStore.deleteTransaction(item.id)">X</button>
      </li>
    </ul>
    <hr />

    <div class="add-transaction">
      <h3>Add New Transaction</h3>
      <form @submit.prevent="onFormSubmit">
        <input class="border"
          v-model="newEntry.name" 
          type="text" 
          placeholder="What did you buy?" 
          required 
        />
        <input 
        class="border"
        v-model.number="newEntry.amount" 
          type="number" 
          placeholder="Amount" 
          required 
          />
        <button type="submit">Add to List</button>
      </form>
    </div>
  </div>
</template>