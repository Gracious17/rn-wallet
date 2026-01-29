import { useCallback, useState } from "react";
import {Alert} from "react-native"

const API_URL = "http://localhost:5001/api";

export const useTransaction = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expense: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
// used useCallback for performance reasons , it will memorize the function 
  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      const data = response.json();
      setTransactions(data);
    } catch (error) {
      console.log("Error fetching transactions", error);
    }
  }, [userId]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = response.json();
      setSummary(data);
    } catch (error) {
      console.log("Error fetching transactions", error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
if(!userId)return;
setIsLoading(true)


    try {
     await Promise.all([fetchTransactions(),fetchSummary()]);
    } catch (error) {
      console.log("Error loading data ", error);
    }finally{
        setIsLoading(false)
    }
  }, [fetchTransactions, fetchSummary, userId]);

  const deleteTransaction=async(id)=>{
    
    try {
      const response =await fetch(`${API_URL}/transactions/${id}`,{method:"DELETE"});
      
      if(!response.ok) throw new Error("Failed to delete transaction");
      loadData();
      Alert.alert("Success","Transaction deleted successfully");
    } catch (error) {
      console.error("Error deleting transaction ", error);
      Alert.alert("Error", error.message)  
    }
  }
  return {transactions, summary ,isLoading,loadData,deleteTransaction}
};
