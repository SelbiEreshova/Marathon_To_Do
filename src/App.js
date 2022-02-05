import Container from 'react-bootstrap/Container';
import ListOfTasks from './Components/UI/ListOfTasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProgressBarTask from './Components/UI/ProgressBarTask';

import './App.css';

const App = () => (
  <Container className="p-5">
    <h1 className="header">Welcome...</h1>
    <Row>
      <Col>
      <Container className="p-5 bg-light mb-4 rounded-3">
        <h3 className="header">Your ongoing tasks</h3>
        <ListOfTasks></ListOfTasks>
      </Container></Col>
      <Col>
      <Container className="p-5 bg-light mb-4 rounded-3">
        <h3 className="header">Your progress</h3>
        <ProgressBarTask></ProgressBarTask>
      </Container></Col>
    </Row>

  </Container>
);

export default App;
