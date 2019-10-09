import React, {Component} from 'react';
import CreateRequest from '../linkings/createRequest'
import ChooseCar from '../linkings/chooseCar';
import Extras from '../linkings/carLinkings/car.js';
import Book from '../linkings/carLinkings/CarBooking';

class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard-object"> 
                {/* {console.log(this.props.state)}
                {
                    this.props.progress ===1
                    &&
                    <CreateRequest />
                }
                {
                    this.props.progress ===2
                    &&
                    <ChooseCar />
                }
                {
                    this.props.progress ===3
                    &&
                    <Extras />
                }
                {
                    this.props.progress ===4
                    &&
                    <Book />
                } */}

                <form>


                </form>




                <h1>THIS MY TEST PAGE</h1>
                <CreateRequest />
                <ChooseCar />
                <Extras /> 
                <Book />
            </div>
        )
    }


};

export default Dashboard;