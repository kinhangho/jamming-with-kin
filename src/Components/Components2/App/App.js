import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';
 


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'song1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'song2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'song3', artist: 'artist3', album: 'album3', id: 3}
      ]
    };
  
  };
render(){
  return(
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
     <SearchBar searchResults={this.state.searchResults}/>
    <div className="App-playlist">
      <SearchResults />
      <Playlist />
    </div>
  </div>
</div>
)
}
}

export default App;
