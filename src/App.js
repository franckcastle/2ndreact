import jordan from './mj.jpg'
import './App.css';
import './style.css';
import { Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1> who's The Best ?</h1>
      <div className="row">
       <div className="col-md-6">
        <img src="/tsawer/img1.jpg" className="App-img" alt="img" />
        <Button variant="outline-secondary" className="bt">Vote</Button>
        <iframe src="https://www.youtube.com/watch?v=2CHT0q8QBy4" />
      </div>
      <div className="col-md-6">
      <img src={jordan} className="App-img2" alt ='salem' /> 
      <Button variant="outline-secondary" className="bt">Vote</Button>
      
      </div>   
    </div>
    </div>
  );
}

export default App;
