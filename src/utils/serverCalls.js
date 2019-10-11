import axios from 'axios'
/// Define to interact with our server

 function addCar (car) {
   return axios.post('/api/cars', car)
 }
function getAllcars(){
    return fetch('/api/cars')
}

 export default {
     addCar,
     getAllcars
 }
