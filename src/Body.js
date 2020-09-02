import React from 'react';
import "./Body.css";
import Header from './Header';
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Body({spotify,}) {
  const [{ discover_weekly } , dispatch] = useDataLayerValue();
  // console.log("discover_weekly確認👉",discover_weekly?.id)
  // console.log("テスト")

  const playPlaylist = () => {
    spotify.play({
      context_uri: `spotify:playlist:${discover_weekly?.id}`,
    })
    
    .then((res) => {
      spotify.getMyCurrentPlayingTrack().then((response) => {
        
        dispatch({
          type:"SET_ITEM",
          item: response.item,
        });
        dispatch({
          type:"SET_PLAYING",
          playing: true,
        });
      });
    });
  };
  const playSong = (id) => {
    // console.log("IDIDIDIDIDID",id)
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((response) => {
          dispatch({
            type: "SET_ITEM",
            item: response.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img 
          src={discover_weekly?.images[0].url}
          alt=""
          />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      {/* playlistの表示$ */}
      <div classname="body__songs">
      <div className="body__icons">
        <PlayCircleFilledIcon 
          className="body__shuffle"
          onClick={playPlaylist}
        />
        <FavoriteIcon fontSize="large"/>
        <MoreHorizIcon />
      </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
