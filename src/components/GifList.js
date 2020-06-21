import React, { Component } from 'react';

export default function GifList(props){

    return(
        <ul>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt=""/>)}
        </ul>
    )
}
