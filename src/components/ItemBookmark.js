import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const truncateTextByWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return text;
};

const ItemBookmark = ({item, onPress, variant}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardItem} onPress={()=>navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}>
        <View style={styles.cardContent}>
          <View style={styles.cardCategory}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryLabel}>Labuan Bajo {item.category}</Text>
            </View>
          </View>
          <View>
            <View style={styles.cardIcon}>
              <TouchableOpacity onPress={onPress}>
                <Receipt21 color={colors.white()} variant={variant} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </FastImage>
      <View style={{gap: 20, paddingHorizontal: 15, paddingVertical: 10}}>
        <View style={{gap: 10}}>
          <Text style={styles.blogTitle}>{item.title}</Text>
          <Text style={styles.blogContent}>
            {truncateTextByWords(item.content, 10)}
          </Text>
        </View>
        <View style={styles.cardInfo}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Clock size={12} variant="Linear" color={colors.grey(0.6)} />
            <Text style={styles.cardText}>{item.createdAt}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Message size={12} variant="Linear" color={colors.grey(0.6)} />
            <Text style={styles.cardText}>{item.totalComments}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemBookmark;

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: colors.black(0.03),
    borderRadius: 15,
  },
  cardImage: {
    width: '100%',
    height: 145,
    borderRadius: 15,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
  cardCategory: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  categoryBadge: {
    backgroundColor: colors.white(0.8),
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius:10,
  },
  categoryLabel: {
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.blue(0.8),
  },
  blogTitle: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  blogContent: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(),
  },
});
