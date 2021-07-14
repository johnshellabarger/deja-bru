import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState([])

    const handleClick = (e, { name }) => {
        setActiveItem(name)
    }

    return (
        <Menu fixed='top'>
            <NavLink to='/'>
                <Menu.Item header to='/home' onClick={handleClick} name='home'>Deja-Bru</Menu.Item>
            </NavLink>
            <NavLink to='/home'>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={handleClick}
                />
            </NavLink>
            <NavLink to='/visited'>
                <Menu.Item
                    to='/visited'
                    name='Visited'
                    active={activeItem === 'Favorites'}
                    onClick={handleClick}
                />
            </NavLink>
            <NavLink to='/favorites'>
                <Menu.Item
                    to='/favorites'
                    name='Favorites'
                    active={activeItem === 'Favorites'}
                    onClick={handleClick}
                />
            </NavLink>
        </Menu>
    )
}

export default Navbar;
