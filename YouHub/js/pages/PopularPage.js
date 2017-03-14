import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    Text,
    TextInput,
    View
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import NavigationBar from '../common/NavigationBar';
import DataRepository from '../expand/dao/DataRepository';
import RepositoryCell from '../common/RepositoryCell'

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: ''
        };
    }

    loadData() {
        let url = this.generateUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
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

    generateUrl(key) {
        return URL + key + QUERY_STR;
    }

    render() {
        return <View style={styles.container}>
            <NavigationBar
                title={'最热'}
            />
            <ScrollableTabView
                tabBarBackgroundColor="#2196F3"
                tabBarInactiveTextColor="mintcream"
                tabBarActiveTextColor="#FFFFFF"
                tabBarUnderlineStyle={{backgroundColor: '#E7E7E7', height: 2}}
                renderTabBar={() => <ScrollableTabBar/>}>
                <PopularTab tabLabel="Java">java</PopularTab>
                <PopularTab tabLabel="Ios">ios</PopularTab>
                <PopularTab tabLabel="Android">android</PopularTab>
                <PopularTab tabLabel="JavaScript">js</PopularTab>
            </ScrollableTabView>
        </View>
    }
}

class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: '',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let url = URL + this.props.tabLabel + QUERY_STR;
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result.items)
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    renderRow(data) {
        return <RepositoryCell data={data}/>
    }

    render() {
        return <View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => this.renderRow(data)}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tips: {
        fontSize: 20
    }
});