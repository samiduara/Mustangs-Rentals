import React,{Component} from 'react';
import {data} from '../../components/constants/data';
import chevyTahoe from '../../pages/images/Chevy_Tahoe.jpg';
import fordMustang from '../../pages/images/Ford_Mustang.jpg';
import fordRaptor from '../../pages/images/Ford_Raptor.jpg';
import gmcSiera from '../../pages/images/GMC_Sierra.jpg';
import peterBit from '../../pages/images/Peter_Bit.jpg';
import landRover from '../../pages/images/Land_Rover.jpg';
import toyotaTundra from '../../pages/images/Toyota_Tundra.jpg';
import toyotaLandcruiser from '../../pages/images/Toyota_Landcruiser.jpg';
import mercedesGwagon from '../../pages/images/Mercedes_Gwagon.jpg';
import bmwX6 from '../../pages/images/Bmw_X6.jpg';
import jeepWrangler from '../../pages/images/Jeep_Wrangler.jpg';
class Book extends Component {
    state = {
        bookingConfirmed: false
    }
    filterByCarName = (data,carName) => {
        const filteredData = data.filter(car => car.carName === carName);
        return filteredData
    }
    getImage = carName => {
      if(carName === 'Chevy Tahoe') {
            return chevyTahoe;
        }else if(carName === 'Ford Mustang') {
            return fordMustang;
        }else if(carName === 'Ford Raptor'){
            return fordRaptor;
        }else if(carName === 'GMC Sierra') {
            return gmcSiera;
        }
        else if(carName === 'Land Rover') {
            return landRover;
        }
        else if(carName === 'Toyota Tundra') {
            return toyotaTundra;
        }
        else if(carName === 'Toyota Landcruiser') {
            return toyotaLandcruiser;
        }
        else if(carName === 'Mercedes Gwagon') {
            return mercedesGwagon;
        }
        else if(carName === 'peter Bit') {
            return peterBit;
        }
        else if(carName === 'BMW X6') {
            return bmwX6;
        }
        else if(carName === 'Jeep Wrangler') {
            return jeepWrangler;
        }
    }
    render(){
        return(
            <div>
            {
                this.filterByCarName(data,this.props.Car).map(car => 
                <div className="booking">
                    <img src={this.getImage(car.carName)} alt="car"/>
                    <h1>{car.carName}</h1>
                    <h2>{`$${car.price}`}</h2>
                </div>
                )
            }
            {
                this.state.bookingConfirmed
                ?
                <h1 id="thanks">Thanks for booking a car with us</h1>
                :
                <button id="confirm-booking" onClick={() => this.setState({ bookingConfirmed: true })}>Confirm Booking</button>
            }
              </div>
    )
    }
};

export default Book;