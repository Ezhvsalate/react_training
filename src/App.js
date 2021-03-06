import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from './containers/Quiz/Quiz'
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import Logout from "./components/Logout/Logout";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {autoLogin} from '../src/store/actions/auth'

class App extends Component {

    componentDidMount() {
        this.props.authLogin()
    }

    render() {
        let routes = (
            <Switch>

                <Route path='/auth' component={Auth}/>
                <Route path='/quiz/:id' component={Quiz}/>
                <Route path='/logout' component={Logout}/>
                <Route path='/' exact component={QuizList}/>
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>

                    <Route path='/quiz-creator' component={QuizCreator}/>
                    <Route path='/quiz/:id' component={Quiz}/>
                    <Route path='/logout' component={Logout}/>
                    <Route path='/' exact component={QuizList}/>
                    <Redirect to="/"/>
                </Switch>);
        }
        return (
            <Layout>{routes}</Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authLogin: () => dispatch(autoLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
