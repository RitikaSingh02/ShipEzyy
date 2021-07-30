import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, StatusBar, TextInput} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {LightTheme} from '../../../constants/colors'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import BackHeader from '../../../components/BackHeader'
function Home() {
    const [searchText, setSearchText] = useState('')

    let theme = LightTheme
    return (
        <View style={{...styles.container, backgroundColor: theme.BACKGROUND}}>
            <BackHeader showBackBtn={true} showHeaderTxt={true} headerText="Pickup Location" />
            <View style={{alignItems: 'center', flexDirection: 'row-reverse', width: DeviceWidth - 40, marginHorizontal: 20, borderRadius: 5, backgroundColor: theme.TILE, paddingHorizontal: 10}}>
                <Icon name="close" size={22} />
                <TextInput 
                style={{flex: 1,  color: theme.TEXT_PRIMARY,}}
                value={searchText}
                onChangeText={setSearchText}
                theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                autoFocus
                underlineColor={theme.PRIMARY}
                placeholder='Search'
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 10}}>
                <Image
                    source={require('../../../assets/location-dot.png')} 
                    style={{width: 14.42, height: 14.42, }}
                    resizeMode="contain"
                />
                <Text style={{fontSize: 12, color: theme.TEXT_SECONDARY, marginLeft: 5}}>Use my current location</Text>
            </View>
        </View>
    )
}

export default Home
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });