import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

function Country(props) {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch(`https://restcountries.com/v3.1/name/${props.country}`)
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
      <div>
        <h4>Country</h4>
        <br />
        <button onClick={apiGet}>{props.country}</button>
        <br />
        <div>
          {data.map((item) => (
            <div>
              <div>
                {item.continents}/{item.altSpellings[2]}
              </div>
              <div>
                <div>{item.flags.png}</div>
                <div>
                  {item.altSpellings[2]}
                  <span>({item.fifa})</span>
                </div>
              </div>

              <div className="country_item_grid">
                <div>
                  <p>Demonyms</p>
                  <p>{item.demonyms.eng.f}</p>
                </div>
                <div>
                  <p>Calling Code</p>
                  <p>
                    {item.idd.root}
                    {item.idd.suffixes[0]}
                  </p>
                </div>
                <div>
                  <p>Currencies</p>
                  <p>
                    {item.currencies.INR.symbol}
                    {item.currencies.INR.name}
                  </p>
                </div>
                <div>
                  <p>Population</p>
                  <p>{item.population}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Country;
