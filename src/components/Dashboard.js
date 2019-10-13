import React, {Component} from 'react';
import CreateRequest from '../linkings/createRequest'
import ChooseCar from '../linkings/chooseCar';
import Extras from '../linkings/carLinkings/car.js';
import Book from '../linkings/carLinkings/CarBooking';
import API from '../utils/serverCalls'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carToSave: null,
        
        }
    }

  handleSubmit = async (e, car) => {
        e.preventDefault();
        API.addCar(car)
        .then(console.log('this should work'))
    }   

    render(){
        return (
            <div className="Dashboard-object">
                <ChooseCar handleSubmit={this.handleSubmit}/>
            </div>
        )
    }


};

export default Dashboard;