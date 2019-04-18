import React from 'react';
import Sidenav from 'react-simple-sidenav';

const SideNavigation = (props) => {

    return (
        <div>
             <Sidenav             
                onHidenav= {props.onHidenav} 
                showNav= {props.showNav}
                navStyle={{
                    background:'#242424',
                    maxWith:'220px',

                }}
             >
                 <div>Home</div>
                 <div>Home</div>
                 <div>Home</div>
                 <div>Home</div>
             </Sidenav>
        </div>
    )

}

export default SideNavigation;