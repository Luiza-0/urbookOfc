import React, { useState } from "react";
import { Button, Text, ScrollView, Image, View, TouchableOpacity } from "react-native";
import { useBookStore } from "../../stores/bookStore";
import { styles } from "./style";
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function BookDetailScreen({ route }) {

  const { book } = route.params;
  const bookStore = useBookStore();
  const isReadedBook = bookStore.readedBooks.some((b) => b.id == book.id);
  const [animationType, setAnimationType] = useState('bounce');

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
    setAnimationType('bounce'); // Reset para a animação original
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const maxDescriptionLength = 200;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      
        <Text style={styles.pageTitle}>Detalhes do livro</Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: book?.volumeInfo?.imageLinks?.thumbnail }} style={styles.capa} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>{book.volumeInfo.title}</Text>
          <Text style={styles.autor}>
          {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}
        </Text>

          <View style={styles.descricaoContainer}>
            <Text style={[styles.descricao, showFullDescription && styles.fullDescription]}>
              {showFullDescription
                ? book.volumeInfo.description
                : `${book.volumeInfo.description.slice(0, maxDescriptionLength)}...`}
                         {book.volumeInfo.description.length > maxDescriptionLength && (
                            <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.lerMaisOcultar}>
                                {showFullDescription ? "Ocultar" : "Ler Mais"}
                      </Text>
                    </TouchableOpacity>
                  )}
            </Text>
          </View>
        </View>
    </View>
    
    <View style ={styles.likeContainer}>
    <Text style={styles.likeText}>Você já leu esse livro?</Text>

    <Animatable.View animation={animationType} duration={1000} style={styles.checkButton}>
        <TouchableOpacity
          onPress={() => {
            if (isReadedBook) {
              bookStore.removeReadedBook(book);
            } else {
              bookStore.setReadBook(book);
              setAnimationType('rubberBand');
            }
          }}
        >
          <FontAwesome name={isReadedBook ? 'check-circle' : 'circle-o'} size={32} color="#7A2D98" />
        </TouchableOpacity>
      </Animatable.View>
    </View>

    </ScrollView>
  );}