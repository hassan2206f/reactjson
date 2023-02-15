import React from 'react'
import { useEffect, useState } from 'react';




export default function Table() {
    const [myjson , setMyjson] = useState([])
 
    const [mylimit , setMylimit] = useState(10)

   
 const click12 =()=>{
  setMylimit(10);
  fetch(`https://api.instantwebtools.net/v1/passenger?page=2&size=10`)
      .then(res => {
        return res.json();
      }).then(resp=>{
        console.log(resp.data)
        console.log(resp.data.length)
        setMyjson(resp.data)

      })
     
 }
 const click2 =()=>{
  setMylimit(15);
  fetch(`https://api.instantwebtools.net/v1/passenger?page=2&size=15`)
      .then(res => {
        return res.json();
      }).then(resp=>{
        console.log(resp.data)
        console.log(resp.data.length)
        setMyjson(resp.data)

      })
 }
 const click3 =()=>{
  setMylimit(20);
  fetch(`https://api.instantwebtools.net/v1/passenger?page=2&size=20`)
      .then(res => {
        return res.json();
      }).then(resp=>{
        console.log(resp.data)
        console.log(resp.data.length)
        setMyjson(resp.data)

      })
     
 }

   
    useEffect(()=>{
   
    fetch(`https://api.instantwebtools.net/v1/passenger?page=1&size=10`)
      .then(res => {
        return res.json();
      }).then(resp=>{
        console.log(resp.data)
        console.log(resp.data.length)
        setMyjson(resp.data)

      })
     
       
      
      
      
    },[])
    const getButtons = count => {
      let buttons = [];
      for (let i = 1; i < count; i++) {
        
        buttons.push(<button onClick={nubbtn}>{i}</button>);
      }
      return buttons;
    };
   function nubbtn(i) {
   let fetching = fetch(`https://api.instantwebtools.net/v1/passenger?page=${i}&size=10`)
      .then(res => {
        return res.json();
      }).then(resp => {
        console.log(resp.data);
        console.log(resp.data.length);
        setMyjson(resp.data);

      });
      fetching = fetch('')
  }
  
  
    console.warn(myjson)
    console.log(myjson)
  
  
   
    return (
     <>
     <div className='container'>
      
     <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      10
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" onClick={click12}>10</a>
      <a class="dropdown-item" onClick={click2}>15</a>
      <a class="dropdown-item" onClick={click3}>20</a>
    </div>
  
    <div className='table mt-5'>
      <table border={1} cellSpacing={10}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Trips</th>
            <th>Airline Name</th>
            <th>Country</th>
           
          </tr>
        </thead>
        <thead>
        {myjson.map((e)=>
        <tr>
          <td>{e._id}</td>
          <td>{e.name}</td>
          <td>{e.trips}</td>
          <td>{e.airline[0].name}</td>
          <td>{e.airline[0].country}</td>
        </tr>
        )}
        </thead>
      </table>
    </div>
  </div>
  <div className='btn'>
    {getButtons(10)}
  
  </div>
  
  
     </div>
     </>
    );
  }
 
  

