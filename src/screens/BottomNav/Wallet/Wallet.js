import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, StatusBar, FlatList, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {LightTheme} from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import BackHeader from '../../../components/BackHeader'

function Wallet({navigation}) {
    const [cardList, setCardList] = useState([
        {
            id: 1,
            type: 'Personal',
            cardNumber: '8955XXXXXXXX6548',
            company: 'master-card',
            image: require('../../../assets/master-card.png')
        },
        {
            id: 2,
            type: 'Personal',
            cardNumber: '8955XXXXXXXX6548',
            company: 'visa',
            image: require('../../../assets/visa.png')
        }
    ])
    const [upiList, setUpiList] = useState([
        {
            id: 1,
            type: 'Personal',
            name: 'Google Pay',
            cardNumber: '8955XXXXXXXX6548',
            company: 'master-card',
            image: require('../../../assets/g-pay.png')
        },
        {
            id: 2,
            type: 'Personal',
            name: 'Paytm UPI',
            cardNumber: '8955XXXXXXXX6548',
            company: 'visa',
            image: require('../../../assets/paytm.png')
        },
        {
            id: 3,
            type: 'Personal',
            name: 'Phone Pe UPI',
            cardNumber: '8955XXXXXXXX6548',
            company: 'visa',
            image: require('../../../assets/phone-pe.png')
        }
    ])
    let theme = LightTheme
    return (
        <View style={{flex: 1, backgroundColor: theme.BACKGROUND}}>
            <BackHeader showBackBtn={false} showHeaderTxt={true} headerText="Payment Options" />
            <View>
                <Text style={{fontSize: 14, color: theme.TEXT_PRIMARY, letterSpacing: 1, paddingHorizontal: 20}}>Cards</Text>
                <FlatList
                data={cardList}
                extraData={cardList}
                renderItem={({ item, index }) => {
                    return(
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', marginVertical: 15}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Image
                                    source={item.image} 
                                    style={{width: 47, height: item.company === 'master-card' ? 25 : 47, }}
                                    resizeMode="contain"
                                />
                                <View style={{marginLeft: 20, justifyContent: 'center'}}>
                                    <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>{item.type}</Text>
                                    <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>{item.cardNumber}</Text>
                                </View>
                            </View>
                             <Entypo name="dots-three-vertical" size={18} color={theme.TEXT_SECONDARY_DARK} />
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                />
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
                <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK,marginHorizontal: 20, marginVertical: 30, opacity: 0.33}}></View>
                <Text style={{fontSize: 14, color: theme.TEXT_PRIMARY, letterSpacing: 1, paddingHorizontal: 20}}>UPI</Text>
                <FlatList
                data={upiList}
                extraData={upiList}
                renderItem={({ item, index }) => {
                    return(
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, alignItems: 'center', marginVertical: 20}}>
                            <Image
                                source={item.image} 
                                style={{width: 55, height: 25 }}
                                resizeMode="contain"
                            />
                            <View style={{marginLeft: 20, justifyContent: 'center'}}>
                                <Text style={{fontSize: 12, color: theme.TEXT_PRIMARY, letterSpacing: 0.6}}>{item.name}</Text>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Wallet
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('window').height;