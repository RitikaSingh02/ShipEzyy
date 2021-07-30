import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome5';
import {LightTheme, DarkTheme} from '../constants/colors';

export default function BackHeader({headerText, showBackBtn, showHeaderTxt}) {

    const navigation = useNavigation()
    const theme = LightTheme
    return (
        <View style={{flexDirection: 'row', backgroundColor: theme.WHITE, paddingHorizontal: 20,  paddingVertical: 15, alignItems: 'center', marginTop:  StatusBar.currentHeight}}>
            {
                showBackBtn && 
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/arrow-left.png')} 
                        style={{width: 13.82, height: 13.51,}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            }
            {
                showHeaderTxt && 
                <View style={{marginLeft: 5}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: theme.TEXT_PRIMARY}}>{headerText}</Text>
                </View>
            }
        </View>
    )
}
