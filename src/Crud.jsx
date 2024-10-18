import React, { useEffect, useState } from 'react'

function Crud() {


    const [input,setInput] = useState({
        name : "",
        email : "",
        pass : "",
    })

    const [arr,setArr] = useState(()=>{
        const storeData = localStorage.getItem("data");
        return storeData ? JSON.parse(storeData) : [];
    })

    const [edit,setEdit] = useState(null)
 

    const handleForm =(e) => {
        e.preventDefault();
        if(edit !== null){
            const updateArr = [...arr]
            updateArr[edit] = input;
            setArr(updateArr)  
            setEdit(null)
        }else{
            setArr([...arr,input])
        }
        console.log(input);

        setInput({
            name :"",
            email : "",
            pass  : "",
        })
        e.target.reset()
    }

    const deleteData = (i) => {
        // const updateData = JSON.parse(localStorage.getItem("data"))
        // updateData.splice(index,1)
        // setArr(updateData)
        // localStorage.setItem("data",JSON.stringify(updateData))

        const updateData = arr.filter((_,index)=> index !== i);
        setArr(updateData)
        localStorage.setItem("data",JSON.stringify(updateData))
    }

    const editData = (i) => {
        setEdit(i);
        setInput(arr[i])
    }

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])

  return (
    <>
        <form onSubmit={handleForm}>
            <input type="text" placeholder='Enter Name' value={input.name} onChange={(e)=>setInput({...input,name : e.target.value})} /> <br /><br />
            <input type="email" placeholder='Enter email' value={input.email} onChange={(e)=>setInput({...input,email : e.target.value})} /> <br /><br />
            <input type="password" placeholder='Enter password' value={input.pass} onChange={(e)=>setInput({...input,pass : e.target.value})} /> <br /><br />
            <button>{edit === null ? "Submit" : "Update"}</button>
        </form>

    {arr.length > 0 &&
        <table border={1}>
            <thead>
                <tr>
                    <th>sr no</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {arr.map((ele, i) => (
                    <tr key={i}> 
                        <td>{i + 1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.pass}</td>
                        <td>
                        <button onClick={()=>editData(i)}>Edit</button>
                        <button onClick={() => deleteData(i)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    }
    </>
  )
}

export default Crud