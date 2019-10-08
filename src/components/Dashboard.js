import React, {Component} from 'react';
import CreateRequest from '../plugins/createRequest';
import ChooseCar from '../plugins/chooseCar';
import Extras from '../linking/pages';
import Book from '../linking/carBooking';

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