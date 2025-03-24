
import './App.css'
import Counter from './counter'
function App() {
 
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

    <Counter></Counter>









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
