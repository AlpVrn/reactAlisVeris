import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CatagoryList extends Component {
    state = {
    catagories: []
    }

    getCatagories = () => {
        fetch("http://localhost:3000/catagories")
            .then(response => response.json())
            .then(data => this.setState({ catagories: data }))
            .catch(error => console.error('Error fetching categories:', error));
    }

    componentDidMount() {
        this.getCatagories();
    }

    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <ListGroup>
                    {
                        this.state.catagories.map(catagory => (
                            <ListGroupItem active={catagory.catagoryName === this.props.currentCatagorry?true:false}
                                onClick={() => this.props.changeCatagory(catagory)}
                                key={catagory.id}
                            >
                                {catagory.catagoryName}
                            </ListGroupItem>    
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}
