import React from "react";

const data = [
  { src: "./images/1.jpg" },
  { src: "./images/2.jpg" },
  { src: "./images/3.jpg" },
  { src: "./images/4.jpg" },
  { src: "./images/5.jpg" },
  { src: "./images/6.jpg" },
  { src: "./images/7.jpg" },
  { src: "./images/8.jpg" },
  { src: "./images/9.jpg" },
  { src: "./images/10.jpg" },
  { src: "./images/11.jpg" },
];


export default function App() {
  var imageSelected = 0;
  var tags = document.getElementsByTagName("img");
  var totalImageNoImageFitstoContainer = 5;
  
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);


    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }
  );

  const handleKeyDown = (e) => {
    // document.getElementById("updateValue").innerHTML = "the RIGHT is " + imageSelected + 'tag length' + tags.length;

    if (e.keyCode === 39) {
      if (imageSelected <= data.length - 1) {
        tags[imageSelected].className = "unselected";
        imageSelected = imageSelected + 1;
      }
    }
    else if (e.keyCode === 37) {
      if (imageSelected >= 0) {
        console.log( data.indexOf(imageSelected));
        tags[imageSelected].className = "unselected";
        imageSelected = imageSelected - 1;
      }
    }

    if (imageSelected >= totalImageNoImageFitstoContainer) {
      tags[imageSelected - totalImageNoImageFitstoContainer].style.display ="none";
       }
    else if (imageSelected <= totalImageNoImageFitstoContainer) {
      tags[imageSelected].style.display = "inline-flex";
    }
    tags[imageSelected].className = "selected";
  };

  return (
    <div className="App">
      <div class="row_images">
        <div id="map">
          {data.map((index) => (
            <img src={index.src} alt="" height="190" width="200" />
          ))}
        </div>
      </div>
    </div>
  );
}
