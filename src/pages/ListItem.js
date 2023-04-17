import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem =({item, active, setSelected, setHovered })=>{

let navigate=useNavigate()

    const hadleclickelement =(item)=>{
        if(item.name==="Home"){
            return navigate("/home")
        }
       else if(item.name==="TVshows"){
            return navigate("/tvshows")
        }
    }
    return(
        <React.Fragment>
  <span
    className={`item ${active ? "active" : ""}`}
    onClick={hadleclickelement.bind(this,item)}
  >
    {item.name}
  </span>

        </React.Fragment>
    )
}
export default ListItem;