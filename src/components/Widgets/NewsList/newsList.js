import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import axios from 'axios';
import Button from '../Buttons/button';
import CardInfo from '../CardInfo/CardInfo';

//url
import {URL} from '../../../config';

//css
import styles from './news_List.css';

class NewsList extends Component{
    state={
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount,
        addmore:this.props.addmore,
        type:this.props.type
    };

    componentWillMount = () => {
        this.request(this.state.start,this.state.end);
    }

    request = (start,end) => {
        if(this.state.teams.length<1){
            axios.get(`${URL}/teams`)
            .then((response)=>{
                this.setState({
                    teams:response.data
                });
            });

        }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then((response)=>{
            this.setState({
                items : [...this.state.items,...response.data]
            });
        })
    }

    loadMore=()=>{
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end);
        this.setState({
            end
        });
    }
    display=(type)=>{
        let template = null;
        switch(type){
            case "Card":
                template= this.state.items.map((item,i)=>{
                    return (
                        <CSSTransition
                            classNames={{
                                enter : styles.news_list_wrapper,
                                enterActive:styles.news_list_wrapper_enter,
                            }}
                            timeout={500}
                            key={i}
                        >
                            <div>
                                <div className={styles.news_item}>
                                    <Link to={`/articles/${item.id}`}>
                                        <CardInfo
                                            teams={this.state.teams}
                                            team ={item.team}
                                            date={item.date}
                                        />
                                        <h2>
                                            {item.title}
                                        </h2> 
                                    </Link>
                                </div>
                            </div>
                        </CSSTransition>
                    );
                });
                break;
            default:
                template=null;
        }
        return template;
    }

    render(){
        console.log(this.state.teams);
        return(
            <div>
                <TransitionGroup 
                    component ="div" 
                    className = "list"    
                >
                 {this.display(this.state.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore= {()=>this.loadMore()}
                    cta = "Load More News"
                />
            </div>
        );
    }
}

export default NewsList;