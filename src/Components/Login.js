import React from 'react';
import Card from './Card'

export default class Login extends React.Component {

    componentWillMount(){
        if(this.props.checkUser){
            this.props.checkUser();
        }
    }

    handleUserLogout(){
        if(this.props.logoutUser){
            this.props.logoutUser();
        }
    }

    handleOnLogin () {
        let email = this.refs.loginEmail.value;
        let pass  = this.refs.loginPass.value;
        if (this.props.loginUser) this.props.loginUser(email, pass);
    }

    handleOnCreateUser(){
        let email = this.refs.createEmail.value;
        let pass  = this.refs.createPass.value;
        let user = this.refs.createUserName.value;

        if(this.props.createUser){
            this.props.createUser(email, pass, user, function(){
                // console.log('args: ', arguments);
            })
        }
    }

    render() {
        const card1 = {color: "red", rank: "A", suit: "S", symbol: '♠', value: 11};
        const card2 = {color: "black", rank: "J", suit: "S", symbol: '♠', value: 10};

        const card1Style = {
            transform: 'translate(50px,0px) rotate(15deg)',
            boxShadow: '7px 9px 37px -8px rgba(0,0,0,0.52)'
        }

        const card2Style = {
            transform: 'translate(0px,-120px) rotate(-15deg)',
            boxShadow: '7px 9px 37px -8px rgba(0,0,0,0.52)'
        }

        return (
            <div className='login'>
                <div className='login__inner-wrap'>
                    <div className='login__cards'>
                        <Card style={card1Style} color={ card1.color } rank={ card1.rank } suit={ card1.symbol } />
                        <Card style={card2Style} color={ card2.color } rank={ card2.rank } suit={ card2.symbol } />
                    </div>
                    <h1 className='login__header'>
                        Redux Blackjack
                    </h1>
                    <div>
                        <h2 className='login__sub-header'>Login to play</h2>
                        <input id='email' ref='loginEmail' type='text' placeholder='enter email' />
                        <input id='pass' ref='loginPass' type='password' placeholder='enter password' />
                        <button onClick={this.handleOnLogin.bind(this)}>Log In</button>
                    </div>
                    <div><h2 className='login__sub-header'>or..</h2></div>
                    <div>
                        <h2 className='login__sub-header'>Create new user</h2>
                        <input id='username' ref='createUserName' type='text' placeholder='enter user name' />
                        <input id='email' ref='createEmail' type='text' placeholder='enter email' />
                        <input id='pass' ref='createPass' type='password' placeholder='password' />
                        <button onClick={this.handleOnCreateUser.bind(this)}>Create User</button>
                    </div>
                </div>
            </div>
        );
    }

}