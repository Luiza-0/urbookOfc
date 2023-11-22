
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationProp,  useNavigation } from '@react-navigation/native';
import {style} from "../ReadedBooks/style";
import { useBookStore } from '../../stores/bookStore';

export const ReadedBooks = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const { readedBooks } = useBookStore();
  const handlePress = (book) => {
    navigation.navigate('BookDetailScreen', { book });
  };

  return (
    <View style={style.container}>
      <FlatList
        horizontal
        data={readedBooks}
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
