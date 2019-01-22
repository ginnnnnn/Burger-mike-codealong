import React, { Component} from 'react';
import { connect } from 'react-redux';

import classes from './Layout.css'
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';




class Layout extends Component {
    state={
        showSideDrawer:true
    }

    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render(){
        return(
    <Aux>
    <Toolbar 
    isAuth={this.props.isAuthencatied}
    drawerToggleClicked={this.sideDrawerToggleHandler}
    />
    <SideDrawer
    isAuth={this.props.isAuthencatied}
    showed={this.state.showSideDrawer} 
    closed={this.sideDrawerCloseHandler}/>
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Aux>
);
    }
}

const  mapStateToProps = state =>{
    return {
        isAuthencatied:state.auth.token !== null
    }
}


export default connect(mapStateToProps)(Layout);