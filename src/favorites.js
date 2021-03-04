import React, { Component } from 'react'
import { removeFavorite, getFavorites } from './api-utils.js';

export default class FavoritesPage extends Component {
    state = {
        photos: [],
        favorites: [],

    }
    componentDidMount = async() => {
       await this.fetchFavorites();

    }

    fetchFavorites = async () => {
        const favorites = await getFavorites(this.props.token);

        this.setState({favorites})
    }

    handleFavoriteClick = async (photo) => {
        await removeFavorite(photo.id, this.props.token);

        await this.fetchFavorites();
    }

    render() {
        console.log(this.state)
        return (
            <>
                <div className='photos'>
                    {
                        this.state.favorites.map((photo, i) => 
                        <div key={`${i}`} className='photo'>
                            <h3>{photo.title}</h3>
                            <p>{photo.date}</p>
                            <img src={photo.url} alt={photo.title}/>
                            {/* <p>{photo.explanation}</p> */}
                            <p><button onClick={()=> this.handleFavoriteClick(photo)}>Remove from Favorites</button></p>
                        </div>)
                    }    
                </div>        
            </>
        )
    }
}
