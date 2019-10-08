import React, {Component} from 'react';
import setProgresss from '../../actions/setProgress';
import setCar from '../../actions/setCar';
import PropTypes from "prop-types";
import chevyTahoe from '../../extras/images/Chevy_Tahoe.jpg';
import fordMustang from '../../extras/images/Ford_Mustang.jpg';
import fordRaptor from '../../extras/images/Ford_Raptor.jpg';
import gmcSiera from '../../extras/images/GMC_Sierra.jpg';
import peterBit from '../../extras/images/Peter_Bit.jpg';
import landRover from '../../extras/images/Land_Rover.jpg';
import toyotaTundra from '../../extras/images/Toyota_Tundra.jpg';
import toyotaLandcruiser from '../../extras/images/Toyota_Landcruiser.jpg';
import jeepWrangler from '../../extras/images/Jeep_Wrangler.jpg';
import bmwX6 from '../../extras/images/BMW_X6.jpg';
import mercedesGwagon from '../../extras/images/Mercedes_Gwagon.jpg';

class Car extends Component {
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
        else if(carName === 'Jeep Wrangler') {
            return jeepWrangler;
        }
        else if(carName === 'BMW X6') {
            return bmwX6;
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
                        this.props.setProgress(3);
                        this.props.setCar(carName);
                    }}>Select</button>
                </div>
            </div>
        )
    }
}

Car.propTypes = {
    carName: PropTypes.string.isRequired,
    vehicleType: PropTypes.string.isRequired,
    topSeller: PropTypes.bool.isRequired,
    noPassengers: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    transmission:PropTypes.string.isRequired,
    airConditioning: PropTypes.bool.isRequired,
    fuel: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setProgress: (payload) => dispatch(setProgresss(payload)),
    setCar: (payload) => dispatch(setCar(payload))
})
export default (mapStateToProps,mapDispatchToProps)(Car);