import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, StatusBar, FlatList, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {LightTheme} from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import BackHeader from '../../../components/BackHeader'


function Profile() {
    let theme = LightTheme
    return (
        <View style={{flex: 1, backgroundColor: theme.BACKGROUND}}>
            <BackHeader showBackBtn={true} showHeaderTxt={false} headerText="Account" />
            <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center'}}>
                    <View>
                        <Text style={{color: theme.TEXT_PRIMARY, fontSize: 18, letterSpacing: 0.76, fontWeight: 'bold'}}>Samuel</Text>
                        <Text style={{color: theme.TEXT_PRIMARY, fontSize: 12, letterSpacing: 0.5, fontWeight: 'bold'}}>marksamuel@gmail.com</Text>
                        <Text style={{color: theme.TEXT_PRIMARY, fontSize: 12, letterSpacing: 0.5, fontWeight: 'bold'}}>+1 6164565866</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/dot-purple.png')} 
                            style={{width: 50, height: 50,}}
                            resizeMode="contain"
                        />                
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 20}}>
                    <Text style={{fontSize: 12, color: theme.TEXT_BLUE, letterSpacing: 0.5, fontWeight: 'bold'}}>Verified</Text>
                    <Text style={{fontSize: 12, color: theme.TEXT_WHITE, letterSpacing: 0.5, paddingHorizontal: 24, paddingVertical: 5, backgroundColor: theme.PRIMARY, borderRadius: 5}}>Edit</Text>
                </View>
                <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK, marginVertical: 30, opacity: 0.33}}></View>
                <View style={{paddingHorizontal: 20}}>
                    <Text style={{color: theme.TEXT_PRIMARY, fontSize: 18, letterSpacing: 0.76, fontWeight: 'bold'}}>Contact Us</Text>
                    <Text style={{color: theme.TEXT_PRIMARY, fontSize: 10, letterSpacing: 0.42, fontWeight: 'bold'}}>For any query or help.</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 20}}>
                    <Text style={{fontSize: 12, color: theme.TEXT_WHITE, letterSpacing: 0.5, paddingHorizontal: 35, paddingVertical: 9, backgroundColor: theme.PRIMARY, borderRadius: 5}}>Call US</Text>
                    <Text style={{fontSize: 12, color: theme.TEXT_BLUE, letterSpacing: 0.5, paddingHorizontal: 35, paddingVertical: 9, backgroundColor: theme.TILE, borderRadius: 5, borderColor: theme.PRIMARY, borderWidth: 1}}>Mail Us</Text>
                </View>
                <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK, marginVertical: 30, opacity: 0.33}}></View>
                <View style={{flexDirection: 'row', paddingHorizontal: 20}}>         
                    <View style={{}}>
                        <Text style={{color: theme.TEXT_PRIMARY, fontSize: 18, letterSpacing: 0.76, fontWeight: 'bold'}}>Invite your friends</Text>
                        <Text style={{color: theme.TEXT_PRIMARY, fontSize: 10, letterSpacing: 0.42, fontWeight: 'bold'}}>{"If you admire our efforts,\ndo share us with your\nfriends & family"}</Text>
                        <View style={{backgroundColor: theme.PRIMARY, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 84, height: 27, borderRadius: 5, marginTop: 20}}>
                            <Image
                                source={require('../../../assets/share-icon.png')} 
                                style={{width: 12, height: 12,}}
                                resizeMode="contain"
                            />    
                            <Text style={{fontSize: 12, color: theme.TEXT_WHITE, letterSpacing: 0.5, fontWeight: 'bold', marginLeft: 5}}>Invite</Text>
                        </View>
                    </View> 
                    <Image
                        source={require('../../../assets/invite-friend-illustration.png')} 
                        style={{width: 165.32, height: 168.13}}
                        resizeMode="contain"
                    />      
                </View>
                <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK, marginVertical: 25, opacity: 0.33}}></View>
                <View style={{paddingHorizontal: 20}}>
                    <Text style={{color: theme.TEXT_PRIMARY, fontSize: 18, letterSpacing: 0.76, fontWeight: 'bold'}}>App Version</Text>
                    <Text style={{color: theme.TEXT_PRIMARY, fontSize: 10, letterSpacing: 0.42, fontWeight: 'bold'}}>1.0.11.03</Text>
                </View>
                <TouchableOpacity>
                   <View style={{...styles.primaryBtn, backgroundColor: theme.PRIMARY, marginBottom: 20}}>
                       <Text style={{fontSize: 14, color: theme.TEXT_WHITE, letterSpacing: 0.59}}>Log Out</Text>
                   </View>
                </TouchableOpacity> 
            </ScrollView>
        </View>
    )
}

export default Profile
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    primaryBtn: {
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center',
        width: 169,
        height: 34,
        borderRadius: 5, 
        marginTop: 30
    },
});
