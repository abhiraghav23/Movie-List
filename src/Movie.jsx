import React from 'react'

const Movie = ({ genres, onSelectGenre }) => {
  return (
    <div className="genre-filter">
      <button onClick={() => onSelectGenre('All')}>All</button>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onSelectGenre(genre)}>
          {genre}
        </button>
      ))}
    </div>
  )
}

export default Movie