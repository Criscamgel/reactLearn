import React from 'react';
import Style from './sidenav.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

const SideNavItems = () => {

    const items = [

        {
            type: Style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },

        {
            type: Style.option,
            icon: 'file-text-o',
            text: 'News',
            link: '/'
        },

        {
            type: Style.option,
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },

        {
            type: Style.option,
            icon: 'sing-in',
            text: 'sing in',
            link: '/sing-in'
        },

        {
            type: Style.option,
            icon: 'sing-out',
            text: 'sing out',
            link: '/sing-out'
        }
    ]

    const showItems = () => {
        return items.map((item, i) => {
            return (
        <div key={i} className={item.type}>
            <Link to={item.link}>          
                <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
        </div>
            )
        })
    }


    return (
        
        <div>
            {showItems()}
        </div>

    )

}

export default SideNavItems;