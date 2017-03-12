import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native';
import WelcomePage from './WelcomePage';

function setup() {
    // do some initial config
    class Root extends Component {
        renderScene(route, navigator) {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
        }

        render() {
            return <Navigator
                initialRoute={{component: WelcomePage}}
                renderScene={(route, navigator) => this.renderScene(route, navigator)}
            />
        }
    }
    return <Root/>
}

module.exports = setup;