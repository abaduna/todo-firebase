import { onSnapshot, orderBy, query, where } from "firebase/firestore"
import {useEffect, useState} from "react"
import { collection } from "firebase/firestore"
import { db } from "../confic/firebase"

import {useGetUserInfo} from "./useGetUserInfo"


export const useGetTransaction=()=>{
    const [transaction, setTransaction] = useState([]);
    let   unSuscribe = 0
    const {userId} = useGetUserInfo() // Mover la llamada a useGetUserInfo aquí
    const getTransactions =(userId)=>{ // Añadir el parámetro userId
        const transactionColectionRef = collection(db,"transaction")
        // const {userId} = useGetUserInfo() // Eliminar esta línea
        try {
            const quaryTransaction  = query(transactionColectionRef,
                where("userId","==",userId),
                orderBy("createdAt"))
    
    
           unSuscribe =  onSnapshot(quaryTransaction,(snapshot)=>{
                let docs = []
    
                snapshot.forEach((doc)=>{
                    const data = doc.data()
                    const id = doc.id
    
                    console.log(docs);
                    docs.push({...data,id})
                })
    
                setTransaction(docs)
            })
        } catch (error) {
            console.error(error);
        }
        return ()=> unSuscribe
    }
    
    useEffect(()=>{
        getTransactions(userId) // Pasar el userId como argumento
        return ()=>unSuscribe
    },[userId]) // Añadir el userId como dependencia
        return {transaction}
    }