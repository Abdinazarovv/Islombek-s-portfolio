import React from 'react'
import {
    Link
} from 'react-router-dom'
import './style.css'

import himg from './images/slider/hero-shape.png'

const HeroDemo = () => {
    return ( <
        section className = "demohero-area demohero-style-2" >
        <
        div className = "slide-wrap" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col col-lg-6 col-12 slide-caption" >
        <
        p className = "wow fadeInDown"
        data - wow - delay = "1.0s" > Follio Specially Created
        for < /p> <
        h2 className = "wow fadeInLeftSlow"
        data - wow - delay = "1.5s" > Multi - Purpose Theme
        for Any Kind of Portfolioo < /h2> <
        div className = "wow fadeInUp"
        data - wow - delay = "2.0s" > < Link to = "/preview"
        className = "theme-btn" > Contact me < /Link></div >
        <
        /div> <
        div className = "col-md-6 " >
        <
        div className = "prevslide-img wow fadeInRightSlow"
        data - wow - duration = "2000ms" >
        <
        img src = {
            himg
        }
        alt = "" / >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> 
    )
}

export default HeroDemo;