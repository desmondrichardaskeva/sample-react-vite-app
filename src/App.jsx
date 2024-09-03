import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Content from './Components/Content';
import Button from 'react-bootstrap/Button';




function App() {
  const [cnt, setCnt] = useState(0);

  return (
    <div className='app'>
      <div className='subApp'>
        <h1>Vite + React</h1>
        <Header cnt={cnt} setCnt={setCnt} />
        <div>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Primary</Button>
            </Card.Body>
          </Card>
          <Content />
        </div>

      </div>
    </div>
  )
}

export default App
