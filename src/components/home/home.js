import React from 'react'
import NewsSlider from './../Widgets/Slider/news_slider';

const Home=()=>{
    return (<div>
        <NewsSlider 
            type="featured"
            start={3}
            amount={6}
            settings={{
                dots:true
            }}
            />
        </div>)
}

export default Home;