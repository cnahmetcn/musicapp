import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import music_data from './music_data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const renderSong = ({item}) => <SongCard data={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = value => {
    const filteredList = music_data.filter(song => {
      const searchedText = value.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setSongList(filteredList);
  };

  const [songList, setSongList] = useState([]);

  useEffect(() => {
    setSongList(music_data);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={songList}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
