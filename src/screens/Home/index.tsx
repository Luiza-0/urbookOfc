import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Dimensions,
    ScrollView,

} from 'react-native';

import { styles } from '../Home/style';

import { Feather } from '@expo/vector-icons';

import { getBookList } from '../../services/book';

import { useBookStore } from '../../stores/bookStore';

import {PopularBooks} from '../../components/PopularBooks';
import BooksResults from '../../components/BooksResults';
import { ReadedBooks } from '../../components/ReadedBooks';

const width = Dimensions.get('screen').width;
const topo = require('../../assets/topo-2.png');

export default function HomeScreen() {

    const bookStore = useBookStore();
    const [consulta, setConsulta] = useState('');

    const handleSearchBooks = () => {
        if(!consulta){
            bookStore.setBookList([]);
        }
        getBookList({ query: consulta })
            .then(({ items }) => bookStore.setBookList(items))
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.back}>
                <View style={styles.topo}>
                    <Text style={styles.topoT}>
                        <Text>Qual será{'\n'}</Text>
                        <Text>o seu próximo{'\n'}</Text>
                        <Text>livro favorito?</Text>
                    </Text>
                    <Image source={topo} style={styles.imgTopo} /> 
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquise por livros..."
                        onChangeText={setConsulta}
                        onEndEditing={handleSearchBooks}
                    />
                    <Feather name="search" size={24} color="#7A2D98" style={styles.searchIcon} />
                </View>

                <BooksResults/>

                <View style={styles.categorias}>
                    <Text style={[styles.title, styles.titleLeft]}>Livros Populares</Text>
                    <PopularBooks/>
                </View>
                
                <View style={styles.categorias}>
                    <Text style={[styles.title, styles.titleLeft]}>Livros já lidos</Text>
                    <ReadedBooks/>
                </View>

            </View>
        </ScrollView>
    );
}
