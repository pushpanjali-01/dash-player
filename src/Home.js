import React from "react";
import Tvshows from "./Tvshows";
import Originals from "./Originals";  
const  Home= () => {
    const home = [
        { src: './images/tamil.jpg' },
        { src: './images/telugu.jpg' },
        { src: './images/malayalam.jpg' },
        { src: './images/marathi.jpg' },
        { src: './images/hindi.jpg' },
        { src: './images/english.jpg' },
        { src: './images/bengali.jpg' },
        { src: './images/kannada.jpg' },   
      ];
      const largeimg=[
        { src: 'images/Undekhi_web_tray_dated_23march_rev (1).jpg' },  
      ];
    return (
    <div className="row">
        <div className="banner">
        <div className="banner__contents">
            <h1 className="banner__title"><h1>LIVE</h1> STREAMING</h1>           
        </div>
        </div>

        <div>
            <Tvshows/>
        </div>
        
        <div className="row_images" >
            <h1>Watch in your language</h1>
            {
            home.map((index) => <img src={index.src} alt="" height="180" width="155"></img>)
            }
        </div> 

        <div >
            <Originals/>
        </div>

        <div className="row__largeimage" >
        {
            largeimg.map((index) => <img src={index.src} alt="" ></img>)
        }
        </div>
    </div>
    )
}
export default Home;
