import React, { Component } from 'react';

class SongList extends Component {
    render() {
        return (<div>
            <p>{this.props.feed.entry[0]["im:name"].label}</p>
            

        </div>
    
            

        )
        
    }

  

}


export default SongList;