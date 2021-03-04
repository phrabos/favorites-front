import request from 'superagent';

const URL = 'https://aqueous-eyrie-89121.herokuapp.com'

export async function getPhotos() {
    const response = await request
        .get(`${URL}/apod`)
    
    return response.body;
}

export async function setApod(image) {
    const response = await request
        .post(`${URL}/apod`)
        .send(image)

    return response.body;    
}