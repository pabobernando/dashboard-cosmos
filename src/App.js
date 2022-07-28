import './App.css' ;
import Logo from './globe.jpeg';
import Osmosis from './osmosis.png';
import Iris from './iris.jpg';
import Crescent from './crescent.jpg';
import Icon from './Icons.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { FaSort } from 'react-icons/fa';

function App() {

 

  return (
    <div className="App">
      <div className='container-fluid bg-black'>
        <div className='row '>
          <div className='col-6'>
          <h3 className='text-white'><FaBeer /> Kewr</h3>
          </div>
          <div className='col-6 text-end'>
          <Button variant='outline-info'>Connect Keplr</Button>
          </div>
        </div>
        <div className='row text-white text-center mt-5'>
          <div className='col-4'>
            <h4 className='border border-info'>Osmosis</h4>
            <h5 className='mt-5'>Balance A</h5>
            <h5>Balance B</h5>
            <h5>Balance C</h5>
          </div>
          <div className='col-4'>
            <h4 className='border border-info'>Iris</h4>
            <h5 className='mt-5'>Balance A</h5>
            <h5>Balance B</h5>
            <h5>Balance C</h5>
          </div>
          <div className='col-4'>
            <h4 className='border border-info'>Crescent</h4>
            <h5 className='mt-5'>Balance A</h5>
            <h5>Balance B</h5>
            <h5>Balance C</h5>
          </div>
        </div>
        <div className='row text-white text-center mt-5 border border-info'>
          <div className='col-2'>
            
            <h4 className='mt-5'> <img src={Osmosis} className='rounded-circle' width='50' /> Osmosis</h4>
            <select className='mt-5 form-select'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button variant='outline-info'>Swap</Button>
          </div>
          <div className='col-2'>
          <h4 className='mt-5'><img src={Iris} className='rounded-circle' width='50' /> Iris</h4>
          <select className='mt-5 form-select'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button variant='outline-info'>Swap</Button>
          </div>
          <div className='col-2'>
          <h4 className='mt-5'><img src={Crescent} className='rounded-circle' width='50' /> Crescent</h4>
          <select className='mt-5 form-select'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button variant='outline-info'>Swap</Button>
          </div>
          <div className='col-6'>
          <img src={Logo} width="500"/>
          </div>
        </div>
        <div className='row background-bottom'>
          <div className='col-6 text-white text-center'>
          <img src={Icon} width='700' />
          </div>
          <div className='col-6 text-white'>
            <h3>IBC </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
