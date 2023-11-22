
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {style} from "../PopularBooks/style";
import axios from 'axios';

export const PopularBooks = () => {
  const [livrosPopulares, setLivrosPopulares] = useState([]);
  const navigation = useNavigation<NavigationProp<any>>();


  useEffect( 
    () => {
    const buscarLivrosPopulares = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=filter=free-ebooks&maxResults=5'
        );
        setLivrosPopulares(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar livros populares:', error);
      }
    };

    buscarLivrosPopulares();
  }, []);

  const handlePress = (book) => {
    navigation.navigate('BookDetailScreen', { book });
  };

  return (
    <View style={style.container}>
      <FlatList
        horizontal
        data={livrosPopulares}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={style.item}>
              <Image
                source={{ uri: item?.volumeInfo?.imageLinks?.thumbnail }}
                style={style.image}
              />
              <Text style={style.title}>{item?.volumeInfo?.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
