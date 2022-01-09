import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import '../App.css'

function Details() {
    const {userId} = useParams()
    const [user,setUser]= useState({})
    const navigate = useNavigate()
    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err))

    },[])
    return (
        <>
        <h1>Details User</h1>
        <div className='container' >
           
            <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
             <ListGroup.Item>{user.name}</ListGroup.Item>
            <ListGroup.Item>{user.username}</ListGroup.Item>
            <ListGroup.Item>{user.email}</ListGroup.Item>
            <ListGroup.Item>{user.phone}</ListGroup.Item>
            <ListGroup.Item>{user.website}</ListGroup.Item>
            </ListGroup>
            <Button onClick={()=>navigate(-1)}>Go Back</Button>
            </Card>
        </div>
        </>
    )
}

export default Details
