import React, { Component } from 'react';
import './favorites.css';
import { removeFavorite, getFavorites } from './api-utils.js';

export default class FavoritesPage extends Component {
    state = {
        photos: [],
        favorites: [],
        selectedPhoto: 'https://apod.nasa.gov/apod/image/1901/orionred_WISEantonucci_960.jpg',
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

    handleSelected = (photo) => {
        this.setState({selectedPhoto: photo.url})
        window.scrollTo(0, 0)
    }

    handleRedirect = () => {

    }

    render() {
        console.log(this.state)
        return (
            <>
                <div className='container'>
                    <a href={this.state.selectedPhoto} target='_blank' rel='noreferrer'>
                    <img src={this.state.selectedPhoto} alt='selected' className='selected' onClick={this.handleRedirect()} />
                    </a>
                    <div className='fav-photos'>
                        {
                            this.state.favorites.map((photo, i) => 
                            <div key={`${i}`} className='fav-photo'>
                                {/* <p>{photo.title}</p> */}
                                <p>{photo.date}</p>
                                <img
                                style={{ border: this.state.selectedPhoto === photo.url ? '6px solid purple' : ''}} 
                                src={photo.url} 
                                alt={photo.title}
                                onClick={() => this.handleSelected(photo)}
                                className='fav-img'
                                />
                                {/* <p>{photo.explanation}</p> */}
                                <p><button onClick={()=> this.handleFavoriteClick(photo)}   >Remove from Favorites</button></p>
                            </div>)
                        }    
                    </div>        
                </div>
            </>
        )
    }
}
