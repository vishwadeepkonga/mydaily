import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Todo.css'

function Todo({todos,deleteTodo,EditTodo}) {
  return todos.map((item,index)=>
    <Card className='container' >
      <Card.Header as="h5">{item.title}</Card.Header>
      <Card.Body>
        <Card.Title>{item.username}</Card.Title>
        <Card.Text>
            {item.description}
        </Card.Text>
        <Card.Text>
            {item.enddate.toLocaleString()
}
        </Card.Text>

        <Button variant="primary" onClick={()=>deleteTodo(index)}>Delete</Button>
        <Button variant="primary" onClick={()=>EditTodo(index)}>Edit</Button>

      </Card.Body>
    </Card>

  )
  
}

export default Todo;