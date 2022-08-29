import React, { useEffect, useState } from "react";
import "../styles/contact.scss";

function Contact({onNumberChange}) {
  const [defaultNumber] = useSetNumber(onNumberChange)

  return (
    <div className="container">
      <div className="content-spacing">
        <div className="row">
          <div className="col">
            <div className="contact-details">
              <strong>PT. ABC</strong> <br />
                Jl Setiabudi no 33 <br />
               021-{defaultNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const useSetNumber = (newNumber) => {
  let [changedNumber, setDefaultNumber] = useState("")
  useEffect(() => {
    if(newNumber !== undefined) {
      setDefaultNumber(newNumber);
    } else {
      setDefaultNumber("12345678");
    }
  },[newNumber]);
  return [changedNumber]
}

export default Contact;