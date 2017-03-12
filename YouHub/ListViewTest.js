import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    ListView,
    RefreshControl,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import NavigationBar from './NavigationBar';
import Toast, {DURATION} from 'react-native-easy-toast';

let data = {
    "result": [
        {
            "email": "f.lee@taylor.edu",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "g.jackson@hall.net",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "l.hall@rodriguez.com",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "q.lopez@davis.io",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "c.gonzalez@perez.net",
            "fullName": "张三张三张三"
        },
        {
            "email": "a.johnson@williams.net",
            "fullName": "张三张三"
        },
        {
            "email": "i.anderson@lopez.edu",
            "fullName": "张三张三"
        },
        {
            "email": "r.lee@davis.org",
            "fullName": "张三张三"
        },
        {
            "email": "o.young@lee.edu",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "j.wilson@williams.org",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "z.walker@jackson.io",
            "fullName": "张三张三"
        },
        {
            "email": "j.martinez@brown.gov",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "y.martin@lewis.io",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "w.taylor@gonzalez.org",
            "fullName": "张三张三"
        },
        {
            "email": "j.thomas@garcia.org",
            "fullName": "张三张三张三张三"
        }
    ],
    "statusCode": 0
};

export default class ListViewTest extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading: true,
        };
        this.onLoad();
    }

    renderRow(rowData) {
        return <View style={styles.row}>
            <TouchableOpacity
                onPress={() => {
                this.toast.show('你单击了:'+rowData.fullName,DURATION.LENGTH_LONG);
            }}>
                <Text style={styles.tips}>{rowData.fullName}</Text>
                <Text style={styles.tips}>{rowData.email}</Text>
            </TouchableOpacity>
        </View>
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <View key={rowID} style={styles.line}></View>
    }

    renderFooter() {
        return <Image
            style={{width: 400, height: 200}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
    }

    onLoad() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000);
    }

    render() {
        return (
            <View>
                <NavigationBar
                    title={'ListViewTest'}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                    renderFooter={() => this.renderFooter()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={() => this.onLoad()}
                        />
                    }
                />
                <Toast ref={toast => {this.toast = toast}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        height: 50,
        padding: 5
    },
    line: {
        height: 1,
        backgroundColor: '#000000'
    }
});