import { defineStore } from 'pinia';
import { ref, computed } from 'vue'; 

const counter =  ref(0);

export const useTransactionStore = defineStore('transaction', () => {
    const transactions = ref([]);
   const addTransaction = (newTransactions) => {
    transactions.value.push(newTransactions);
   }



   const deleteTransaction = (id) => {
            transactions.value = transactions.value.filter(t => t.id !== id);
        };
    const totalBalance = computed(() => {
        return transactions.value.reduce((acc, item) => acc + item.amount, 0);
    });

    const updateTransaction = computed(()=>{
        transactions.value++;
    })   


    return {
        counter,
        increasingcounter,
        transactions,
        addTransaction,
        deleteTransaction,
        totalBalance
    };
});
