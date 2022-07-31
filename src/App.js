import './App.css' ;
import Logo from './globe.jpeg';
import Osmosis from './osmosis.png';
import Iris from './iris.jpg';
import Crescent from './crescent.jpg';
import Icon from './tangan.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { FaSort } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import axios from 'axios';

function App() {

  const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('http://0.0.0.0:1317/cosmos/bank/v1beta1/balances/cosmos1g7dna0gp4nec5rza4q25htj0cjgswrxe6adac9')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

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
        <div className='row text-white text-center mt-5 '>
          <div className='col-2'>
            
            <h4 className='mt-5'> <img src={Osmosis} className='rounded-circle' width='50' /> Osmosis</h4>
            <select className='mt-5 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button variant='outline-info'>Swap</Button>
          </div>
          <div className='col-2'>
          <h4 className='mt-5'><img src={Iris} className='rounded-circle' width='50' /> Iris</h4>
          <select className='mt-5 form-select bg-black text-white border border-white' >
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-white border border-white'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button variant='outline-light'>Swap</Button>
          </div>
          <div className='col-2'>
          <h4 className='mt-5'><img src={Crescent} className='rounded-circle' width='50' /> Crescent</h4>
          <select className='mt-5 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-info border border-info'>
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
        <div className='row mt-5'>
          <div className='col-6 text-white text-center'>
          <img src={Icon} width='400' />
          </div>
          <div className='col-6 text-white'>
            <div className='row mt-5'>
            <div className='col-5'>
            <select className='form-select bg-black text-info border border-info'>
              <option>Osmosis</option>
              <option>Gravity Bridge</option>
              <option>Iris</option>
              <option>Crescent</option>
            </select>
            </div>
            <div className='col-2 text-center'>
            <FaAngleDoubleRight size={40}/>
            </div>
            <div className='col-5'>
            <select className='form-select bg-black text-info border border-info'>
              <option>Osmosis</option>
              <option>Gravity Bridge</option>
              <option>Iris</option>
              <option>Crescent</option>
            </select>
            </div>
          </div>
          <div className='row mt-5 text-center'>
            <div className='col-3 text-white'>
              <h4>Select a Chain</h4>
              <select className='form-select bg-black text-white border border-white'>
                <option>Osmosis</option>
                <option>Crescent</option>
                <option>Iris</option>
                <option>Grav</option>
              </select>
            </div>
            <div className='col-2 text-white'>
              <h4 className='mt-4'></h4>
              <FaExchangeAlt size='40'/>
            </div>
            <div className='col-3 text-white'>
              <h4>Select a Chain</h4>
            <select className='form-select bg-black text-white border border-white'>
                <option>Osmosis</option>
                <option>Crescent</option>
                <option>Iris</option>
                <option>Grav</option>
              </select>
            </div>
            <div className='col-2 text-white'>
              <h4>Coin</h4>
            <select className='form-select bg-black text-white border border-white'>
                <option>Osmosis</option>
                <option>Crescent</option>
                <option>Iris</option>
                <option>Grav</option>
              </select>
            </div>
            <div className='col-2 text-white'>
              <h4></h4>
              <Button variant='outline-info mt-4'>Submit</Button>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
