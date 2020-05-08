import React, { Component } from "react";

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        rates: [],        
      },
      keyWord : null
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

  searchKeyWorld = (e) => {
    this.setState({keyWord:e.target.value });
  }

  render() {
    let rates = this.state.data.rates;
    let keyWord = this.state.keyWord;
    let items = (data) => {
      console.log("data render", data);      
      if (data) {
        const dom =  Object.keys(data).map((item, index) => {
          keyWord = (keyWord) ? keyWord.toUpperCase() : null;
          if( item.includes(keyWord) || keyWord === null)
          return (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{item}</td>
              <td>{data[item]}</td>
            </tr>
          );
        });
        return dom;
      }
    };

    return (
      <div>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.searchKeyWorld}
            />
            
          
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
