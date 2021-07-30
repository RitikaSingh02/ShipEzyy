import React, {Component, useState} from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity, TextInput, Animation, Image } from 'react-native';
import {LightTheme, DarkTheme} from '../../constants/colors';
import { Card, Appbar, Snackbar } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';
import storageKeys from '../../constants/storageKeys';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

function PersonalDetails() {
    const [number, setNumber] = useState(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [firstNameStyle, setFirstNameStyle] = useState({
        elevation: 5, 
        borderRadius: 10, 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    })
    const [lastNameStyle, setLastNameStyle] = useState({
        elevation: 5, 
        borderRadius: 10, 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    })
    const [textInputContainerStyle, setTextInputContainerStyle] = useState({
        elevation: 5, 
        borderRadius: 10, 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    })
    const theme = LightTheme
    return (
        <View style={{flex: 1, backgroundColor: theme.BACKGROUND,}}>
            <View style={{flexDirection: 'row', marginHorizontal: 30, marginTop: 50 }}>
                <Text style={{flex: 3/ 5,fontSize: 24, color: theme.TEXT_PRIMARY, letterSpacing: 1, fontWeight: 'bold', alignSelf: 'center', marginTop: 25}}>ENTER YOUR DETAILS</Text>
                <Image
                    source={require('../../assets/profile-illustrator.png')} 
                    style={{width: 164.56, height: 122., alignSelf: 'center', alignSelf: 'flex-start', marginTop: 10, flex: 2 / 5}}
                    resizeMode="contain"
                />
            </View>
            <View style={{marginHorizontal: 30, marginTop: 20}}>
                <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, marginBottom: 4}}>First Name</Text>
                <View style={{...firstNameStyle, backgroundColor: theme.BACKGROUND}}>
                    <TextInput
                        style={{...styles.textInputStyle, backgroundColor: theme.BACKGROUND, color: theme.TEXT_PRIMARY,}}
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                        theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                        // autoFocus
                        // outlineColor={color.WHITE}
                        underlineColor={theme.PRIMARY}
                        placeholder='Enter First Name'
                        onFocus={() => {setFirstNameStyle({...firstNameStyle, borderWidth: 1, borderColor: theme.PRIMARY})}}
                        onBlur={() => {setFirstNameStyle({...firstNameStyle, borderWidth: 1, borderColor: theme.WHITE})}}
                    />
                </View>
            </View>
            <View style={{marginHorizontal: 30, marginTop: 20}}>
                <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, marginBottom: 4}}>Last Name</Text>
                <View style={{...lastNameStyle, backgroundColor: theme.BACKGROUND}}>
                    <TextInput
                        style={{...styles.textInputStyle, backgroundColor: theme.BACKGROUND, color: theme.TEXT_PRIMARY,}}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                        theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                        // autoFocus
                        // outlineColor={color.WHITE}
                        underlineColor={theme.PRIMARY}
                        placeholder='Enter Last Name'
                        onFocus={() => {setLastNameStyle({...lastNameStyle, borderWidth: 1, borderColor: theme.PRIMARY})}}
                        onBlur={() => {setLastNameStyle({...lastNameStyle, borderWidth: 1, borderColor: theme.WHITE})}}
                    />
                </View>
            </View>
            <View style={{marginHorizontal: 30, marginTop: 20}}>
                <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, marginBottom: 4}}>Email</Text>
                <View style={{...textInputContainerStyle, backgroundColor: theme.BACKGROUND}}>
                    <TextInput
                        style={{...styles.textInputStyle, backgroundColor: theme.BACKGROUND, color: theme.TEXT_PRIMARY,}}
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                        theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                        // autoFocus
                        // outlineColor={color.WHITE}
                        underlineColor={theme.PRIMARY}
                        placeholder='Enter Email'
                        onFocus={() => {setTextInputContainerStyle({...textInputContainerStyle, borderWidth: 1, borderColor: theme.PRIMARY})}}
                        onBlur={() => {setTextInputContainerStyle({...textInputContainerStyle, borderWidth: 1, borderColor: theme.WHITE})}}
                    />
                </View>
            </View>
            <View style={{...styles.primaryBtn, backgroundColor: theme.PRIMARY,}}>
                <TouchableOpacity>
                    <Text style={{fontSize: 14, color: theme.TEXT_WHITE, fontWeight: 'bold'}}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default PersonalDetails
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    primaryBtn: {
      justifyContent: 'center', 
      alignItems: 'center', 
      marginHorizontal: 60, 
      paddingVertical: 14, 
      borderRadius: 5, 
      marginTop: 80
    },
    textInputStyle: {
        borderRadius: 5, 
        paddingHorizontal: 5, 
        fontSize: 15, 
        width: 291
    }
  });
