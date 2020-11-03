import React from 'react'
import Header from '../../components/header/Header';
import "../search/SearchBody.css"
import { useDataLayerValue } from '../../DataLayer'
import SearchResult  from '../search/SearchResult'

function SearchBody({spotify}) {
  const [{ search },dispatch] = useDataLayerValue();
  return (
    <div className="SearchBody">
      <Header spotify={spotify} />
      <h1>検索結果</h1>
      <div className="homebody__info">
        {search.playlists.items.map((item) => (
          <SearchResult images={item.images} id={item.id} name={item.name} />))} 
      </div>
    </div>
  )
}

export default SearchBody
