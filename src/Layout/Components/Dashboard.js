import React, { useState, useEffect  } from "react";

const Dashboard = () => {
  const axios = require("axios");
  const [data, setData] = useState({
    c: 0,
    h: 0,
    l: 0,
    o: 277.2,
    pc: 275.03,
    t: 1587911584,
  });

  const effect = useEffect(() => {
    const getData = () => {
        axios
          .get(
            "https://finnhub.io/api/v1/quote?symbol=AAPL&token=bqiq1ffrh5r89luqplk0"
          )
          .then(function (response) {
            // handle success
            console.log(response.data);
            setData(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      };
      setTimeout(function(){ getData(); }, 3000); 
      return ;
  },[data]);

  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">c</th>
            <th scope="col">h</th>
            <th scope="col">l</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{data.c}</td>
            <td>{data.h}</td>
            <td>{data.l}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
