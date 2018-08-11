import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.css'


import {CURRENT_YEAR} from './../../config';
const Footer =()=>{
    return (
    <div className={styles.footer} >
        <Link to="/">
            <img alt="nba-logo" src="images/nba_logo.png"/>
        </Link>
        <div className={styles.text}>
            @{CURRENT_YEAR} All Rights Reserved
        </div>
    </div>    
    );
}

export default Footer;