import React from 'react'
import "../../pages/recommend/RecommendListBody.css"
import Header from '../../components/header/Header';
import SongRow from "../../components/songplay/SongRow";
import { useDataLayerValue } from "../../DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function SearchPlaylist({spotify}) {
  const [{ searchplaylist } , dispatch] = useDataLayerValue();

  const playPlaylist = () => {
    spotify.play({
      context_uri: `spotify:playlist:${searchplaylist?.id}`,
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
          src={searchplaylist?.images[0].url}
          alt=""
          />
       <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{searchplaylist?.name}</h2>
          <p>{searchplaylist?.description}</p>
        </div>
      </div>
      <div className="body__icons">
        <PlayCircleFilledIcon 
          className="body__shuffle"
          onClick={playPlaylist}
        />
        <FavoriteIcon fontSize="large"/>
        <MoreHorizIcon />
      </div>
        {searchplaylist?.tracks.items.map((item) => (
          <SongRow 
          playSong={playSong} 
            track={item.track} 
            />
          ))}
      </div> 
    )
}

export default SearchPlaylist
