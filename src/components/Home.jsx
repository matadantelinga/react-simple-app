import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';

function Home() {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [changedNumber, setChangedNumber] = useState("12345678");
  const handleChange = (e) => {
    setPhoneNumber(e.target.value) 
  }
  const setNumber = (e) => {
    e.preventDefault();
    setChangedNumber(phoneNumber);
    setPhoneNumber("")
  }

  return (
      <div>
        <div className="container">
          <div className='content-spacing text-center'>
            <h1>This is Homepage</h1>
          </div>
        </div>
        <About></About>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="content-spacing">
                <form onSubmit={setNumber}>
                  <div className="input-group text-center">
                    <label>No. Telp</label>
                    <input id="phone" type="tel" className="form-control" value={phoneNumber} onChange={handleChange} />
                    <button type='submit' className="btn-main">Go</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-10">
              <Contact onNumberChange={changedNumber}></Contact>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;