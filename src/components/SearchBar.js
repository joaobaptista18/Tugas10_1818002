import {
  StyleSheet,
  View,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SearchNormal1, ArrowLeft, Add} from 'iconsax-react-native';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const SearchBar = ({searchPhrase, setSearchPhrase}) => {
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          gap: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 12],
          }),
        },
      ]}>
      <Animated.View
        style={{
          transform: [
            {
              scale: animation.interpolate({
                inputRange: [0, 0.8, 1],
                outputRange: [0, 1.2, 1],
              }),
            },
          ],
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.grey(0.6)} variant="Linear" size={24} />
        </TouchableOpacity>
      </Animated.View>
      <View style={styles.bar}>
        <SearchNormal1
          size={18}
          color={searchPhrase ? colors.black() : colors.grey(0.5)}
          variant="Linear"
        />
        <TextInput
          style={styles.textinput}
          placeholder="Search"
          placeholderTextColor={colors.grey(0.5)}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          borderWidth={0}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoFocus={true}
        />
        {searchPhrase && (
          <TouchableOpacity onPress={() => setSearchPhrase('')}>
            <Add
              size={18}
              color={colors.black()}
              variant="Linear"
              style={{transform: [{rotate: '45deg'}]}}
            />
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  textinput: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
    lineHeight: 18,
    padding: 0,
    flex: 1,
  },
});
