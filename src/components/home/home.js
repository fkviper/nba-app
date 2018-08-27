import React from 'react'
import NewsSlider from './../Widgets/Slider/news_slider';
import NewsList from '../Widgets/NewsList/newsList';

const Home=()=>{
    return (<div>
        <NewsSlider 
            type="featured"
            start={0}
            amount={3}
            settings={{
                dots:false
            }}
        />
        <NewsList
            type="Card"
            start={0}
            amount={3}
            addmore={true}
        />
        </div>)
}

export default Home;