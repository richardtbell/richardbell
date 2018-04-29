import React from 'react'

import { StyledNavLink } from '../UI/StyledNavLink'

const NavigationBar = () => {
    return (
        <header>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/automatic-plant-watering-system">
            Automatic plant watering system
            </StyledNavLink>
            <hr />
        </header>
    )
}

export default NavigationBar
