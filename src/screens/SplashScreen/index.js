import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, fontType} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = () => {
    const navigation = useNavigation();
useEffect(() => {
  checkToken();
}, []);
const checkToken = async () => {
  try {
    const userDataJSON = await AsyncStorage.getItem('userData');

    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);
      const {userToken, expirationTime} = userData;

      if (userToken && expirationTime) {
        const currentTime = new Date().getTime();

        if (currentTime <= expirationTime) {
          setTimeout(() => {
            navigation.replace('MainApp');
          }, 1500);
        } else {
          setTimeout(() => {
            navigation.replace('Login');
          }, 1500);
        }
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      }
    } else {
      setTimeout(() => {
        navigation.replace('Login');
      }, 1500);
    }
  } catch (error) {
    console.error('Error retrieving token data:', error);
    setTimeout(() => {
      navigation.replace('Login');
    }, 1500);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LABUAN BAJO APP.</Text>
      <View style={styles.infoContainer}>
        <Text style={[styles.info, {fontFamily: fontType['Pjs-Regular']}]}>
          Presented By
        </Text>
        <Text
          style={[
            styles.info,
            {fontFamily: fontType['Pjs-SemiBold'], textAlign: 'center'},
          ]}>
          Labuan Bajo
        </Text>
        <Text
          style={[
            styles.info,
            {fontFamily: fontType['Pjs-SemiBold'], textAlign: 'center'},
          ]}>
          App
        </Text>
      </View>
    </View>
  );
  
};

export default SplashScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    justifyContent: 'center',
  },
  logo: {
    fontSize: 48,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.blue(),
    alignSelf: 'center',
    
  },
  infoContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
  },
  info: {
    fontSize: 12,
    color: colors.grey(0.6),
  },
});
