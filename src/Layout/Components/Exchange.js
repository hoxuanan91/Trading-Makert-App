import React, { useState, useEffect  } from "react";

const Exchange = () => {
  
  const axios = require("axios");
  const [data, setData] = useState({
    exchangeRate: 0
  });

  const effect = useEffect(() => {
    const getData = () => { //ZQZFOJRK0B5OUBYJ
        axios
          .get(
                'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=VND&apikey=ZQZFOJRK0B5OUBYJ')
          .then(function (response) {
            let exchangeRate = response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
            exchangeRate = Number(exchangeRate);
            exchangeRate = Number(exchangeRate.toFixed(2));
            setData({exchangeRate : exchangeRate});
            
          })
          .catch(function (error) {
            // handle error
            console.log(error); 
          })
      };
      setTimeout(function(){ getData(); }, 10000); 
      return ;
  },[data.exchangeRate]);

  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Rate exchange</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">EUR</th>
            <td>{data.exchangeRate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Exchange;
