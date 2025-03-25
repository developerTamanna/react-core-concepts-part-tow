
import './App.css'
import Users from './user'
import Posts from './posts'
import Batsman from './batsmn'
import Counter from './counter'
import { Suspense } from 'react';  // ✅ Suspense ইম্পোর্ট করো

// const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())


const fetchPosts = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


function App() {
 

const postPromise = fetchPosts()




 function handleClick(){
  alert('i m clicked.')
 }

 const handleCLick3 =()=>{
  alert('click3')
 }

const handleAdd5 =(num)=>{
 const newNum = num+5;
 alert (newNum)
}

const addHandle7 =(num)=>{
  const newAdd = num+8
  alert(newAdd)
}

  return (
    <>
      
      <h3>Vite + React</h3>

       <Suspense fallback={<h4>post are coming</h4>}>
            <Posts postPromise={postPromise}></Posts>
       </Suspense>




     {/* <Suspense fallback={<h3>loading...</h3>}>
    <Users fetchUser ={fetchUser}></Users>
      </Suspense>       */}
    <Counter></Counter>

   <Batsman></Batsman>

   
    
    




      <button onClick={handleClick}>click me</button>

      <button onClick={function handleClick2(){
        alert("click2")
      }}>click2</button>
      <button onClick={handleCLick3}>click3</button>
      <button onClick={()=> alert('click4')}>click4</button>

      {/* <button onClick={handleAdd5(7)}>Add5</button> */}
      <button onClick={()=> handleAdd5(5)
      }>add5</button>
     <button onClick={()=>addHandle7(9)}>added</button>
    </>
  )
}

export default App
