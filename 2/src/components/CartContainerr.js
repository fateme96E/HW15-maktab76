import React from "react";
import Cart from '../stylesheets/Cart';
import Container from '../stylesheets/Container';
import Tooltip from '../stylesheets/Tooltip';

class Item extends React.Component {
  state = {
    country: ["France", "Greece", "Iran", "Italy", "Japan", "South Korea", "Spain", "England", "Germany", "Turkey"],
    capital: ["Paris", "Athens", "Tehran", "Rome", "Tokyo", "Seoul", "Madrid", "London", "Berlin", "Ankara"],
  };

  render() {
    return (
      <React.Fragment>
        <Container className="list-group">
          {this.state.country.map((listitem, index) => (
            <Cart className="list-group-item">
              {listitem}
              <Tooltip>
                {this.state.capital[index]}  
              </Tooltip>
            </Cart>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default Item; 
