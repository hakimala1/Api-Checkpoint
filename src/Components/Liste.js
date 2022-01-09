import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carte from './Carte'
import '../App.css';


function Liste() {
    const [listOfUSer,setListOfUSers]=useState([])
    useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>setListOfUSers(res.data))
     .catch(err=>err)
        
    }, [])
  
    // console.log(listOfUSer)
    return (<>
        <h1>Liste Of Users</h1>
        <div className='container'>
            
            {             listOfUSer.map((el,i)=><Carte el={el} key={el.id} /> )}

        </div>
        </>
    )
}

export default Liste
