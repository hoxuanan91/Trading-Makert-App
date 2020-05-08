import React, { Component } from "react";

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        rates: [],
      },
    };
  }

  componentDidMount() {
    var self = this;
    const axios = require("axios");
    axios
      .get("https://api.exchangeratesapi.io/latest")
      .then(function (response) {
        console.log("response", response);
        self.setState({ data: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    let rates = this.state.data.rates;
    let items = (data) => {
      console.log("data render", data);
      if (data) {
        return Object.keys(data).map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{item}</td>
              <td>{data[item]}</td>
            </tr>
          );
        });
      }
    };

    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Devise</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            <React.Fragment>{items(rates)}</React.Fragment>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exchange;
