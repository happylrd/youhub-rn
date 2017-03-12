import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import NavigationBar from './NavigationBar';
import HttpUtils from './HttpUtils'

export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        }
    }

    onLoad(url) {
        HttpUtils.get(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            });
    }

    onSubmit(url, data) {
        HttpUtils.post(url, data)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }

    render() {
        return (
            <View>
                <NavigationBar
                    title={'FetchTest'}
                />
                <Text style={styles.text}
                      onPress={() => this.onLoad('http://rap.taobao.org/mockjsdata/11793/test')}>
                    获取数据
                </Text>
                <Text style={styles.text}
                      onPress={() => this.onSubmit('http://rap.taobao.org/mockjsdata/11793/submit',
                      {username:'Diego Li', password:'123'})
                      }>
                    提交数据
                </Text>
                <Text>返回结果:{this.state.result}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});