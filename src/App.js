
import Container from 'react-bootstrap/Container';
import ListOfTasks from './Components/UI/ListOfTasks'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => (
  <Container className="p-5">
   <h1 className="header">Welcome...</h1>
    <Container className="p-5 bg-light mb-4 rounded-3">
    <h3 className="header">Your ongoing tasks</h3>
    <ListOfTasks></ListOfTasks>
    </Container>
  </Container>
);

export default App;
