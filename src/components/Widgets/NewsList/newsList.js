import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';

//url
import {URL} from '../../../config';

class NewsList extends Component{
    state={
        items:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount,
        addmore:this.props.addmore,
        type:this.props.type
    };

    componentWillMount(){
        axios.get(`${URL}\articles?_start=${this.state.start}&_end=${this.state.end}`)
        .then((response)=>{
            this.setState({
                items : [...this.state.items,...response.data]
            });
        })
    }

    display(type){
        let template = null;
        switch(type){
            case "Card":
                return(
                    <div>
                        hello
                    </div>
                )
                break;
            default:
                template=null;
        }
    }

    render(){
        console.log(this.state.news);
        return(
            <div>
                {this.display(this.state.type)}
            </div>
        );
    }
}

export default NewsList;