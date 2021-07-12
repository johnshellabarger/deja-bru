import React, { Component, useState } from 'react'
import { Menu } from 'semantic-ui-react';

const Header = () => {
    const [activeItem, setActiveItem] = useState([])

    const handleClick = (e, { name }) => {
        setActiveItem(name)
    }

    return (
        <Menu>
            <Menu.Item header onClick={handleClick} name='home'>Deja-Bru</Menu.Item>
            <Menu.Item
                name='Search'
                active={activeItem === 'Search'}
                onClick={handleClick}
            />
            <Menu.Item
                name='Favorites'
                active={activeItem === 'Favorites'}
                onClick={handleClick}
            />
            <Menu.Item
                name='Find New Brewery'
                active={activeItem === 'Find New Brewery'}
                onClick={handleClick}
            />
        </Menu>
    )
}

export default Header
