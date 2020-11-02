import React from 'react'
import "../RecommendPage/RecommendListBody.css"
import Header from '../Header/Header';
import SongRow from "../SongPlay/SongRow";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function FeaturedListBody({spotify}) {
  const [{ featuredtracks } , dispatch] = useDataLayerValue();

  const playPlaylist = () => {
    spotify.play({
      context_uri: `spotify:playlist:${featuredtracks?.id}`,
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
    <div className="FeaturedListBody"  >
      <Header spotify={spotify} />
      <div className="body__info">
      <img 
          src={featuredtracks?.images[0].url}
          alt=""
          />
       <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{featuredtracks?.name}</h2>
          <p>{featuredtracks?.description}</p>
        </div>
      </div>
      <div classname="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon 
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </div>
          {featuredtracks?.tracks.items.map((item) => (
            <SongRow 
            playSong={playSong} 
             track={item.track} 
             />
            ))}
      </div>
    </div>
  )
}

export default FeaturedListBody
