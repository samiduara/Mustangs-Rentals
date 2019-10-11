/* eslint-disable */ 

import React, {Component} from 'react';
import userService from '../../utils/userService';
import './mycars.css'
import API from '../../utils/serverCalls';

class MyCars extends Component {
    constructor(props){
        super(props)
        this.state={
            cars:[],
        }
    }

    async componentDidMount(){
        API.getAllcars()
        .then(res => res.json())
        .then(data => this.setState({
            cars: data,
        }))
    }

    render(){
        const { cars } = this.state
        console.log(this.state.cars)
        return(
            <div>
                <h1>My saved cars</h1>
                {cars && cars.map(car => (
                    <>
                        <h4>{car.manufacturer} {car.model}</h4>
                    </>
                ))}
            </div>
        )
    }


}

export default MyCars;