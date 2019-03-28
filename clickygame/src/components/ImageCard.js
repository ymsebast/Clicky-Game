import React from "react";



function ImageCard(props) {
    return (
        <div className="card">
        <div className="col-sm">
            <div className="img-container">
            <span onClick={() => props.removeimg(props.name)} className="remove">
                <img alt={props.name} src={props.image} height="200" width="150" />
                
            </span>
            </div>
         
            {/* <span onClick={() => props.removeimg(props.id)} className="remove">
            </span> */}
            </div>
        </div>
    );
}

export default ImageCard;
