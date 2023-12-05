import { onSnapshot, orderBy, query, where } from "firebase/firestore"
import {useEffect, useState} from "react"
import { collection } from "firebase/firestore"
import { db } from "../confic/firebase"

import {useGetUserInfo} from "./useGetUserInfo"

export const useGetTransaction=()=>{
const [transaction,SetTransaction] = useState([])

const getTransactions = async()=>{
    const transactionColectionRef = collection(db,"transaction")
    const {userId} = useGetUserInfo()
    try {
        const quaryTransaction = async = query(transactionColectionRef,
            where("userId","==",userId),
            orderBy("createdAt"))


       let unSuscribe =  onSnapshot(quaryTransaction,(snapshot)=>{
            let docs = []

            snapshot.forEach((doc)=>{
                const data = doc.data()
                const id = doc.id


                docs.push({...data,id})
            })

            SetTransaction(docs)
        })
    } catch (error) {
        console.error(error);
    }
    return ()=> unSuscribe
}

useEffect(()=>{
    getTransactions()
},[])
    return {transactions}
}