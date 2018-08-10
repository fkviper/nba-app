import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

//css
import style from './navItems.css';

const Navitems = ()=>{
    const Items=[
        {
            css:style.option,
            name:"home",
            link:"/",
            text:"Home"
        },
        {
            css:style.option,
            name:"file-text-o",
            link:"/news",
            text:"News"
        },
        {
            css:style.option,
            name:"play",
            link:"/videos",
            text:"Videos"
        },
        {
            css:style.option,
            name:"sign-in",
            link:"/signin",
            text:"Sign in"
        },
        {
            css:style.option,
            name:"sign-out",
            link:"/signout",
            text:"Sign out"
        }
    ];

    const showItems=()=>{
        return Items.map((item,position)=>{
            return (
                <div key={position} className={item.css}>
                    <FontAwesome name={item.name}/>
                    <Link to={item.link} >
                    {item.text}
                    </Link>
                </div>
            );
        });
    }

    return (
        <div>
            {showItems()}
        </div>
    );
}

export default Navitems;