import React,{ Component } from 'react';
import GifList from './components/GifList'
import GifSearch from './components/GifSearch'

export default class GifListContainer extends Component{
    state={
        gifs: []
    }

    componentDidMount(){
       this.fetchResult()

    }

    fetchResult = (query = 'dolphins') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(({result}) => {
            this.setState({
               gifs: result.map( gif => ({url: gif.images.original.url}))
            })
        })
    }


    render(){
        return(
            <div>
                <GifSearch fetchResult={this.fetchResult}/>
                <GifList gifs={this.state.gifs}/>       
            </div>
        )
    }
}
