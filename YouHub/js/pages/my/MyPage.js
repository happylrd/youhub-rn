import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import NavigationBar from '../../common/NavigationBar';
import CustomTagPage from './CustomTagPage';

export default class MyPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.container}>
            <NavigationBar
                title={'我的'}
                style={{backgroundColor: '#03A9F4'}}
            />
            <Text
                style={styles.tips}
                onPress={() => {
                    this.props.navigator.push({
                        component: CustomTagPage,
                        params: {...this.props}
                    })
                }}>自定义标签</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 29
    }
});