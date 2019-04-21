import React from 'react';
import Sidenav from 'react-simple-sidenav';
import SideNavItems from './sidenav_items';

const SideNavigation = (props) => {

    return (
        <div>
             <Sidenav             
                onHideNav= {props.onHideNav} 
                showNav= {props.showNav}
                navStyle={{
                    background:'#242424',
                    maxWith:'220px'

                }}
             >
                 <SideNavItems/>
             </Sidenav>
        </div>
    )

}

export default SideNavigation;