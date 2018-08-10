import React from 'react';
import SideNav from 'react-simple-sidenav';

//items
import NavItems from './navItems';

const SideNavigation =(props)=>{
    return (
        <div>
            <SideNav 
                showNav={props.showNav}
                onShowNav={props.onShowNav}
                onHideNav={props.OnHideNav}
                navStyle={{
                    background:'#242424',
                    maxWidth:'220px'
                }}
            >
            <NavItems/>
            </SideNav>            
        </div>
    );
}

export default SideNavigation;