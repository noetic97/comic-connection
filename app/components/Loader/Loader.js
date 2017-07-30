import React from 'react';

const Loader = () => {
  const gifArray = [
    '/app/assets/batman-running.gif',
    '/app/assets/drawing-self.gif',
    '/app/assets/robin.gif',
    '/app/assets/spiderman.gif',
    '/app/assets/line-to-full.gif',
    '/app/assets/rough-to-finished.gif',
    '/app/assets/serenity-loader.gif',
    '/app/assets/one-punch-man.gif',
  ];
  const random = Math.floor(Math.random() * gifArray.length);
  const loaderGif = gifArray[random];

  return (
    <div className="loading-container">
      <div className="loading">
        <div className="l-1 letter">L</div>
        <div className="l-2 letter">o</div>
        <div className="l-3 letter">a</div>
        <div className="l-4 letter">d</div>
        <div className="l-5 letter">i</div>
        <div className="l-6 letter">n</div>
        <div className="l-7 letter">g</div>
        <div className="l-8 letter">.</div>
        <div className="l-9 letter">.</div>
        <div className="l-10 letter">.</div>
      </div>
      <img src={loaderGif}
        className="loader-gif"
        alt="loading image"/>
    </div>
  );
};

export default Loader;
