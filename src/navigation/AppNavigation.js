import React, { useState } from "react";
import { View, Text, Image, StatusBar } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen, { isLoading } from '../screens/Splash/SplashScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from "react-native-animatable";
import { LightTheme, DarkTheme } from '../constants/colors'

// import messaging from '@react-native-firebase/messaging';
import storageKeys from "../constants/storageKeys";
import strings from "../constants/strings";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchTheme, newNotification } from '../redux/actions'
import Signup from "../screens/LoginScreens/Signup";

import Home from "../screens/BottomNav/Home/Home";
import PickupLocation from "../screens/BottomNav/Home/PickupLocation";
import Order from "../screens/BottomNav/Order/Order";
import Profile from "../screens/BottomNav/Profile/Profile";
import Wallet from "../screens/BottomNav/Wallet/Wallet";
import Otp from "../screens/LoginScreens/Otp";
import PersonalDetails from "../screens/LoginScreens/PersonalDetails";
import AddCard from "../screens/BottomNav/Wallet/AddCard";
import TrackOrder from "../screens/BottomNav/Order/TrackOrder";
//screens


export class AppNavigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            LoggedIn: false,
            theme: '',
            DarkMode: false,
        }
    }


    async componentDidMount() {

        // let data = await AsyncStorage.getItem(storageKeys.NOTIFICATION_DATA)
        // data = JSON.parse(data)
        // let count = await AsyncStorage.getItem(storageKeys.NEW_NOTIFICATION)
        // count = JSON.parse(count)
        // this.props.newNotification({ count, data })
    }

    login = () => {
        this.setState({ LoggedIn: true })
    }

    splashComplete = async () => {
        let loggedInStatus = await isLoading()
        if (loggedInStatus == "LoggedIn") {
            this.setState({ isLoading: false, LoggedIn: true })
        } else {
            this.setState({ isLoading: false, LoggedIn: false })
        }
        // let theme = await AsyncStorage.getItem(storageKeys.THEME_PREFERENCE)
        // theme = JSON.parse(theme)
        // let DarkMode = await AsyncStorage.getItem(storageKeys.THEME_MODE)
        // this.setState({ theme: theme, DarkMode: DarkMode == strings.DARK_THEME ? true : false })
    }


    render() {
        const theme = LightTheme

        const { isLoading, LoggedIn } = this.state
        return (

            <View style={{ flex: 1,}}>
                {
                    isLoading && <SplashScreen finished={() => { this.splashComplete() }} />
                }
                {
                    !isLoading && LoggedIn &&
                    <MyContext.Provider value={() => { this.logout() }} >
                        <TabNavigator badgeCount={2} theme={theme} />
                    </MyContext.Provider>
                }
                {
                    !isLoading && !LoggedIn &&
                    <MyContext.Provider value={() => this.login()}>
                        <LoginStack />  
                    </MyContext.Provider>
                }
            </View>

        )
    }
}



const StackNavigator = createStackNavigator();

const LoginStack = (props) => (
    <StackNavigator.Navigator
        initialRouteName="Signup"
        mode="card"
        headerMode="none"
    >
        <StackNavigator.Screen name="Signup" component={Signup} />
        <StackNavigator.Screen name="Otp" component={Otp} />
        <StackNavigator.Screen name="PersonalDetails" component={PersonalDetails} />
    </StackNavigator.Navigator>
)
const HomeStack = (props) => (
    <StackNavigator.Navigator
        initialRouteName="Home"
        mode="card"
        headerMode="none"
    >
        <StackNavigator.Screen name="Home" component={Home} />
        <StackNavigator.Screen name="PickupLocation" component={PickupLocation} />
    </StackNavigator.Navigator>
)
const OrdersStack = (props) => (
    <StackNavigator.Navigator
        initialRouteName="Order"
        mode="card"
        headerMode="none"
    >
        <StackNavigator.Screen name="Order" component={Order} />
        <StackNavigator.Screen name="TrackOrder" component={TrackOrder} />
    </StackNavigator.Navigator>
)
const WalletStack = (props) => (
    <StackNavigator.Navigator
        initialRouteName="Wallet"
        mode="card"
        headerMode="none"
    >
        <StackNavigator.Screen name="Wallet" component={Wallet} />
        <StackNavigator.Screen name="AddCard" component={AddCard} />
    </StackNavigator.Navigator>
)
const Tab = createBottomTabNavigator();
const TabNavigator = (props) => {
    const [image, setImage] = useState('https://i.ibb.co/Z8fQZG6/Profile-PNG-Icon-715x715.png')
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {

                    let iconName;
                    let sizeIcon = focused ? size + 6 : size
                    let colorIcon = focused ? props.theme.PRIMARY : props.theme.BLACK // 51b9db
                    if (route.name === 'Home') {
                        return (
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Image
                                    source={require('../assets/home-icon.png')} 
                                    style={{width: 24, height: 20, tintColor: focused ? props.theme.PRIMARY : props.theme.TEXT_SECONDARY_LIGHT}}
                                    resizeMode="contain"
                                />
                                <Text style={{fontSize: 10,color: focused ? props.theme.PRIMARY : props.theme.TEXT_SECONDARY_LIGHT}}>Home</Text>
                            </View>
                        )
                    }
                    else if (route.name === 'Order') {
                        return(
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Image
                                    source={require('../assets/orders-icon.png')} 
                                    style={{width: 22, height: 22, tintColor: focused ? props.theme.PRIMARY : props.theme.TEXT_SECONDARY_LIGHT}}
                                    resizeMode="contain"
                                />
                                <Text style={{fontSize: 10,color: focused ? props.theme.PRIMARY : props.theme.TEXT_SECONDARY_LIGHT}}>Orders</Text>
                            </View>
                        )
                    } else if (route.name === 'Wallet') {
                        return(
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Image
                                    source={require('../assets/wallet-icon.png')} 
                                    style={{width: 24, height: 20, tintColor: focused ? props.theme.PRIMARY : props.theme.TEXT_SECONDARY_LIGHT}}
                                    resizeMode="contain"
                                />
                                <Text style={{fontSize: 10,color: focused ? props.theme.PRIMARY : props.theme.TEXT_SECONDARY_LIGHT}}>Wallet</Text>
                            </View>
                        )
                    } else if (route.name = 'Profile') {
                        return(
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Image
                                    source={require('../assets/profile-icon.png')} 
                                    style={{width: 22, height: 22, tintColor: focused ? props.theme.PRIMARY : props.theme.TEXT_SECONDARY_LIGHT}}
                                    resizeMode="contain"
                                />
                                <Text style={{fontSize: 10,color: focused ? props.theme.PRIMARY : props.theme.TEXT_SECONDARY_LIGHT}}>Profile</Text>
                            </View>
                        )
                    }

                },
            })}
            tabBarOptions={{
                // activeTintColor: colors.WHITE,
                keyboardHidesTabBar: true,
                activeBackgroundColor: props.theme.WHITE, //60708d
                inactiveBackgroundColor: props.theme.WHITE, //00223d 
                showLabel: false,
                adaptive: true,
                style: {
                    height: 57,
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Order" component={OrdersStack} />
            <Tab.Screen name="Wallet" component={WalletStack} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

    )
}

export const MyContext = React.createContext(
    () => {
        //do nothing 
    }
)

const mapStateToProps = state => ({
    theme: state.reducer.theme,
    notification: state.reducer.newNotification
})

const mapDispatchToProps = dispatch => ({
    switchTheme: bindActionCreators(switchTheme, dispatch),
    newNotification: bindActionCreators(newNotification, dispatch)

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppNavigation)
