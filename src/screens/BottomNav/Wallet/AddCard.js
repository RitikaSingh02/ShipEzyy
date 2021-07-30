import React, {useState, useEffect} from 'react'
import {View, Text, Dimensions,TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {LightTheme} from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import BackHeader from '../../../components/BackHeader'
import { Input } from 'react-native-elements';


function AddCard({navigation}) {
    const [nameOnCard, setNameOnCard] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [typeOfCard, setTypeOfCard] = useState('personal')
    const [text, setText] = React.useState('');
    let theme = LightTheme
    let disabledBtn  = (nameOnCard.trim() === '' || cardNumber.trim() === '' || expiryDate.trim() === '') ? true : false
    return (
        <View style={{flex: 1, backgroundColor: theme.BACKGROUND}}>
            <BackHeader showBackBtn={true} showHeaderTxt={true} headerText="Add a Card" />
            <Text style={{fontSize: 16, marginHorizontal: 20, letterSpacing: 0.6, color: theme.TEXT_PRIMARY}}>
                We accept Credit and Debit card from Visa, Mastercard, RuPay, American Express and Discover
            </Text>
            <TextInput
            style={{...styles.textInputFocusStyle1, color: theme.TEXT_PRIMARY, marginTop: 15}}
            value={nameOnCard}
            onChangeText={setNameOnCard}
            placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
            onFocus={() => {{styles.textInputFocusStyle1 = {borderBottomColor: theme.PRIMARY, marginHorizontal: 20, borderBottomWidth: 1}}}}
            onBlur={() => {{styles.textInputFocusStyle1 = {borderBottomColor: theme.BORDER, marginHorizontal: 20, borderBottomWidth: 1}}}}
            placeholder='Name on Card'
            />
            <TextInput
            style={{...styles.textInputFocusStyle2, color: theme.TEXT_PRIMARY, marginTop: 15}}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
            onFocus={() => {{styles.textInputFocusStyle2 = {borderBottomColor: theme.PRIMARY, marginHorizontal: 20, borderBottomWidth: 1}}}}
            onBlur={() => {{styles.textInputFocusStyle2 = {borderBottomColor: theme.BORDER, marginHorizontal: 20, borderBottomWidth: 1}}}}
            placeholder='Card Number'
            keyboardType="number-pad"
            />
            <TextInput
            style={{...styles.textInputFocusStyle3, color: theme.TEXT_PRIMARY, marginTop: 15}}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholderTextColor={theme.TEXT_SECONDARY_LIGHT}
            onFocus={() => {{styles.textInputFocusStyle3 = {borderBottomColor: theme.PRIMARY, marginHorizontal: 20, borderBottomWidth: 1}}}}
            onBlur={() => {{styles.textInputFocusStyle3 = {borderBottomColor: theme.BORDER, marginHorizontal: 20, borderBottomWidth: 1}}}}
            placeholder='Expiry Date (MM/YY)'
            />
            <Text style={{marginHorizontal: 20, fontWeight: 'bold', fontSize: 12, letterSpacing: 0.5, color: theme.TEXT_PRIMARY, marginTop: 20}}>Nickname for Card</Text>
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 8, marginBottom: 5, maxHeight: 30, marginHorizontal: 20 }}>
                <TouchableOpacity style={(typeOfCard == 'personal') ? styles.selectedTopButton : styles.topButton} onPress={() => { setTypeOfCard('personal') }}>
                    <Text style={(typeOfCard == 'personal') ? styles.selectedTopButtonTxt : styles.topButtonTxt}>Personal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(typeOfCard == 'business') ? styles.selectedTopButton : styles.topButton} onPress={() => { setTypeOfCard('business') }}>
                    <Text style={(typeOfCard == 'business') ? styles.selectedTopButtonTxt : styles.topButtonTxt}>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(typeOfCard == 'other') ? styles.selectedTopButton : styles.topButton} onPress={() => { setTypeOfCard('other') }}>
                    <Text style={(typeOfCard == 'other') ? styles.selectedTopButtonTxt : styles.topButtonTxt}>Other</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 1, backgroundColor: theme.TEXT_SECONDARY_DARK,marginHorizontal: 20, marginVertical: 30, opacity: 0.33}}></View>
            <Text style={{fontSize: 12, marginHorizontal: 20, letterSpacing: 0.5, color: theme.TEXT_SECONDARY_LIGHT}}>
            We will save your card for convenience. If required, you can remove the card from in 'Wallet' section. We do not store CVV.
            </Text>
            <TouchableOpacity disabled={nameOnCard.trim() === '' || cardNumber.trim() === '' || expiryDate.trim() === ''}>
                <View style={{...styles.primaryBtn, backgroundColor: disabledBtn ?  theme.GREY_DARK : theme.PRIMARY}}>
                    <Text style={{fontSize: 14, color: theme.TEXT_WHITE, fontWeight: 'bold'}}>Add Card</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AddCard
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    primaryBtn: {
      justifyContent: 'center', 
      alignItems: 'center', 
      marginHorizontal: 30, 
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
    textInputFocusStyle1: {
        borderBottomWidth: 1, 
        marginHorizontal: 20,
        borderBottomColor: LightTheme.BORDER,
    },
    textInputFocusStyle2: {
        borderBottomWidth: 1, 
        marginHorizontal: 20,
        borderBottomColor: LightTheme.BORDER,

    },
    textInputFocusStyle3: {
        borderBottomWidth: 1, 
        marginHorizontal: 20,
        borderBottomColor: LightTheme.BORDER,
    },
    topButton: {
        flex: 1 / 3,
        alignItems: 'center',
        backgroundColor: LightTheme.WHITE,
        marginHorizontal: 5,
        paddingVertical: 5,
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: LightTheme.PRIMARY,
        borderWidth: 1
    },
    topButtonTxt: {
        color: LightTheme.PRIMARY,
        fontSize: 12
    },
    selectedTopButton: {
        flex: 1 / 3,
        alignItems: 'center',
        backgroundColor: LightTheme.PRIMARY,
        marginHorizontal: 5,
        paddingVertical: 5,
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: LightTheme.PRIMARY,
        borderWidth: 1
    },
    selectedTopButtonTxt: {
        color: LightTheme.WHITE,
        fontSize: 12
    },

  });