import React , {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Registry(){
    const [registryData, setResgistryData] = useState([])
    const [textInput, setTextInput] = useState('')
    const [error, setError] = useState(false)

    const addItem =(e) => {
        e.preventDefault();
        const tempData =[...registryData];
        tempData.push(textInput)
        setResgistryData(tempData)
        setTextInput("")
        
    }
    useEffect(() => {
        if(textInput.length >10) setError(true);
    }, [textInput])
    console.log(registryData)

    const removeItem = (index) => {
        let newData = [...setResgistryData]
        newData.splice(index,1)
        setResgistryData(newData)
    } 

    const editItem = (index) => {
        if(error) return;

        let newData = [...registryData]
        newData[index] = textInput;

        setResgistryData(newData)
    }

    return(
        <div>
            <h1>registry</h1>
            <Link to="/">click here to home</Link>
            <form onSubmit={addItem}>
                <label> Text Input: 
            <input type='text' value={textInput} onChange ={(e) => setTextInput(e.target.value)}/>
                </label>
            <input type='submit' value ='Submit' />
            </form>
            {error ? <span style={{color: "red"}}> Error Occured. </span> : null}
            {
               registryData.map((item, index) => {
                   return(
                       <li key = {index}>{item} 
                       <button onClick ={() => removeItem(index)}> Remove </button>
                       <button onClick ={() => editItem(index)}> Edit </button>
                       </li>
                   )
               }
               ) 
            }
        </div>
    )
}

export default Registry;