import React from 'react';
import Slick from 'react-slick';
import {Link} from 'react-router-dom';

//css
import styles from './slider.css';

const SliderTemplate =(props)=>{
    let templates = [];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
      };
    
    switch(props.type)
    {
        case 'featured':
            templates = props.data.map((item,i)=>{
                return(
                    <div key ={i}>
                        <div className={styles.featured_item}>
                            <div className={styles.featured_image} style={{
                                background: `url(../images/articles/${item.image})`
                            }}>
                            </div>
                            <Link to={`articles/${item.id}`}>
                                <div className={styles.featured_text}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            });
            break;
        default:
            templates = null;
    }   

    return (
        <Slick {...settings}>
            {templates}
        </Slick>
    );

}

export default SliderTemplate;