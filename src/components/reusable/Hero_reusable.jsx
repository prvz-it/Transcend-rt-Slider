import React from 'react'

const Hero_reusable = ({heroImg, subText, title}) => {
  return (
    <div className="heroImage">
        {heroImg}
        <div className="heroText">
            <h4>{subText}</h4>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Hero_reusable