import React from 'react'
import Header from '../Header/Header';
import "../SearchPage/SearchBody.css"
import { useDataLayerValue } from '../DataLayer'
import SearchResult  from '../SearchPage/SearchResult'

function SearchBody({spotify}) {
  const [{ search },dispatch] = useDataLayerValue();
console.log("searchの中身",search )
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
