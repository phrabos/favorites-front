import React, { Component } from 'react'
import { getPhotos } from './api-utils'

export default class PhotoSearchPage extends Component {
    state = {
        photos: [],
        favorites: [],
        search: '', 
    }
    componentDidMount = async() => {
       const photos = await getPhotos();

       this.setState({photos})

    }
    render() {
        console.log(this.state)
        return (
            <div className='photos'>
                {
                    this.state.photos.map((photo) => 
                    <div key={`${photo.title}`} className='photo'>
                        <h3>{photo.title}</h3>
                        <p>{photo.date}</p>
                        <img src={photo.url} alt={photo.title}/>
                        <p>{photo.explanation}</p>
                    </div>)
                }    
            </div>        

        )
    }
}
