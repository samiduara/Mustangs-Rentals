import React, {Component} from 'react';
import CreateRequest from '../linkings/createRequest'
import ChooseCar from '../linkings/chooseCar';
import Extras from '../linkings/carLinkings/car';
import Book from '../linkings/carLinkings/CarBooking';

class Dashboard extends Component {
    render(){
        return (
            <div>
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
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
})

export default (mapStateToProps)(Dashboard);