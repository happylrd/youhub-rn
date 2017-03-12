import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Girl from './Girl';
import NavigationBar from './NavigationBar';

export default class Boy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    render() {
        return <View style={styles.container}>
            <NavigationBar
                title={'Boy'}
                statusBar={{
                    backgroundColor: '#9E9E9E'
                }}
            />
            <Text style={styles.text}>I am boy</Text>
            <Text style={styles.text}
                  onPress={() => {
                      this.props.navigator.push({
                          component: Girl,
                          params: {
                              word: '一支玫瑰',
                              onCallBack: (word) => {
                                  this.setState({
                                      word: word
                                  })
                              }
                          }
                      })
                  }}>送女孩一支玫瑰</Text>
            <Text style={styles.text}>我收到了女孩回赠的:{this.state.word}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03A9F4',
    },
    text: {
        fontSize: 20,
    }
});