import React, {Component} from 'react';
import {
    StyleSheet,
    Alert,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import CheckBox from 'react-native-check-box';

import NavigationBar from '../../common/NavigationBar';
import ViewUtils from '../../util/ViewUtils';
import ArrayUtils from '../../util/ArrayUtils';
import LanguageDao, {FLAG_LANGUAGE} from '../../expand/dao/LanguageDao';

export default class CustomTagPage extends Component {
    constructor(props) {
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_tag);
        this.changeValues = [];
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.languageDao.fetch()
            .then(result => {
                this.setState({
                    dataArray: result
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onSave() {
        if (this.changeValues.length === 0) {
            this.props.navigator.pop();
            return;
        }
        this.languageDao.save(this.state.dataArray);
        this.props.navigator.pop();
    }

    renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0) {
            return null;
        }
        let len = this.state.dataArray.length;
        let views = [];
        for (let i = 0; i < len - 2; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}></View>
                </View>
            )
        }
        views.push(
            <View key={len-1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
                    {this.renderCheckBox(this.state.dataArray[len - 1])}
                </View>
                <View style={styles.line}></View>
            </View>
        );
        return views;
    }

    onClick(data) {
        data.checked = !data.checked;
        ArrayUtils.updateArray(this.changeValues, data);
    }

    renderCheckBox(data) {
        let leftText = data.name;
        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={() => this.onClick(data)}
                leftText={leftText}
                isChecked={data.checked}
                checkedImage={<Image style={{tintColor: '#03A9F4'}}
                    source={require('./images/ic_check_box.png')}/>}
                unCheckedImage={<Image style={{tintColor: '#03A9F4'}}
                    source={require('./images/ic_check_box_outline_blank.png')}/>}
            />
        )
    }

    onBack() {
        if (this.changeValues.length === 0) {
            this.props.navigator.pop();
            return;
        }
        Alert.alert(
            '确认退出',
            '是否在退出前保存修改?',
            [
                {
                    text: '取消',
                    onPress: () => {
                        this.props.navigator.pop();
                    }
                },
                {
                    text: '确定',
                    onPress: () => {
                        this.onSave()
                    }
                }
            ]
        )
    }

    render() {
        let rightButton = <TouchableOpacity
            onPress={() => this.onSave()}
        >
            <View style={{margin: 10}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>;
        return <View style={styles.container}>
            <NavigationBar
                title={'自定义标签'}
                style={{backgroundColor: '#03A9F4'}}
                leftButton={ViewUtils.getLeftButton(() => this.onBack())}
                rightButton={rightButton}
            />
            <ScrollView>
                {this.renderView()}
            </ScrollView>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 29
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        height: 0.3,
        backgroundColor: '#A9A9A9'
    }
});