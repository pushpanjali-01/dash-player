import React, { useEffect, useState } from "react";
import { Menudata } from "./Menudata";
import ListItem from "./pages/ListItem";



const useKeyPress = function (targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);
  
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    React.useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
  
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });
  
    return keyPressed;
  };

const Menu = () => {
  const [selected, setSelected] = useState(undefined);
  const rightPress = useKeyPress("ArrowRight");
  const leftPress = useKeyPress("ArrowLeft");

  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    if (Menudata.length && rightPress) {
      setCursor((prevState) =>
        prevState < Menudata.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [rightPress]);
  useEffect(() => {
    if (Menudata.length && leftPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [leftPress]);
  useEffect(() => {
    if (Menudata.length && hovered) {
      setCursor(Menudata.indexOf(hovered));
    }
  }, [hovered]);

  return (
    <div className="Menu">
     
      
      {Menudata.map((item, i) => (
        <ListItem
          key={item.id}
          active={i === cursor}
          item={item}
          setSelected={setSelected}
          setHovered={setHovered}
        />
      ))}
    </div>
  );

  //         const handleclick=(e,item)=>{
  //             if(e.keyCode===39){
  //                console.log("right");
  //             }
  // }

  //         return(
  //             <div className="Menu">
  //                 {
  //                     Menudata.map((item,index)=>{
  //                         return(

  //                                 <li onClick={handleclick.bind(this,item)}>{item.name}</li>

  //                             )})
  //                 }

  //            </div>
  //         )
};
export default Menu;
