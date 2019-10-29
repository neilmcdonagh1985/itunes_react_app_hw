import React, { Component } from 'react';
import SongList from '../components/SongList';

class SongContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            currentSong: null
        }

    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({ songs: songs}))
        .catch(err => console.error);
    }


    render() {
        return (
        <div>
            <h1>Choose Your Song</h1>
            <SongList songs={this.state.songs}></SongList>
        </div>

        )
        
        
    }
}

export default SongContainer;