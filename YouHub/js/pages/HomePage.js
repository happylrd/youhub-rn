import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Navigator,
    Text,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tab_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_popular'}
                        selectedTitleStyle={{color:'#FF0000'}}
                        title="最热"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_popular.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'#FF0000'}]} source={require('../../res/images/ic_popular.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tab_popular' })}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_trending'}
                        selectedTitleStyle={{color:'#FFFF00'}}
                        title="趋势"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'#FFFF00'}]} source={require('../../res/images/ic_trending.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tab_trending' })}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_favorite'}
                        selectedTitleStyle={{color:'#00FF00'}}
                        title="收藏"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'#00FF00'}]} source={require('../../res/images/ic_favorite.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tab_favorite' })}>
                        <View style={styles.page3}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_my'}
                        selectedTitleStyle={{color:'#00FFFF'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'#00FFFF'}]} source={require('../../res/images/ic_my.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tab_my' })}>
                        <View style={styles.page4}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: '#FF0000',
    },
    page2: {
        flex: 1,
        backgroundColor: '#FFFF00',
    },
    page3: {
        flex: 1,
        backgroundColor: '#00FF00',
    },
    page4: {
        flex: 1,
        backgroundColor: '#00FFFF',
    },
    image: {
        width: 22,
        height: 22
    }
});
