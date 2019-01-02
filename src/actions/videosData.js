import {GET_VIDEOS_DATA} from '../actions/actionTypes';
import {get} from 'lodash';

 
const url = 'https://api.redtube.com/'


const requestOptions = {
    method: 'GET',
    headers: { 'access-control-allow-origin':'*' },
};



export const getVideos= () => (dispatch) => {       
    fetch(url,requestOptions)
    .then((response)=>{
        response.text().then(text => {
            const data = text && JSON.parse(text);
            console.log(data);
        })
    })
    .catch((error)=>{
        debugger;
        //Error Handling
        // dispatch()
    })
}


const handleVideoData= data => {  return { "type":GET_VIDEOS_DATA,data } }