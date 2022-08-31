import React from 'react'
import {
    Link
} from 'react-router-dom'
import './style.css'


const DemoFooter = () => {
    return ( <
        div className = "prv-footer-area" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-12" >
        <
        p > Perfect Portfolio Theme For Your Next Step < /p> <
        Link to = "/preview"
        className = "theme-btn" > Purshase Now < /Link> <
        /div> <
        /div> <
        /div> <
        /div>
    )
}

export default DemoFooter;