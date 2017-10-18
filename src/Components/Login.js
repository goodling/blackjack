import React from 'react';

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
                console.log('args: ', arguments);
            })
        }
    }

    render() {
        return (
            <div className='app'>
                <h1 className='app__greeting'>
                Example Login
                </h1>
                <button onClick={this.handleUserLogout.bind(this)}>LOG OUT</button>
                <div>
                    <h2>Create User</h2>
                    <input id='username' ref='createUserName' type='text' placeholder='enter user name' />
                    <input id='email' ref='createEmail' type='text' placeholder='enter email' />
                    <input id='pass' ref='createPass' type='password' placeholder='password' />
                    <button onClick={this.handleOnCreateUser.bind(this)}>Create User</button>
                </div>

                <div>
                    <h2>Login User</h2>
                    <input id='email' ref='loginEmail' type='text' placeholder='enter email' />
                    <input id='pass' ref='loginPass' type='password' placeholder='password' />
                    <button onClick={this.handleOnLogin.bind(this)}>LOG IN</button>
                </div>

            </div>
        );
    }

}