import React from "react";

const Icon = ({src, ...props}) => (
    <div {...props}>
        <img src={src} alt="" />
    </div>
);

export default Icon;
