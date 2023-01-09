import React, { useEffect, useState } from "react";
import File from "../componants/File";
import { getAllPhoto } from "../services/api";
 
  const Call = () => {
    const [picture, SetPicture] = useState();
  
    useEffect(async () => {
    
        const data = await getAllPhoto();
        console.log(data)
        SetPicture(data);
      
    }, []);
  
      return (
        <div className="Page-Result">
          <div className="TitleCard">
          <h1>-My Images-</h1></div>
           {picture.map((pic) => (
            <File pic={pic}  />
           ))}
        </div>
      );
    };

export default Call;