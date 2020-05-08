import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const axios = require("axios");
  const [data, setData] = useState({
    weather_data :   {
      weather_descriptions: 'unknow',
      temperature: 'unknow',
      humidity: 'unknow',
      cloudcover: 'unknow',
      pressure: 'unknow',
      observation_time :'unknow'
    }
  });

  const effect = useEffect(() => {
    const getData = () => { //ZQZFOJRK0B5OUBYJ
        axios
          .get(
                'http://api.weatherstack.com/current?access_key=1c9c29406c50614789e524bdc79b1316&query=Paris')
          .then(function (response) {
            console.log(response,response.data.current.weather_descriptions[0]);
            let weather_data = [];
            weather_data.weather_descriptions = response.data.current.weather_descriptions[0];
            weather_data.temperature = response.data.current.temperature;
            weather_data.humidity = response.data.current.temperature;
            weather_data.cloudcover = response.data.current.cloudcover;
            weather_data.pressure = response.data.current.pressure;
            weather_data.observation_time = response.data.current.observation_time;
            setData({weather_data : weather_data});            
          })
          .catch(function (error) {
            // handle error
            console.log(error); 
          })
      };
      setTimeout(function(){ getData(); }, 10000); 
      return ;
  },[data.weather_data]);



  return (
    <div >
     <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{ width: "10rem"  }} src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/trailhead_basics/get-started-with-trailhead/images/7c5a7f114fd815473d6d800b896b0a64_astro-new-flogo.png" />
        <Card.Body>
          <Card.Title>What is new today</Card.Title>
          <Card.Text>
            Hello An, I hope you well. Let's discover what is new today.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>The weather now in Paris is {data.weather_data.weather_description} </ListGroupItem>
          <ListGroupItem><Link to="/about">About</Link></ListGroupItem>
        </ListGroup>
        <Card.Body>
         <Card.Link href="/exchange">Exchange</Card.Link>
          <Card.Link href="#">Stock</Card.Link>
        </Card.Body>
      </Card> 

      
    </div>
  );
};

export default Dashboard;
