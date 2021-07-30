import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {LightTheme} from '../../../constants/colors'
import BackHeader from '../../../components/BackHeader'
import { RadioButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Timeline from 'react-native-timeline-flatlist'


function TrackOrder({navigation}) {
    const [timeLine, setTimeLine] = useState([
        {title: 'Order Placed', description: '08:30 AM', icon: require('../../../assets/green-dot-border.png')},
        {title: 'On the way', description: 'Samuel Jorge is on his way to pick your parcel.', icon:  require('../../../assets/truck-delivery.png')},
        {title: 'Towards Destination', description: 'Samuel Jorge has picked your parcel and is marched toward your destination.', icon:  require('../../../assets/white-dot-border.png')},
        {title: 'Delivered at your destination', description: '', icon:  require('../../../assets/white-dot-border.png')},
    ])
    const [location, setLocation] = useState({
        latitude: 25.133699,
        longitude: 82.564430,    
    })
    let theme = LightTheme
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                  latitude: 25.133699,
                  longitude: 82.564430,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                >
                    <Marker
                        coordinate={location}
                        onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
                        image={require('../../../assets/location-marker.png')}
                    >
                        <Callout> 
                            <Text style={{backgroundColor: theme.BLACK, color: theme.TEXT_WHITE, paddingVertical: 10, paddingHorizontal: 5, borderRadius: 15}}>Drag map to adjust</Text>
                        </Callout>
                    </Marker>
            </MapView>
            <View style={{position: 'absolute', top: 0, backgroundColor: theme.TIMELINE_BG, width: DeviceWidth, paddingTop: StatusBar.currentHeight}}>
                <Text style={{fontSize: 18, letterSpacing: 0.76, marginHorizontal: 20, color: theme.TEXT_PRIMARY, fontWeight: 'bold'}}>Track Order</Text>
                <View style={{flexDirection: 'row', width: (DeviceWidth - 40), marginHorizontal: 20, marginTop: 15}}>
                    <View style={{width: (DeviceWidth-40)/ 2}}>
                        <Text style={{fontSize: 10, letterSpacing: 0.61, color: theme.TEXT_SECONDARY}}>Arriving Time</Text>
                        <Text style={{fontSize: 14, letterSpacing: 0.42, color: theme.TEXT_PRIMARY, fontWeight: 'bold'}}>9:00 AM to 9:15 AM</Text>
                    </View>
                    <View style={{width: (DeviceWidth-40)/ 2}}>
                        <Text style={{fontSize: 10, letterSpacing: 0.61, color: theme.TEXT_SECONDARY}}>Status</Text>
                        <Text style={{fontSize: 14, letterSpacing: 0.42, color: theme.GREEN, fontWeight: 'bold'}}>On Time</Text>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK, marginVertical: 10, opacity: 0.33}}></View>
                <Timeline
                data={timeLine}
                //..other props
                circleSize={20}
                circleStyle={{backgroundColor: theme.WHITE, borderWidth: 3, borderColor: theme.GREY_LIGHT}}
                innerCircle={'icon'}
                lineColor={theme.GREY_LIGHT}
                showTime={false}
                lineWidth={3}
                timeContainerStyle={{minWidth:52, marginTop: -5, width: 0}}
                timeStyle={{width: 0, height: 0}}
                descriptionStyle={{color: theme.TEXT_SECONDARY_DARK, fontSize: 10, letterSpacing: 0.6}}
                titleStyle={{color: theme.TEXT_PRIMARY, fontSize: 14, letterSpacing: 0.42}}
                dotSize={5}
                eventContainerStyle={{marginTop: -11}}
                options={{
                  style:{paddingHorizontal: 20}
                }}
                />
            </View>
            <View style={{position: 'absolute', bottom: 0, backgroundColor: theme.BACKGROUND, width: DeviceWidth}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 16}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{borderWidth: 1, borderColor: theme.PRIMARY, borderRadius: 24, height: 38, width: 38, justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                            source={require('../../../assets/delivery-guy.png')} 
                            style={{width: 24, height: 24, }}
                            resizeMode="contain"
                            />
                        </View>
                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 14, letterSpacing: 0.42, color: theme.TEXT_PRIMARY, fontWeight: 'bold'}}>Samuel Jorge</Text>
                            <Text style={{fontSize: 10, letterSpacing: 0.61, color: theme.TEXT_SECONDARY}}>2 Years More than 1500 deliveries</Text>
                        </View>
                    </View>
                    <Image
                    source={require('../../../assets/call-icon.png')} 
                    style={{width: 35, height: 35, }}
                    resizeMode="contain"
                    />
                </View>
                <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK, opacity: 0.33}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 16}}>
                    <View style={{borderWidth: 1, borderColor: theme.PRIMARY, borderRadius: 24, height: 38, width: 38, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                        source={require('../../../assets/account-blue.png')} 
                        style={{width: 24, height: 24, }}
                        resizeMode="contain"
                        />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 14, letterSpacing: 0.42, color: theme.TEXT_PRIMARY, fontWeight: 'bold'}}>Rayner Jake 4575XXXX26</Text>
                        <Text style={{fontSize: 10, letterSpacing: 0.61, color: theme.TEXT_SECONDARY}}>235 Groove Street Near Santa Monica Building No 6 New York.</Text>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK, opacity: 0.33}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 16}}>
                    <View style={{borderWidth: 1, borderColor: theme.PRIMARY, borderRadius: 24, height: 38, width: 38, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                        source={require('../../../assets/question-help.png')} 
                        style={{width: 24, height: 24, }}
                        resizeMode="contain"
                        />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 14, letterSpacing: 0.42, color: theme.TEXT_PRIMARY, fontWeight: 'bold'}}>Have an issue with your order?</Text>
                        <Text style={{fontSize: 10, letterSpacing: 0.61, color: theme.TEXT_BLUE}}>Chat with us</Text>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK, opacity: 0.33, marginBottom: 50}}></View>
            </View>
        </View>
    )
}

export default TrackOrder
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
        marginHorizontal: 60, 
        paddingVertical: 14, 
        borderRadius: 5, 
        marginTop: 30
    },
    paymentBtn: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 20, 
        paddingVertical: 12, 
        borderRadius: 5, 
        marginTop: 30,
        marginBottom: 10
    },
    deliveryAddBtn: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 70, 
        paddingVertical: 10, 
        borderRadius: 10, 
        marginTop: 30,
        marginBottom: 24
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    positionTop: {
        top: 0,
        position: 'absolute',  elevation: 3,  width: DeviceWidth ,  paddingHorizontal: 20,  
        paddingBottom: StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
    },
    positionBottom: {
        bottom: 0,
        position: 'absolute',  elevation: 3,  width: DeviceWidth ,  paddingHorizontal: 20, 
        paddingBottom: StatusBar.currentHeight ,
        paddingTop: 0,
        backgroundColor: '#fff',
    },
    textInputStyle: {
        borderRadius: 5, 
        paddingHorizontal: 20, 
        fontSize: 15, 
    }
});