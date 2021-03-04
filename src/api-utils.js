import request from 'superagent';

const URL = 'http://localhost:3000'

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

export async function searchPhotos(query) {
    const response = await request
        .get(`${URL}/apod/${query}`)
    
    return response.body;
}

export async function addFavorite(photo, token) {
    const response = await request
        .post(`${URL}/api/favorites`)
        .set('Authorization', token)
        .send(photo)

    return response.body;
}

export async function getFavorites(token) {
    const response = await request
    .get(`${URL}/api/favorites`)
    .set('Authorization', token)

    return response.body;
}

export async function userLogin(email, password){
    const response = await request
    .post(`${URL}/auth/signin`)
    .send({email, password})

    return response.body;
}

export async function userSignup(email, password){
    const response = await request
    .post(`${URL}/auth/signup`)
    .send({email, password})

    return response.body;
}

export async function removeFavorite(imageId, token) {
    const response = await request
    .delete(`${URL}/api/favorites/${imageId}`)
    .set('Authorization', token)

    return response.body;
}