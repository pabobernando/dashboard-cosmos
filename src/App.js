import './App.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { FaSort } from 'react-icons/fa';

function App() {

 

  return (
    <div className="App">
      <div className='container-fluid bg-dark'>
        <div className='row'>
          <div className='col-6'>
          <h3 className='text-white'><FaBeer /> Kewr</h3>
          </div>
          <div className='col-6 text-end'>
          <Button>Connect Keplr</Button>
          </div>
        </div>
        <div className='row text-white text-center mt-5'>
          <div className='col-4'>
            <h4 className='border border-white'>Osmosis</h4>
            <h5 className='mt-5'>Balance A</h5>
            <h5>Balance B</h5>
            <h5>Balance C</h5>
          </div>
          <div className='col-4'>
            <h4 className='border border-white'>Iris</h4>
            <h5 className='mt-5'>Balance A</h5>
            <h5>Balance B</h5>
            <h5>Balance C</h5>
          </div>
          <div className='col-4'>
            <h4 className='border border-white'>Crescent</h4>
            <h5 className='mt-5'>Balance A</h5>
            <h5>Balance B</h5>
            <h5>Balance C</h5>
          </div>
        </div>
        <div className='row text-white text-center mt-5 border border-primary'>
          <div className='col-4 border border-primary'>
            <h4 className=''>Osmosis</h4>
            <select className='mt-5'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button>Swap</Button>
          </div>
          <div className='col-4 border border-primary'>
          <h4>Iris</h4>
          <select className='mt-5'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button>Swap</Button>
          </div>
          <div className='col-4 border border-primary'>
          <h4>Crescent</h4>
          <select className='mt-5'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button>Swap</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
