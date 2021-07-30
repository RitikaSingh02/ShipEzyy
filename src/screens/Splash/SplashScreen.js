import React, {Component} from 'react';
import {Text, View,Animated,StyleSheet,Dimensions,Easing, Linking, Modal, TouchableOpacity, Image} from 'react-native';
import storageKeys from "../../constants/storageKeys";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchTheme } from '../../redux/actions'

export class SplashScreen extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    async componentDidMount(){
        this.props.finished()  // for no splash 
        // this.checkIsNeededUpdate()
        // this.shrinkMOBI()
            // this.fadeInImage()
    }
    render() {

        return (
            <View>
                <Text>Splash</Text>
            </View>
        );
    }
}
export const isLoading = async() =>{
  try{
        let cookie = await AsyncStorage.getItem(storageKeys.COOKIES)
        if(cookie==null){
            return "LoggedIn"
            // return "LoggedOut"
        }else{            
            return "LoggedIn"
        }
    }
  catch(err){
    // 
  }
}

const mapStateToProps = state => ({
    theme: state.reducer.theme
  })
  
  const mapDispatchToProps = dispatch => ({
    switchTheme: bindActionCreators(switchTheme, dispatch)
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashScreen)
  
  
  


// Within your render function

// Later on in your styles..
const DeviceWidth = Dimensions.get('window').width
const DeviceHeight= Dimensions.get('window').height
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  modalView: {
      height: DeviceHeight / 2,
      width:  DeviceWidth/ 1.2
  }
});