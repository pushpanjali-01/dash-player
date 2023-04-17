import axios from "axios";

import React,{useEffect,useState} from "react";

const Movies =()=>{
    const [demo,setDemo]=useState();
    console.log(demo)
    useEffect(()=>{
      let data = "https://api.tvmaze.com/shows"
      
           axios.get(data).then((response)=>{
            setDemo(response.data)
            console.log(response.data)
         }).catch((error)=>{
          console.log(error)
         })
      },[])
      
    return(
           <>
             <h2>TV maze</h2>
              <div className="container">
                {demo && demo.map((item)=>{
                  return(
                   
                    <img src={item.image.medium} alt="" width="150" height="200"/>
                    
                  )
                  } )} 
              </div>  
              </>

           )
}
export default Movies;