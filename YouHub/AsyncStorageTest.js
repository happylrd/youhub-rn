import React, {Component} from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Text,
    TextInput,
    View
} from 'react-native';
import NavigationBar from './js/common/NavigationBar';
import Toast, {DURATION} from 'react-native-easy-toast';

const KEY = 'text';

export default class AsyncStorageTest extends Component {
    constructor(props) {
        super(props);
    }

    onSave() {
        AsyncStorage.setItem(KEY, this.text, (error) => {
            if (!error) {
                this.toast.show('set成功', DURATION.LENGTH_LONG);
            } else {
                this.toast.show('set失败', DURATION.LENGTH_LONG);
            }
        })
    }

    onFetch() {
        AsyncStorage.getItem(KEY, (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    this.toast.show('get的内容为:' + result, DURATION.LENGTH_LONG);
                } else {
                    this.toast.show('内容不存在!', DURATION.LENGTH_LONG);
                }
            } else {
                this.toast.show('get失败.', DURATION.LENGTH_LONG);
            }
        })
    }

    onRemove() {
        AsyncStorage.removeItem(KEY, (error) => {
            if (!error) {
                this.toast.show('remove成功', DURATION.LENGTH_LONG);
            } else {
                this.toast.show('remove失败', DURATION.LENGTH_LONG);
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='AsyncStorageTest'
                    style={{backgroundColor: '#6495ED'}}/>
                <TextInput
                    style={{borderWidth: 1, height: 40, margin: 6}}
                    onChangeText={text => this.text = text}
                />

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.tips}
                          onPress={() => this.onSave()}
                    >Save</Text>
                    <Text style={styles.tips}
                          onPress={() => this.onRemove()}
                    >Remove</Text>
                    <Text style={styles.tips}
                          onPress={() => this.onFetch()}
                    >Get</Text>
                </View>
                <Toast ref={toast => this.toast = toast}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 29,
        margin: 5
    }
});
