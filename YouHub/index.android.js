/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    ListView,
    Navigator,
    Text,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy';
import ListViewTest from './ListViewTest';

export default class YouHub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tab_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<TabNavigator>
                 <TabNavigator.Item
                 selected={this.state.selectedTab === 'tab_popular'}
                 selectedTitleStyle={{color:'red'}}
                 title="最热"
                 renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_popular.png')} />}
                 renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'red'}]} source={require('./res/images/ic_popular.png')} />}
                 badgeText="1"
                 onPress={() => this.setState({ selectedTab: 'tab_popular' })}>
                 <View style={styles.page1}></View>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                 selected={this.state.selectedTab === 'tab_trending'}
                 selectedTitleStyle={{color:'yellow'}}
                 title="趋势"
                 renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
                 renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')} />}
                 onPress={() => this.setState({ selectedTab: 'tab_trending' })}>
                 <View style={styles.page2}></View>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                 selected={this.state.selectedTab === 'tab_favorite'}
                 selectedTitleStyle={{color:'red'}}
                 title="收藏"
                 renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')} />}
                 renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'red'}]} source={require('./res/images/ic_favorite.png')} />}
                 badgeText="1"
                 onPress={() => this.setState({ selectedTab: 'tab_favorite' })}>
                 <View style={styles.page1}></View>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                 selected={this.state.selectedTab === 'tab_my'}
                 selectedTitleStyle={{color:'yellow'}}
                 title="我的"
                 renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
                 renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'yellow'}]} source={require('./res/images/ic_my.png')} />}
                 onPress={() => this.setState({ selectedTab: 'tab_my' })}>
                 <View style={styles.page2}></View>
                 </TabNavigator.Item>
                 </TabNavigator>
                 <Navigator
                 initialRoute={{
                 component: Boy
                 }}
                 renderScene={(route, navigator) => {
                 let Component = route.component;
                 return <Component navigator={navigator} {...route.params}/>
                 }}
                 ></Navigator>*/}
                <ListViewTest/>
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
    image: {
        width: 22,
        height: 22
    }
});

AppRegistry.registerComponent('YouHub', () => YouHub);
