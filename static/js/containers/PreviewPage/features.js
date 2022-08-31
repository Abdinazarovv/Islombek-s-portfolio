import React from 'react'
import './style.css'

import fes1 from './images/icon/1.png'
import fes2 from './images/icon/2.png'
import fes3 from './images/icon/3.png'
import fes4 from './images/icon/4.png'

const DemoFeatures = () => {
    return ( <
        div id = "support"
        className = "afeatures-area" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-lg-3 col-md-6 col-sm-12 col-12" >
        <
        div className = "afeatures-wrap" >
        <
        div className = "afeatures-icon" >
        <
        img src = {
            fes1
        }
        alt = "" / >
        <
        /div> <
        div className = "afeatures-text" >
        <
        h2 > Best Price < /h2> <
        p > Best Price in Market < /p> <
        /div> <
        /div> <
        /div> <
        div className = "col-lg-3 col-md-6 col-sm-12 col-12" >
        <
        div className = "afeatures-wrap" >
        <
        div className = "afeatures-icon" >
        <
        img src = {
            fes2
        }
        alt = "" / >
        <
        /div> <
        div className = "afeatures-text" >
        <
        h2 > 900 + < /h2> <
        p > Clients Trust Wpocean < /p> <
        /div> <
        /div> <
        /div> <
        div className = "col-lg-3 col-md-6 col-sm-12 col-12" >
        <
        div className = "afeatures-wrap" >
        <
        div className = "afeatures-icon" >
        <
        img src = {
            fes3
        }
        alt = "" / >
        <
        /div> <
        div className = "afeatures-text" >
        <
        h2 > 7 Days < /h2> <
        p > Dedicated Support Team < /p> <
        /div> <
        /div> <
        /div> <
        div className = "col-lg-3 col-md-6 col-sm-12 col-12" >
        <
        div className = "afeatures-wrap" >
        <
        div className = "afeatures-icon" >
        <
        img src = {
            fes4
        }
        alt = "" / >
        <
        /div> <
        div className = "afeatures-text" >
        <
        h2 > Free < /h2> <
        p > Lifetime Updates < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    )
}

export default DemoFeatures;