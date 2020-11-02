import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./SongPlay/Player";
import Home from "./RecommendPage/Home";
import Search from "./SearchPage/Search";
import FeaturedList from "./RecommendPage/RecommendList";
import SearchPlaylists from "./SearchPage/SearchPlaylists";
import { useDataLayerValue }  from "./DataLayer";


//SpotifyAPIの全てを取得
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>  {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getFeaturedPlaylists().then((featuredplaylists) => {
        dispatch({
          type: "SET_FEATUREDPLAYLISTS",
          featuredplaylists: featuredplaylists,
        });
      });
    }
    
  }, [token, dispatch]);

 
  return (
    <div className="App" >
    { token ? 
      <Router>
        <Switch>
          <Player  exact path="/" spotify={spotify} /> 
          <Home exact  path="/home" spotify={spotify} /> 
          <Search exact  path="/Search" spotify={spotify}/>
          <FeaturedList exact  path="/FeaturedList/:id"  spotify={spotify} />
          <SearchPlaylists exact  path="/Search/:id"  spotify={spotify} />
        </Switch>
      </Router>
      :  
     <Login />  
     }    
    </div>

  );
}

export default App;
