import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Spreading from './Spreading'
import Prop from './Prop'

function App() {


 {/* ================Props=================== */}
  
 const [sum,setSum] = useState()
 const Lax = () => {
    let a=5,b=5,ans;
   ans = a+b;
    setSum(ans);
    console.log(ans);
}



const student={
  name:"Lax",
  age: 19,
  city : "Ahmedabad"
}

const arr = [1,"Lax",2,"om"]


{/* ==============counter-using Prop================== */}

const [val,setVal] = useState(0)
const func = () => {
 
const sum = val+1
 setVal(sum)
 
 console.log(val);
}

  return (
    <>
     PROMP
    <br />
     <Prop 
           newans={sum}
           btn={Lax}
          // ================== counter=========
          func = {func}
          props = {val}
          array={arr}
          studentdata={student}
          />
    {/* <Counter /> */}
    {/* <Spreading /> */}
    </>
  )
}

export default App
