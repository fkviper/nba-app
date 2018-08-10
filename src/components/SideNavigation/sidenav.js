import React from 'react';
import SideNav from 'react-simple-sidenav';

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
            OPTIONS
            </SideNav>            
        </div>
    );
}

export default SideNavigation;