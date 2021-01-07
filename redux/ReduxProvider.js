import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import React from 'react';
import MainView from '../components/MainView'

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuiz: 0,
            quizzes: [],
        };
        this.store = this.configureStore();
    }

    render() {
        return (
            <Provider store={ this.store }>
                    <MainView/>
            </Provider>
        );
    }

    configureStore() {
        return createStore(
            GlobalState, 
            this.initialState, 
            applyMiddleware(thunk));
    }
}