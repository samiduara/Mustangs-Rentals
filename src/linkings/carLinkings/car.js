/* eslint-disable */ 
import React, {Component} from 'react';
import setProgress from '../../actions/setProgress';
import setCar from '../../actions/setCar';
import PropTypes from "prop-types";
import chevyTahoe from '../../pages/images/Chevy_Tahoe.jpg';
import fordMustang from '../../pages/images/Ford_Mustang.jpg';
import fordRaptor from '../../pages/images/Ford_Raptor.jpg';
import gmcSiera from '../../pages/images/GMC_Sierra.jpg';
import peterBit from '../../pages/images/Peter_Bit.jpg';
import landRover from '../../pages/images/Land_Rover.jpg';
import toyotaTundra from '../../pages/images/Toyota_Tundra.jpg';
import toyotaLandcruiser from '../../pages/images/Toyota_Landcruiser.jpg';
import bmwX6 from '../../pages/images/Bmw_X6.jpg';
import mercedesGwagon from '../../pages/images/Mercedes_Gwagon.jpg';
import jeepWrangler from '../../pages/images/Jeep_Wrangler.jpg';

class Car extends Component {
    getImage = carName => {
        if(carName === 'Chevy Tahoe') {
            return chevyTahoe
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
        const {
            carName,vehicleType,topSeller,noPassengers,description,transmission,airConditioning,fuel,price
        }= this.props
        
        return(
            <div>
                <div className="car-details">
                    <img src={this.getImage(carName)} alt="car"/>
                    <div className="details">
                        <div>
                            <p className="car-name">{carName}</p>
                            <p className="divider">|</p>
                            <p className="carvehicle-type">{vehicleType}</p>
                            <p className="divider">|</p>
                            {
                                topSeller
                                &&
                                <p className="top-seller">Top Seller</p>
                            }
                        </div>
                        <ul>
                            <li><i></i>{noPassengers}</li>
                            <li><i></i>{description}</li>
                            <li><i></i>{transmission}</li>
                            <li><i></i>{airConditioning && 'Air Conditioning'}</li>
                            <li><i></i>{fuel}</li>
                        </ul>
                    </div>
                    <button>[+] View Car Details</button>
                    
                </div>
                <div className="price">
                    <p><strong>{`$${price}`}</strong></p>
                    <p>Unlimited Free miles included</p>
                    <button onClick={() => {
                    }}>Select</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setProgress: (payload) => dispatch(setProgresss(payload)),
    setCar: (payload) => dispatch(setCar(payload))
})


export default Car;