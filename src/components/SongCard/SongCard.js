import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';
import SoldStatus from './SoldStatus';

const SongCard = props => {
  const {title, imageUrl, artist, year, isSoldOut, album} = props.data;
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{title} </Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.artist}>{artist} </Text>
            <Text style={styles.year}>{year} </Text>
          </View>
          {isSoldOut && <SoldStatus />}
        </View>
        <View>
          <Text style={styles.album}>{album}</Text>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
