import React from 'react';
import {Link}  from 'react-router-dom';

//css
import styles from './buttons.css';

const Button = (props)=>{

    let template = null;

    switch(props.type){
        case 'loadmore':
            template = (
                <div className={styles.btn_blue}
                    onClick={props.loadMore}
                >
                {props.cta}
                </div>
            );
            break;

        default:
            template = null;
    }
    return template;
}

export default Button;