import React from 'react';
import Axios from 'axios'
import { useState } from 'react';


const Users = () => {
const [name, setName] = useState('');
const [userName , SetUserName]=useState("");
const [data,setData]=useState(null);
//const [tab, settab] = useState([])
var tab =[]
const [Test, setTest] = useState([])
const Show=_=>{
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>
    {
setTest(res.data)
//tab=[...Test, ...data]
    }
    )
}

const handleSubmit = () => {

    const data={
        name:name,
        useName : userName 
    };
    Axios.post('https://jsonplaceholder.typicode.com/users', data).then(res => {
        setName('');
        SetUserName('');
        setData(res.data);

        console.log(res.data);
      })}



      return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)} placeholder="Your name"></input> <br/> 
            <input type="text" onChange={e => SetUserName(e.target.value)} placeholder="Your username"></input> <br/> 

            <button onClick={handleSubmit}>Add</button>   <br/>         
            <button onClick={Show}>Show List</button> <br/> 

            <ul>
                {Test.map(el=> <li>{el.name}</li> )}
            </ul>

        </div>
    );
}

export default Users;
