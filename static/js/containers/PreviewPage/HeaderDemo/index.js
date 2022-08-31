import React from 'react'
import {
    Link
} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenuv2 from '../MobileMenuv2'
import logo from '../images/logo.png'


const HeaderDemo = (props) => {
    return ( <
        div className = "header-style-1 header-style-demo" >
        <
        div className = "container" >
        <
        div className = "header-content" >
        <
        div className = "logo" >
        <
        Link to = "/"
        title = "" > < img src = {
            logo
        }
        alt = "" / > < /Link> <
        /div> <
        nav className = "d-lg-block d-none header-b" >
        <
        ul >
        <
        li > < AnchorLink href = '#demo' > Demo < /AnchorLink></li >
        <
        li > < AnchorLink href = '#features' > Features < /AnchorLink></li >
        <
        li > < AnchorLink href = '#page' > Single Page < /AnchorLink></li >
        <
        li > < AnchorLink href = '#support' > Support < /AnchorLink></li >
        <
        /ul> <
        /nav> <
        div className = "contact" >
        <
        div className = "cart-search-contact" >
        <
        Link to = "/preview"
        className = "theme-btn" > Purshase Now < /Link> <
        /div> <
        /div> <
        div className = "clearfix" > < /div>

        <
        /div> <
        MobileMenuv2 / >
        <
        /div> <
        /div>
    )
}

export default HeaderDemo;