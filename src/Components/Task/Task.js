import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Task = (props) =>
{
    return (
    <Card className='m-3'>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>)
}

export default  Task;