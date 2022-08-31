import React from 'react'
import {
    Link
} from 'react-router-dom'
import './style.css'

import abimg from '../../images/about/about.png'

const Abmain = () => {
    return ( <
        div className = "wpo-about-item" >
        <
        div className = "row" >
        <
        div className = "col-lg-6" >
        <
        div className = "wpo-about-img" >
        <
        img src = {
            abimg
        }
        alt = "" / >
        <
        /div> <
        /div> <
        div className = "col-lg-6" >
        <
        div className = "wpo-about-text" >
        <
        h2 > I create products not just art < /h2> <
        p > My name is John Smith.I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis. < /p> <
            Link to = "/about"
        className = "theme-btn" >
        Lets Talk < /Link> <
        /div> <
        /div> <
        /div> <
        /div>
    )
}

export default Abmain;