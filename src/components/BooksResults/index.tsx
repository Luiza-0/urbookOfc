import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import { useBookStore } from "../../stores/bookStore";
import {style} from "../BooksResults/style";
type Book = {
  id: number,
  volumeInfo: {
    title: string,
    image: any,
  }
}

export default function BooksResults() {
  const { navigate } = useNavigation<NavigationProp<any>>();
  const bookStore = useBookStore();

  return (
    <View style={style.resultsContainer}>
      {bookStore.books.map((book, index) => (
        <Pressable
          key={book.id}
          style={style.bookItem}
          onPress={() => navigate('BookDetailScreen', { book })}
        >
          <Text style={style.bookTitle}>{book.volumeInfo.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}