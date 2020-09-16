import React from 'react';
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue }  from "./DataLayer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue()
  // console.log("playlists🎵",playlists)

  
  return (
    <div className="sidebar">
     <Link to="/"> <img 
      className ="sidebar_logo"
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""
       />
       </Link>
        <Link to="/home"><SidebarOption Icon={HomeIcon} title="Home" /></Link>
        <Link to="/home"><SidebarOption Icon={SearchIcon} title="Search" /></Link>
        <SidebarOption Icon={LibraryMusicIcon} title="your Library" />

        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map((playlist) => (
         <SidebarOption  title={playlist.name} id={playlist.id}/>
      ))}
      </div>
    )
}

export default Sidebar
