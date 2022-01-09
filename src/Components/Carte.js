import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

function Carte({el}) {
    return (
        < >
        <Card style={{ width: '18rem' }}>
  <Card.Body className='bord'>
    <Card.Title>{el.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
    <Card.Text>
        Email : {el.email} 
    </Card.Text>
    <Card.Text>
        Phone : {el.phone}
    </Card.Text>
    <Card.Link href={el.website}>Website</Card.Link>
 
 <Card.Footer>
 <Link to={`/Details/${el.id}`}> Details</Link>
 </Card.Footer>
  </Card.Body>

  
</Card>
        </>
    )
}

export default Carte
