import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Items from './Item';
import Data from './../Resources/json/recipes.json';

class Recipes extends Component {

  render() {
    let data =  this.props.stateData;
    let loadData =  this.props.loadData;
    // let data =  Data.contents;
    console.log(data);
    let stillLoading = true;
    if(data[0].title != null){
        stillLoading = false;
    }

    let loadContent = <Col className="stillLoading">Loading...</Col>
    if(!stillLoading){
    loadContent = data.map((element,i) => {
            console.log(element);
            return <Items key={i} itemData={element}/>
        })
    }

    setTimeout(function(){ 
        loadData(Data.contents);
     }, 1500);
    
    return (
        <Container fluid>
            <Row className="row-color">
                {
                    loadContent
                }
            </Row>
        </Container>
    );
  }
}

export default Recipes;