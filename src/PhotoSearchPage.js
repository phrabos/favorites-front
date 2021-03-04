import React, { Component } from 'react'
import { searchPhotos, addFavorite, getFavorites } from './api-utils.js';

export default class SearchPage extends Component {
    state = {
        photos: [],
        favorites: [],
        search: '', 
    }
    componentDidMount = async() => {
       if (this.props.token) await this.fetchFavorites();

    }
    handleSearchChange = (e) => {
        this.setState({search: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const photos = await searchPhotos(this.state.search);
        this.setState({photos})
    }

    fetchFavorites = async () => {
        const favorites = await getFavorites(this.props.token);

        this.setState({favorites})
    }

    handleFavoriteClick = async (photo) => {
        await addFavorite({
            date: photo.date,
            explanation: photo.explanation,
            media_type: photo.media_type,
            title: photo.title,
            url: photo.url,
        }, this.props.token);

        await this.fetchFavorites();
    }

    render() {
        console.log(this.state)
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search Photos</button>
                </form>
                <div className='photos'>
                    {
                        this.state.photos.map((photo, i) => 
                        <div key={`${i}`} className='photo'>
                            <h3>{photo.title}</h3>
                            <p>{photo.date}</p>
                            <img src={photo.url} alt={photo.title}/>
                            {/* <p>{photo.explanation}</p> */}
                            <p><button onClick={()=> this.handleFavoriteClick(photo)}>Add to Favorites</button></p>
                        </div>)
                    }    
                </div>        
            </>
        )
    }
}
