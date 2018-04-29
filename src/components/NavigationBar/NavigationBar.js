import React from 'react'

import { StyledNavLink } from '../UI/StyledNavLink'

const NavigationBar = (props) => {
    return (
        <header>
            <StyledNavLink to="/">Home</StyledNavLink>
            <hr />
        </header>
    )
}

export default NavigationBar
