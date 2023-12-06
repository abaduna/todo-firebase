import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import {db} from "../confic/firebase"

import React from 'react'


function GetInformactionTraker() {
  const [todos, setTodos] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "transaction")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos, newData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <h3>Hola</h3>
    {todos.map((todo) => (<div>
      <p key={todo.description}>{todo.transactionAmount}</p>
      <h3>{todo.transactionType}</h3>
    </div>
      
    ))}
  </div>
  )
}

export default GetInformactionTraker