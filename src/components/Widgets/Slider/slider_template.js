import React from 'react';
import Slick from 'react-slick';

//css
import styles from './slider.css';

const SliderTemplate =(props)=>{
    let templates = [];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    switch(props.type)
    {
        case 'featured':
            templates = props.data.map((item,i)=>{
                return(
                    <div key ={i}>
                        <div>
                            {i}
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