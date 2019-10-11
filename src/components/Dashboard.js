import React, {Component} from 'react';
import CreateRequest from '../linkings/createRequest'
import ChooseCar from '../linkings/chooseCar';
import Extras from '../linkings/carLinkings/car.js';
import Book from '../linkings/carLinkings/CarBooking';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carToSave: [],
        
        }
    }

    async handleSubmit() {
      // idea: async handle submit to add car to state, then sent the contents of state to server using async await
      // step 1: add data to state
      // stetp 2: send state data to server 
      await this.setState({

      }) 

      // problem, passing this down and sourcing the data from static db
    }   



    render(){
        return (
            <div className="Dashboard-object">
                <ChooseCar />
            </div>
        )
    }


};

export default Dashboard;