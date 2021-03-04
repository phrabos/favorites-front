import request from 'superagent';

const URL = 'https://aqueous-eyrie-89121.herokuapp.com'

export async function getPhotos() {
    const response = await request
        .get(`${URL}/photos`)

    return response.body;
}