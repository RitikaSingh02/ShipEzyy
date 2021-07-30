import React from 'react'
import {View, Text, Image,TouchableOpacity} from 'react-native'
import {LightTheme} from '../../../constants/colors'

function Order({navigation}) {
    let theme = LightTheme
    return (
        <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={require('../../../assets/no-orders.png')}
                style={{width: 205, height: 192, alignSelf:'center'}}
                resizeMode="contain"
            />
            <Text style={{color: theme.TEXT_SECONDARY_DARK, fontSize: 16, marginTop: 10}}>You have no orders</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('TrackOrder')}}>
                <View style={{borderColor: theme.TEXT_PRIMARY, borderWidth: 1, width: 227, height: 43, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 40}}>
                    <Text style={{color: theme.TEXT_PRIMARY, fontSize: 16, fontWeight: 'bold'}}>Book Now</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Order
