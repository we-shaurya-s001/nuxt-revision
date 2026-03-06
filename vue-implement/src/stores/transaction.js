import { defineStore } from 'pinia';
import { ref, computed } from 'vue'; 


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
    const balanceleft = computed(()=>{

    })

    const updateTransaction = computed(()=>{
        transactions.value++;
    })
   

    return {
        transactions,
        addTransaction,
        deleteTransaction,
        totalBalance
    };
});
