import React,{Component} from 'react';
import Header from './../../components/Header/header';


import './layout.css';




class Layout extends Component{
    state={
        showNav:false
    }

    toggleNav = (value) =>{
        this.setState(
            {
                showNav: value
            }
        );
    }

    render(){
        return (
            <div>
                <Header
                showNav={this.state.showNav}
                OnHideNav={()=>this.toggleNav(false)}
                OnShowNav={()=>this.toggleNav(true)}
                />
                {this.props.children}
                Footer
            </div>
        )
    }
}

export default Layout;