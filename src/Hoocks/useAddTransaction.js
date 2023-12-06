import {addDoc,collection,serverTimestamp} from "firebase/firestore"
import { db } from "../confic/firebase"
import {useGetUserInfo} from "../Hoocks/useGetUserInfo"
export const useAddTransaction =()=>{
    const transactionColectionRef = collection(db,"transaction")
    const {userId} = useGetUserInfo()
    console.log(userId);
    const AddTransaction  = async({description,transactionAmount,transactionType})=>{
      try {
        console.log(description);
        await addDoc(transactionColectionRef,{
            userId,
            description,
            transactionAmount,
            transactionType,
            createdAt:serverTimestamp()
        })        
      } catch (error) {
        console.error("Error adding transaction:", error);
      }

    }
    return {AddTransaction}
}