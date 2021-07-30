import React, {Component, useState} from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity, TextInput, Animation, Image } from 'react-native';
import {LightTheme, DarkTheme} from '../../constants/colors';
import { Card, Appbar, Snackbar } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';
import storageKeys from '../../constants/storageKeys';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

function Otp({navigation}) {
    const [otp, setOtp] = useState('')
    const [textInputContainerStyle, setTextInputContainerStyle] = useState({
        elevation: 5, 
        borderRadius: 10, 
        marginHorizontal: 30,
        borderWidth: 1,
        marginTop: 40,
        borderColor: '#fff'
    })
    const theme = LightTheme
    return (
        <View style={{flex: 1, backgroundColor: theme.BACKGROUND,}}>
            <View style={{flexDirection: 'row', marginHorizontal: 30, marginTop: 50 }}>
                <Text style={{flex: 3/ 5,fontSize: 24, color: theme.TEXT_PRIMARY, letterSpacing: 1, fontWeight: 'bold', alignSelf: 'center', marginTop: 25}}>ENTER YOUR OTP</Text>
                <Image
                    source={require('../../assets/otp-illustrator.png')} 
                    style={{width: 164.56, height: 122., alignSelf: 'center', alignSelf: 'flex-start', marginTop: 10, flex: 2 / 5}}
                    resizeMode="contain"
                />
            </View>
            <View style={{...styles.textInputContainerStyle, elevation: 5, borderRadius: 5, borderWidth: 1, marginTop: 40, marginHorizontal: 30 }}>
                <TextInput
                    style={{...styles.textInputStyle, backgroundColor: theme.BACKGROUND, color: theme.TEXT_PRIMARY,}}
                    value={otp}
                    onChangeText={setOtp}
                    placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                    theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                    // autoFocus
                    // outlineColor={color.WHITE}
                    underlineColor={theme.PRIMARY}
                    placeholder='Enter OTP Manually'
                    onFocus={() => {styles.textInputContainerStyle = {borderColor:  theme.PRIMARY, }}}
                    onBlur={() => {styles.textInputContainerStyle = {borderColor:  theme.WHITE, }}}
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('PersonalDetails')}}>
                <View style={{...styles.primaryBtn, backgroundColor: theme.PRIMARY}}>
                        <Text style={{fontSize: 14, color: theme.TEXT_WHITE, fontWeight: 'bold'}}>Verify</Text>
                </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 12, color: theme.TEXT_SECONDARY}}>Didn't received OTP?</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 12, color: theme.TEXT_BLUE}}> Resend</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        source={require('../../assets/india-flag.png')}
                        style={{width: 18, height: 18}}
                    />
                    <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY}}>  9856472657</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{fontSize: 12, color: theme.TEXT_BLUE}}> Change?</Text>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize: 12, color: theme.TEXT_SECONDARY_LIGHT, textAlign: 'center'}}>Sending OTP to the above number</Text>
        </View>
    )
}
export default Otp
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    primaryBtn: {
      justifyContent: 'center', 
      alignItems: 'center', 
      marginHorizontal: 60, 
      paddingVertical: 14, 
      borderRadius: 5, 
      marginVertical: 40
    },
    textInputStyle: {
        borderRadius: 5, 
        paddingHorizontal: 5, 
        fontSize: 15, 
    },
    textInputContainerStyle: {
        borderColor: '#fff'
    }
  });
