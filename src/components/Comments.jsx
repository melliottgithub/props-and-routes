import React from "react";
import Image from "./Image";

const Comments = (props) => {
  return (
    <div className="media">
      <a className="d-flex align-self-center" href="/">
        <Image urlImage={props.urlImage} />
      </a>
      <div className="media-body">
        <h5>Media heading</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Comments;
