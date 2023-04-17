import React from "react";
const Originals = () => {
    const lang = [
        {src:'./images/Ajagantram_Portrait_Thumb_NewShow_set1.jpg'},
        {src:'./images/ADOWS3_Portrait_Thumb_NewShow1.jpg'},
        {src:'./images/Enemy2_Portrait_Thumb.jpg'},
        {src:'./images/MM_Portrait_Thumb_NewShow.jpg'},
        {src:'./images/12.jpg'},
        {src:'./images/Homecoming2_Portrait_Thumb.jpg'},
        {src:'./images/Re_LOVE_STORY_12FEB_Potrait_Thumb_WITHOUT_WTP.jpg'},
        {src:'./images/11.jpg'},
      ];
    return (
        <div class="row">
            <h1>New on Live</h1>
        {
            lang.map((index) => <img src={index.src} alt="" height="180" width="155"></img>)
        }
      </div>
    )
}
export default Originals;
