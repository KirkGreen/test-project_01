import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { usersListAll } from '../actions'
import { bindActionCreators } from 'redux'

import User from '../components/user'
import Search from "../components/search";
import Pager from "../components/pager";

class UsersListContainer extends Component {

    state = {
        users:[],
        currentPage: 1,
        usersPerPage: 10,
        howManyPages: 0,
        searchText: '',
        showLeftArrow: false,
        showRightArrow: true
    };

    componentWillMount(){
        this.props.usersListAll();
    }

    onSearchChange = (event) => {
        this.setState({ searchText: event.target.value, currentPage: 1 });
    };

    getUsersList = () => {
        let result = [];

        if(this.props.users.usersList) {
            let usersArr = this.props.users.usersList;

            const search = this.state.searchText.trim().toLowerCase();
            if (search !== "") {
                for (let i = 0; i < usersArr.length; i++) {
                    if (usersArr[i].name.toLowerCase().includes(search)) result.push(usersArr[i]);
                }
            } else {
                result = [...usersArr];
            }

            const indexOfLastTodo = this.state.currentPage * this.state.usersPerPage;
            const indexOfFirstTodo = indexOfLastTodo - this.state.usersPerPage;

            result = result.slice(indexOfFirstTodo, indexOfLastTodo);
        }

        return result;
    };

    handleClick = (event) => {
        let showLeftArrow = false;
        let showRightArrow = false;

        let newPage = this.state.currentPage + Number(event.target.id);
        if(newPage > 1) {
            showLeftArrow = true;
        }
        if(Math.ceil(this.props.users.usersList.length / this.state.usersPerPage) > newPage ) {
            showRightArrow = true;
        }

        this.setState(
            {currentPage: newPage, showLeftArrow: showLeftArrow, showRightArrow: showRightArrow}
        );
    };

    render(){
        return(
            <div>
                <div className='users_template'>
                    <Search onSearchChange={this.onSearchChange}/>
                    <User users={this.getUsersList()}/>
                </div>
                <Pager
                    handleClick={this.handleClick}
                    showLeftArrow={this.state.showLeftArrow}
                    showRightArrow={this.state.showRightArrow}
                    showNumbers={this.state.currentPage}
                />
            </div>

        )
    }
}

function mapStateToProps(state) {
    if(state.users.usersList){
        let result = [];
        for(var i = 0; i < state.users.usersList.length; i++) {
            let extendedUserObj = {};
            switch(i)
            {
                case 0:
                    extendedUserObj = {number: i+1, medal: 'gold'};
                    break;
                case 1:
                    extendedUserObj = {number: i+1, medal: 'silver'};
                    break;
                case 2:
                    extendedUserObj = {number: i+1, medal: 'bronze'};
                    break;
                default:
                    extendedUserObj = {number: i+1, medal: null};
                    break;
            }
            result.push(Object.assign(state.users.usersList[i], extendedUserObj));
        }
        return {
            users:{usersList: result}
        }
    }
    return {
        users:state.users
    }
}

function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps');
    return bindActionCreators({usersListAll},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersListContainer);