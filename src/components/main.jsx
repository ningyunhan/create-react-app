import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'


class Main extends Component {

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMessage: null,
    }





    componentDidMount() {
        //Subscribe to 'search' published by search component
        PubSub.subscribe('search', (msg, searchName) => {
            this.setState({
                initView: false,
                loading: true,
            });


            //Send ajax request
            const url = `https://api.github.com/search/users?q=${searchName}`;
            axios.get(url).then(
                response => {
                    const result = response.data;
                    console.log(result);
                    const users = result.items.map(item => ({
                        name: item.login,
                        url: item.html_url,
                        avatarUrl: item.avatar_url
                    }));
                    this.setState({loading: false, users});
                }
            ).catch(
                error => {
                    this.setState({
                        loading: false,
                        errorMessage: error.message,
                    });
                }
            );
        });
    }




    render() {

        const {initView, loading, users, errorMessage} = this.state;

        console.log(this.props.searchName);

        if(initView) {
            return <h2>Please input keyword!!!</h2>;
        }
        else if(loading) {
            return <h2>Loading......</h2>
        }
        else if(errorMessage) {
            return <h2>{errorMessage}</h2>
        }
        else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            );
        }
    }
}

export default Main;