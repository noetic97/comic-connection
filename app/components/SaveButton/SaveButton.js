import React from 'react';

const SaveButton = () => {
  const length = favorites.length === 0 ? <span /> : <span>: {favorites.length}</span>;
  const bgImage = { backgroundImage: `url(${xWing})`};
  const favClass = inFavorites ? 'favorite-button in-favorites' : 'favorite-button';

  return (
      <button className={favClass} style={bgImage} onClick={displayFavorites}>
        <h2 className="favorite-button-label">Favorites{length}</h2>
      </button>
  );
}
