import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Items extends Component {
  render() {
      console.log(this.props.itemData);
    return (
        <Col md={4}>
            <div className="item-div">
                <img className="col-image" src={this.props.itemData.imageList.landscape32medium2x.url}/>
                <div className="item-details">
                    {this.props.itemData.title}
                </div>
            </div>
        </Col>
    );
  }
}

export default Items;