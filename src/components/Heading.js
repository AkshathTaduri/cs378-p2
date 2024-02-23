import React from 'react';

const Heading = ({imageSrc, altText, heading, subHeading}) => {
    return (
        <div>
            <img src={imageSrc} alt={altText} class="logo"></img>
            <p class="styled-heading">{heading}</p>
            <p class="heading">{subHeading}</p>
        </div>
    )
}

export default Heading;