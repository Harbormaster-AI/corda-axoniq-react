import axios from 'axios';

const BRAKING_API_BASE_URL = "http://localhost:8011/Braking";

class BrakingService {

    getBrakings(){
        return axios.get(BRAKING_API_BASE_URL + '/' );
    }

    createBraking(braking){
        return axios.post(BRAKING_API_BASE_URL  + '/create', braking);
    }

    getBrakingById(brakingId){
        return axios.get(BRAKING_API_BASE_URL + '/load?brakingId=' + brakingId);
    }

    updateBraking(braking){
        return axios.put(BRAKING_API_BASE_URL + '/update', braking);
    }

    deleteBraking(brakingId){
        return axios.delete(BRAKING_API_BASE_URL + '/delete?brakingId=' + brakingId);
    }
}

export default new BrakingService()