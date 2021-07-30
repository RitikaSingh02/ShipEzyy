import React, {Component, useState} from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity, TextInput, Animation, Image } from 'react-native';
import {LightTheme, DarkTheme} from '../../constants/colors';
import { Card, Appbar, Snackbar } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';
import storageKeys from '../../constants/storageKeys';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

function Signup({navigation}) {
    const [number, setNumber] = useState('')
    const theme = LightTheme
return (
        <View style={{flex: 1, backgroundColor: theme.BACKGROUND,}}>
            <Text style={{fontSize: 36, color: theme.TEXT_BLUE, letterSpacing: 1, fontWeight: 'bold', alignSelf: 'center', marginTop: 65}}>TRANSPAD</Text>
            <Image
                source={require('../../assets/number-illustrator.png')} 
                style={{width: 239.56, height: 178., alignSelf: 'center', marginTop: 10}}
                resizeMode="contain"
            />
            <View style={{marginTop: 52}}>
                <Text style={{fontSize: 14, color: theme.TEXT_PRIMARY, fontWeight: 'bold', marginLeft: 45}}>Enter Your Number</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../../assets/india-flag.png')}
                        style={{width: 18, height: 18}}
                    />
                    <View style={{...styles.textInputContainerStyle, elevation: 5, borderRadius: 5, marginLeft: 10, borderWidth: 1 }}>
                        <TextInput
                            style={{...styles.textInputStyle, backgroundColor: theme.BACKGROUND, color: theme.TEXT_PRIMARY,}}
                            value={number}
                            onChangeText={setNumber}
                            placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                            theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                            // autoFocus
                            // outlineColor={color.WHITE}
                            keyboardType="number-pad"
                            underlineColor={theme.PRIMARY}
                            placeholder='Enter Mobile Number'
                            onFocus={() => {styles.textInputContainerStyle = {borderColor:  theme.PRIMARY, }}}
                            onBlur={() => {styles.textInputContainerStyle = {borderColor:  theme.WHITE, }}}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('Otp')}}>
                <View style={{...styles.primaryBtn, backgroundColor: theme.PRIMARY}}>
                        <Text style={{fontSize: 14, color: theme.TEXT_WHITE, fontWeight: 'bold'}}>Proceed</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Signup
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
        width: 291
    },
    textInputContainerStyle: {
        borderColor: '#fff'
    }
  });
