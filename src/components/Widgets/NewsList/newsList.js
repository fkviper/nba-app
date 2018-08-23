import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';

//url
import {URL} from '../../../config';

//css
import styles from './news_List.css';

class NewsList extends Component{
    state={
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
                        <div>
                            <div className={styles.news_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <h2>
                                        {item.title}
                                    </h2> 
                                </Link>
                            </div>
                        </div>
                    );
                });
                break;
            default:
                template=null;
        }
        return template;
    }

    render(){
        console.log(this.state.items);
        return(
            <div>
                {this.display(this.state.type)}
                <div onClick={()=>this.loadMore()}>
                    LOAD MORE
                </div>
            </div>
        );
    }
}

export default NewsList;