import React from "react";
const Tvshows = () => {
    const home = [
        { src: './images/1.jpg' },
        { src: './images/2.jpg' },
        { src: './images/3.jpg' },
        { src: './images/4.jpg' },
        { src: './images/5.jpg' },
        { src: './images/6.jpg' },
        { src: './images/7.jpg' },
        { src: './images/8.jpg' },
        { src: './images/9.jpg' },
        { src: './images/10.jpg' },   
      ];

      var imageSelected = 0;
      var tags = document.getElementsByTagName("img");
      var totalImageNoImageFitstoContainer = 0;
  
  React.useEffect(() => {
    
    window.addEventListener("keydown", handleKeyDown);


    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }
  );

  const handleKeyDown = (e) => {
    // document.getElementById("updateValue").innerHTML = "the RIGHT is " + imageSelected + 'tag length' + tags.length;

    if (e.keyCode === 39 ){
      if (imageSelected < home.length - 1) {
        tags[imageSelected].className = "unselected";
        imageSelected = imageSelected + 1;
      }
    }
    else if (e.keyCode === 37) {
      if (imageSelected > 0) {
        console.log( home.indexOf(imageSelected));
        tags[imageSelected].className = "unselected";
        imageSelected = imageSelected - 1;
      }
    }

    if (imageSelected >= totalImageNoImageFitstoContainer) {
      tags[imageSelected - totalImageNoImageFitstoContainer].style.display ="none";
      tags[imageSelected].style.display="inline-flex";
       }
    else if (imageSelected <= totalImageNoImageFitstoContainer-1) {
      tags[imageSelected+(totalImageNoImageFitstoContainer-1)].style.display='none';
      tags[imageSelected].style.display = "inline-flex";
    }
    tags[imageSelected].className = "selected";
  };

    return (
        <div class="row">
            <h1>Today's hot picks</h1>
        {
            home.map((item,index) => <img src={item.src} alt="" className={index===0 ? "selected" : ""} height="180" width="120"></img>)
        }
        </div>
      
    )
}
export default Tvshows;
