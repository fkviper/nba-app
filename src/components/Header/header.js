import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';

//fontawesome
import FontAwesome from 'react-fontawesome';
import SideNav from '../SideNavigation/sidenav';

const Header = (props)=>{
    const sideNav=()=>{
        return  (
        <div>
            <FontAwesome name="bars" 
            style={{
                color:'#dfdfdf',
                padding:'10px',
                cursor:'pointer'
            }}
            onClick={props.OnShowNav}
            />
        </div>);
    }

    const logo=()=>{
        return (
        <Link to="/" className={style.logo}>
            <img alt="nba_logo" src="/images/nba_logo.png"/>
        </Link>
        );
    }

    return(
        <header className={style.header}>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
            {sideNav()}
            {logo()}
            </div>
        </header>
    );

}

export default Header;