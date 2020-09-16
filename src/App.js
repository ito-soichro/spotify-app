import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import Home from "./pages/Home";
import Search from "./pages/Search";
import FeaturedList from "./pages/FeaturedList";
import SearchPlaylists from "./pages/SearchPlaylists";
import { useDataLayerValue }  from "./DataLayer";




//SpotifyAPIの全てを取得
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  // 要確認
  const [{ user }, dispatch] = useDataLayerValue();

  

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // console.log("GET TOKEN 👉", token)
    const _token = hash.access_token;

    // ここわからない
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      console.log("_token",_token)

      // spotifyから自分のデータを呼び出す
      spotify.getMe().then((user) =>  {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      // console.log("テスト２",spotify.getUserPlaylists) 

      spotify.getUserPlaylists().then((playlists) => {
        // console.log("playlists🎵",playlists);
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
    // BEM
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
