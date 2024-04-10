import React from 'react';
import back from './artworks/back.png'
import bela from './artworks/bela.png'
import butterfly from './artworks/butterfly.png';
import catc from './artworks/catc.png';
import land from './artworks/land.png';
import land2fiver from './artworks/land2fiver.png';
import mist from './artworks/mist.gif'
import robo2fiver from './artworks/robo2fiver.png';
import robo11 from './artworks/robo11.png';
import robo13 from './artworks/robo13.png';
import robo18 from './artworks/robo18.png';
import "./art.css";
import MediaQuery from 'react-responsive'

function Artwork() {
 //  const mobile = useMediaQuery({ query: '(max-width: 430px)' })
  return (
    <div className="artwork-container">
      <h2>Artwork Gallery</h2>
      <div className="gallery">
      
        <div className="image1">
        <MediaQuery minWidth={360}>
          <img src= {back} alt="Artwork 1" />
          </MediaQuery>
          <p> </p>
        </div>
        
        <div className="image2">
        <MediaQuery minWidth={360}>
          <img src={bela} alt="Artwork 2" />
          </MediaQuery>
          <p> </p>
        </div>
        <div className="image3">
        <MediaQuery minWidth={360}>
          <img src={butterfly} alt="Artwork 3" />
          </MediaQuery>
          <p> </p>
        </div>

        <div className="image4">
        <MediaQuery minWidth={360}>
          <img src={catc} alt="Artwork 3" />
          </MediaQuery>
          <p> </p>
        </div>
        <div className="image5">
        <MediaQuery minWidth={360}>
          <img src={land} alt="Artwork 3" />
          </MediaQuery>
          <p> </p>
        </div>
        {/* <div className="image">
          <img src={mist} alt="Artwork 3" />
          <p>Artwork 3</p>
        </div> */}
        <div className="image6">
        <MediaQuery minWidth={360}>
          <img src={land2fiver} alt="Artwork 3" />
          </MediaQuery>
          <p> </p>
        </div>
        <div className="image7">
        <MediaQuery minWidth={360}>
          <img src={robo2fiver} alt="Artwork 3" />
          </MediaQuery>
          <p> </p>
        </div>
        <div className="image8">
        <MediaQuery minWidth={360}>
          <img src={robo11} alt="Artwork 3" />
          </MediaQuery>
          <p> </p>
        </div>
        <div className="image9">
        <MediaQuery minWidth={360}>
          <img src={robo13} alt="Artwork 3" />
          </MediaQuery>
          <p> </p>
        </div>
        <div className="image10">
        <MediaQuery minWidth={360}>
          <img src={robo18} alt="Artwork 3" />
          </MediaQuery>
          <p> </p>
        </div>
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Artwork;
