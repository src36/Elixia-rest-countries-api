import React from "react";
import { useState, useEffect } from "react";
import Country from "./Country";
import { Button } from "react-bootstrap";

function Region(props) {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch(`https://restcountries.com/v3.1/region/${props.region}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  return (
    <>
      <h4>Region</h4>
      <div className="region-container">
        <br />
        <div>
          <Button variant="primary" onClick={apiGet}>
            {props.region}
          </Button>
        </div>
        <br />
        <div>
          <ul>
            {data.map((item) => (
              <li>
                <button key={item.name.common}>{item.name.official}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Country country={"india"} />
        </div>
      </div>
    </>
  );
}

export default Region;
