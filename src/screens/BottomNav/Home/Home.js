import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity, TextInput, FlatList} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {LightTheme} from '../../../constants/colors'
import BackHeader from '../../../components/BackHeader'
import { RadioButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Timeline from 'react-native-timeline-flatlist'

function Home({navigation}) {
    const [searchBar, setSearchBar] = useState(false)
    const [confirmLocation, setConfirmLocation] = useState(false)
    const [paymentMode, setPaymentMode] = useState(false)
    const [receiverContact, setReceiverContact] = useState(false)
    const [chooseVehicle, setChooseVehicle] = useState(true)
    const [pickupLocation, setPickupLocation] = useState('')
    const [deliveryLocation, setDeliveryLocation] = useState('')
    const [timeLine, setTimeLine] = useState([
        {title: 'Hadapsar, Pune, Maharashtra, India', icon: require('../../../assets/green-dot.png')},
        {title: 'Bavdhan Pune Maharashtra', icon:  require('../../../assets/red-dot.png')},
    ])
    const [vehicleList, setVehicleList] = useState([
        {
            id: 1,
            type: 'Tata Piaggo',
            time: '3 min',
            cost: '₹480',
            image: require('../../../assets/open-truck-delivery.png')
        },
        {
            id: 2,
            type: 'Tata Piaggo',
            time: '3 min',
            cost: '₹480',
            image: require('../../../assets/scooter-delivery.png')
        },{
            id: 3,
            type: 'Tata Piaggo',
            time: '3 min',
            cost: '₹480',
            image: require('../../../assets/pickup-delivery.png')
        },{
            id: 4,
            type: 'Tata Piaggo',
            time: '3 min',
            cost: '₹480',
            image: require('../../../assets/shipped.png')
        },
    ])
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [nameStyle, setNameStyle] = useState({
        elevation: 3, 
        borderRadius: 10, 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
    })
    const [numberStyle, setNumberStyle] = useState({
        elevation: 3, 
        borderRadius: 10, 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row-reverse'
    })
    const [location, setLocation] = useState({
        latitude: 25.133699,
        longitude: 82.564430,    
    })
    const [checked, setChecked] = useState('visa');
    let theme = LightTheme
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
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
            {
                searchBar && 
                <View style={{position: 'absolute', top: 72, borderRadius: 25, flexDirection: 'row-reverse', elevation: 3, width: DeviceWidth - 60, marginHorizontal: 30, backgroundColor: theme.BACKGROUND, height: 52, paddingHorizontal: 30, justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('PickupLocation')}>
                        <Image
                            source={require('../../../assets/search-icon.png')} 
                            style={{width: 18, height: 18}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize: 13, color: theme.TEXT_PRIMARY, fontWeight: 'bold'}}>Enter Your Pickup Location</Text>
                </View>
            }
            {
                confirmLocation &&
                <View style={deliveryLocation.trim() === '' ? styles.positionTop : styles.positionBottom}>
                    <View style={{flexDirection: 'row', backgroundColor: theme.WHITE, paddingVertical: 15, alignItems: 'center',}}>
                        {
                            deliveryLocation.trim() === '' &&
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    source={require('../../../assets/arrow-left.png')} 
                                    style={{width: 15.58, height: 15.51,}}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }

                        <View style={{marginLeft: 5}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>Confirm Location</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', flexDirection: 'row', width: DeviceWidth - 40, borderRadius: 5, backgroundColor: theme.TILE, paddingHorizontal: 10}}>
                        <Image
                            source={require('../../../assets/green-dot.png')} 
                            style={{width: 9, height: 9,}}
                            resizeMode="contain"
                        />
                        <TextInput 
                        style={{flex: 1,  color: theme.TEXT_PRIMARY,}}
                        value={pickupLocation}
                        onChangeText={setPickupLocation}
                        theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                        placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                        underlineColor={theme.PRIMARY}
                        placeholder='Search'
                        />
                    </View>
                    <View style={{alignItems: 'center', flexDirection: 'row', width: DeviceWidth - 40, borderRadius: 5, backgroundColor: theme.TILE, paddingHorizontal: 10, marginTop: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                source={require('../../../assets/red-dot.png')} 
                                style={{width: 9, height: 9,}}
                                resizeMode="contain"
                            />
                            <Image
                                source={require('../../../assets/red-triangle.png')} 
                                style={{width: 9, height: 9,}}
                                resizeMode="contain"
                            />
                        </View>
                        <TextInput 
                        style={{flex: 1,  color: theme.TEXT_PRIMARY,}}
                        value={deliveryLocation}
                        onChangeText={setDeliveryLocation}
                        theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                        placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                        autoFocus
                        underlineColor={theme.PRIMARY}
                        placeholder='Search'
                        onPressIn={() => {styles.currentLocationContainer = deliveryLocation.trim() === '' ? {top: 0} : {bottom: 0}}}
                        />
                    </View>
                    {
                       deliveryLocation.trim() !== '' && 
                       <TouchableOpacity>
                           <View style={{...styles.primaryBtn, backgroundColor: theme.PRIMARY}}>
                               <Text style={{fontSize: 14, color: theme.TEXT_WHITE, fontWeight: 'bold'}}>Proceed</Text>
                           </View>
                        </TouchableOpacity> 
                    }
                </View>
            }
            {
                paymentMode && 
                <View style={{position: 'absolute', bottom: 0, backgroundColor: theme.BACKGROUND, width: DeviceWidth, }}>
                    <Text style={{fontSize: 18, letterSpacing: 0.54, color: theme.TEXT_PRIMARY, paddingHorizontal: 20, fontWeight: 'bold', paddingVertical: 26}}>Select Payment Mode</Text>
                    <Text style={{fontSize: 14, color: theme.TEXT_PRIMARY, letterSpacing: 1, paddingHorizontal: 20}}>Cards</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, alignItems: 'center', marginVertical: 15}}>
                        {
                            checked == 'master-card'?
                            <Image
                                source={require('../../../assets/radio-btn-checked.png')} 
                                style={{width: 20, height: 20 , }}
                                resizeMode="contain"
                                
                            />
                            :
                            <TouchableOpacity onPress={()=> setChecked('master-card')}>
                                <Image
                                    source={require('../../../assets/radio-btn-unchecked.png')} 
                                    style={{width: 20, height: 20 , }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                        <Image
                            source={require('../../../assets/master-card.png')} 
                            style={{width: 47, height: 25 , marginLeft: 30}}
                            resizeMode="contain"
                        />
                        <View style={{marginLeft: 20, justifyContent: 'center'}}>
                            <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>Personal</Text>
                            <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>8955XXXXXXXX6548</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, alignItems: 'center', marginVertical: 15}}>
                        {
                            checked == 'visa'?
                            <Image
                                source={require('../../../assets/radio-btn-checked.png')} 
                                style={{width: 20, height: 20,}}
                                resizeMode="contain"
                                
                            />
                            :
                            <TouchableOpacity onPress={()=> setChecked('visa')}>
                                <Image
                                    source={require('../../../assets/radio-btn-unchecked.png')} 
                                    style={{width: 20, height: 20 , }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                        <Image
                            source={require('../../../assets/visa.png')} 
                            style={{width: 41, height: 42 , marginLeft: 30}}
                            resizeMode="contain"
                        />
                        <View style={{marginLeft: 20, justifyContent: 'center'}}>
                            <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>Personal</Text>
                            <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>8955XXXXXXXX6548</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 14, color: theme.TEXT_PRIMARY, letterSpacing: 1, paddingHorizontal: 20}}>UPI</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, alignItems: 'center', marginVertical: 15}}>
                        {
                            checked == 'g-pay'?
                            <Image
                                source={require('../../../assets/radio-btn-checked.png')} 
                                style={{width: 20, height: 20,}}
                                resizeMode="contain"

                            />
                            :
                            <TouchableOpacity onPress={()=> setChecked('g-pay')}>
                                <Image
                                    source={require('../../../assets/radio-btn-unchecked.png')} 
                                    style={{width: 20, height: 20 , }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                        <Image
                            source={ require('../../../assets/g-pay.png')} 
                            style={{width: 55, height: 25, marginLeft: 30 }}
                            resizeMode="contain"
                        />
                        <View style={{marginLeft: 20, justifyContent: 'center'}}>
                            <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>Google Pay</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, alignItems: 'center', marginVertical: 15}}>
                        {
                            checked == 'paytm'?
                            <Image
                                source={require('../../../assets/radio-btn-checked.png')} 
                                style={{width: 20, height: 20,}}
                                resizeMode="contain"
                                
                            />
                            :
                            <TouchableOpacity onPress={()=> setChecked('paytm')}>
                                <Image
                                    source={require('../../../assets/radio-btn-unchecked.png')} 
                                    style={{width: 20, height: 20 , }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                        <Image
                            source={ require('../../../assets/paytm.png')} 
                            style={{width: 55, height: 25, marginLeft: 30 }}
                            resizeMode="contain"
                        />
                        <View style={{marginLeft: 20, justifyContent: 'center'}}>
                            <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>Google Pay</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, alignItems: 'center', marginVertical: 15}}>
                        {
                            checked == 'phone-pe'?
                            <Image
                                source={require('../../../assets/radio-btn-checked.png')} 
                                style={{width: 20, height: 20,}}
                                resizeMode="contain"
                                
                            />
                            :
                            <TouchableOpacity onPress={()=> setChecked('phone-pe')}>
                                <Image
                                    source={require('../../../assets/radio-btn-unchecked.png')} 
                                    style={{width: 20, height: 20 , }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                        <Image
                            source={ require('../../../assets/phone-pe.png')} 
                            style={{width: 55, height: 25, marginLeft: 30 }}
                            resizeMode="contain"
                        />
                        <View style={{marginLeft: 20, justifyContent: 'center'}}>
                            <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>Phone Pe UPI</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.36, fontWeight: 'bold', paddingHorizontal: 20, marginVertical: 26}}>Add Payment method</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', marginVertical: 15}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Image
                                source={require('../../../assets/credit-card.png')} 
                                style={{width: 30, height: 30 }}
                                resizeMode="contain"
                            />
                            <View style={{marginLeft: 20, justifyContent: 'center'}}>
                                <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>Add Credit and Debit Cards</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('AddCard')}}>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.TEXT_SECONDARY_DARK} />
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                        <Image
                            source={require('../../../assets/tags.png')} 
                            style={{width: 20, height: 20,}}
                            resizeMode="contain"
                        />
                        <Text style={{color: theme.GREEN, fontSize: 10, letterSpacing: 0.3, marginLeft: 20}}>DIS22 Applied</Text>
                    </View>
                    <TouchableOpacity>
                           <View style={{...styles.paymentBtn, backgroundColor: theme.TEXT_PRIMARY}}>
                               <Text style={{fontSize: 14, color: theme.TEXT_WHITE, fontWeight: 'bold', letterSpacing: 0.42}}>Proceed</Text>
                           </View>
                    </TouchableOpacity> 
                </View>
            }
            {
                receiverContact && 
                <View style={{position: 'absolute',bottom: 0, width: DeviceWidth, paddingTop: 16, backgroundColor: theme.BACKGROUND, }}>
                    <Text style={{fontSize: 14, color: theme.TEXT_PRIMARY, fontWeight: 'bold', letterSpacing: 0.42, paddingHorizontal: 20}}>Receiver Contact</Text>
                    <Text style={{fontSize: 10, color: theme.TEXT_SECONDARY_DARK, letterSpacing: 0.6, paddingHorizontal: 20}}>Driver will call this contact at delivery location</Text>
                    <View style={{marginHorizontal: 12, marginTop: 20}}>
                        <Text style={{fontSize: 10, letterSpacing: 0.6, color: theme.TEXT_PRIMARY, marginBottom: 4}}>Mobile Number</Text>
                        <View style={{...numberStyle, backgroundColor: theme.BACKGROUND, alignItems: 'center', paddingLeft: 20}}>
                            <Image
                                source={require('../../../assets/add-contact.png')} 
                                style={{width: 15, height: 15}}
                                resizeMode="contain"
                            />
                            <TextInput
                                style={{...styles.textInputStyle, flex: 1, backgroundColor: theme.BACKGROUND, color: theme.TEXT_PRIMARY,}}
                                value={number}
                                onChangeText={setNumber}
                                placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                                theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                                // autoFocus
                                // outlineColor={color.WHITE}
                                multiline
                                underlineColor={theme.PRIMARY}
                                placeholder='Enter here'
                                onFocus={() => {setNumberStyle({...numberStyle, borderWidth: 1, borderColor: theme.PRIMARY})}}
                                onBlur={() => {setNumberStyle({...numberStyle, borderWidth: 1, borderColor: theme.WHITE})}}
                            />
                        </View>
                    </View>
                    <View style={{marginHorizontal: 12, marginTop: 20}}>
                        <Text style={{fontSize: 10, letterSpacing: 0.6, color: theme.TEXT_PRIMARY, marginBottom: 4}}>Mobile Number</Text>
                        <View style={{...nameStyle, backgroundColor: theme.BACKGROUND, }}>
                            <TextInput
                                style={{...styles.textInputStyle, backgroundColor: theme.BACKGROUND, color: theme.TEXT_PRIMARY,}}
                                value={name}
                                onChangeText={setName}
                                placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
                                theme={{ colors: { primary: theme.TEXT_PRIMARY }, multiline: false }}
                                // autoFocus
                                // outlineColor={color.WHITE}
                                multiline
                                underlineColor={theme.PRIMARY}
                                placeholder='Enter here'
                                onFocus={() => {setNameStyle({...nameStyle, borderWidth: 1, borderColor: theme.PRIMARY})}}
                                onBlur={() => {setNameStyle({...nameStyle, borderWidth: 1, borderColor: theme.WHITE})}}
                            />
                        </View>
                    </View>
                    <TouchableOpacity>
                       <View style={{...styles.deliveryAddBtn, backgroundColor: theme.PRIMARY_DARK}}>
                           <Text style={{fontSize: 16, letterSpacing: 0.48, color: theme.TEXT_WHITE, fontWeight: 'bold'}}>Add</Text>
                       </View>
                    </TouchableOpacity> 

                </View>
            }
            {
                chooseVehicle &&
                <View style={{position: 'absolute',bottom: 0, width: DeviceWidth, paddingTop: 16, backgroundColor: theme.BACKGROUND, }}>
                    <Timeline
                    data={timeLine}
                    //..other props
                    circleSize={9}
                    circleStyle={{backgroundColor: theme.WHITE, borderWidth: 3, borderColor: theme.GREY_LIGHT}}
                    innerCircle={'icon'}
                    lineColor={theme.GREY_LIGHT}
                    showTime={false}
                    lineWidth={1}
                    timeContainerStyle={{minWidth:52, marginTop: -5, width: 0}}
                    timeStyle={{width: 0, height: 0}}
                    // descriptionStyle={{color: theme.TEXT_SECONDARY_DARK, fontSize: 10, letterSpacing: 0.6}}
                    titleStyle={{color: theme.TEXT_PRIMARY, fontSize: 12, letterSpacing: 0.72}}
                    dotSize={5}
                    eventContainerStyle={{marginTop: -11}}
                    options={{
                      style:{paddingHorizontal:  10}
                    }}
                    />
                    <View style={{height: 0.5, backgroundColor: theme.TEXT_SECONDARY_DARK, opacity: 0.33}}></View>
                    <Text style={{fontSize: 10,  letterSpacing: 0., fontWeight: 'bold', color: theme.TEXT_PRIMARY, paddingHorizontal: 27, paddingVertical: 8}}>Choose Pickup Vehicle</Text>
                    <FlatList
                    data={vehicleList}
                    extraData={vehicleList}
                    renderItem={({ item, index }) => {
                        return(
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 8, alignItems: 'center', marginVertical: 15, elevation: item.id == 1 ? 5 : 0, marginVertical: 5, backgroundColor: theme.BACKGROUND}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Image
                                        source={item.image} 
                                        style={{width: 52, height: 52, }}
                                        resizeMode="contain"
                                    />
                                    <View style={{marginLeft: 20, justifyContent: 'center'}}>
                                        <Text style={{fontSize: 14, color: theme.TEXT_PRIMARY, letterSpacing: 0.42, fontWeight: 'bold'}}>{item.type}</Text>
                                        <Text style={{fontSize: 11, color: theme.TEXT_SECONDARY, letterSpacing: 0.33}}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 14, color: theme.TEXT_PRIMARY, letterSpacing: 0.42, fontWeight: 'bold'}}>{item.cost}</Text>
                                    <Image
                                        source={require('../../../assets/info-icon.png')} 
                                        style={{width: 30, height: 30, }}
                                        resizeMode="contain"
                                    />
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                    />
                    <View style={{height: 0.5, backgroundColor: theme.TEXT_SECONDARY_DARK, opacity: 0.33, marginBottom: 15, }}></View>
                        <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 30}}>
                        <View>
                            <Text style={{fontSize: 10, color: theme.TEXT_PRIMARY, letterSpacing: 0.3, fontWeight: 'bold'}}>Receiver Contact</Text>
                            <Text style={{fontSize: 10, color: theme.TEXT_SECONDARY_DARK, letterSpacing: 0.6}}>Driver will call this contact at delivery location</Text>
                        </View>
                        <Image
                            source={require('../../../assets/add-delivery-contacts.png')} 
                            style={{width: 40, height: 40, }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{paddingHorizontal: 20, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.BACKGROUND, elevation: 5,}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                source={require('../../../assets/add-delivery-contacts.png')} 
                                style={{width: 42, height: 17, }}
                                resizeMode="contain"
                            />
                            <View>
                                <Text style={{fontSize: 10, color: theme.TEXT_PRIMARY, letterSpacing: 0.3,}}>Google Pay</Text>
                                <Text style={{fontSize: 10, color: theme.GREEN, letterSpacing: 0.3, }}>Coupon applied</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                           <View style={{...styles.bookBtn, backgroundColor: theme.TEXT_SECONDARY}}>
                               <Text style={{fontSize: 14, color: theme.TEXT_WHITE, fontWeight: 'bold', letterSpacing: 0.42}}>Book</Text>
                           </View>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            {
                searchBar && 
                <View style={{position: 'absolute', bottom: 32, borderRadius: 25, flexDirection: 'row', elevation: 3, width: DeviceWidth - 60, marginHorizontal: 30, backgroundColor: theme.BACKGROUND, height: 34, paddingHorizontal: 17, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Image
                        source={require('../../../assets/truck-delivery.png')} 
                        style={{width: 16, height: 17}}
                        resizeMode="contain"
                    />
                    <Text style={{fontSize: 10, marginLeft: 5, color: theme.TEXT_PRIMARY, fontWeight: 'bold'}}>Lifters & Shifters</Text>
                    <Image
                        source={require('../../../assets/dot-purple.png')} 
                        style={{width: 5, height: 5, marginHorizontal: 5}}
                        resizeMode="contain"
                    />
                    <Text style={{fontSize: 10, marginLeft: 5, color: theme.TEXT_SECONDARY, fontWeight: 'bold'}}>Full fledged shifting service</Text>
                </View>
            }
            {/* <StatusBar barStyle="dark-content" hidden={false} backgroundColor={'transparent'} translucent={true} /> */}
        </View>
    )
}

export default Home
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
    bookBtn: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: 11, 
        borderRadius: 5,
        paddingHorizontal: 50, 
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