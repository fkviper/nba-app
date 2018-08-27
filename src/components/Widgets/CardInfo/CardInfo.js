import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './cardinfo.css';
const CardInfo=(props)=>{
    const teamName = (teams,team)=>{
        let teamdata = teams.find((item)=>{
            return item.id === team;
        });
        if(teamdata)
            return teamdata.name;
    }

    return (
    <div className={styles.cardinfo}>
        <span className={styles.teamName}>
            {teamName(props.teams,props.team)}
        </span>
        <span className={styles.Date}>
            <FontAwesome name="clock-o"/>
            {props.date}
        </span>
    </div>
    );
}

export default CardInfo;