import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar'

const Layout = props => {
    return (
        <div>
            <NavigationBar />
            {props.children}
        </div>
    )
}


export default Layout
