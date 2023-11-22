import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    back: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F2FA',
    },
    topo: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgTopo: {
        flex: 2,
        marginTop: 19,
        width: null,
        resizeMode: 'contain',
        height: 160,
    },
    topoT: {
        fontFamily: 'PalanquinSemiBold',
        fontSize: 25,
        fontWeight:'bold',
        color: '#7A2D98',
    },
    textNegrito: {
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: '90%',
        borderRadius: 13,
        borderColor: '#BAB8BC',
        borderWidth: 1,
        alignSelf: 'center',
        paddingHorizontal: 10, 
      },
      input: {
        flex: 1,
        paddingVertical: 10, 
        paddingLeft: 10,
        fontSize: 16, 
      },
      searchIcon: {
        marginRight: 10, 
      },
    title: {
        fontFamily: 'PalanquinThin',
        color: '#7A2D98',
        fontSize: 21,
    },
    titleLeft: {
        alignSelf: 'flex-start',
        marginStart: 20,
    },
    livroColuna: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 155,
    },
    infoColuna: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 170, 
        fontFamily: 'PalanquinThin',
        height: 200,
        justifyContent: 'space-evenly',
    },
    nomeLivroHome: {
        width: '100%',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7A2D98',
        alignSelf: 'center',
        textAlign: 'center',
    },
    nomeAnoContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    nomeAutorHome: {
        fontSize: 10,
        color: '#7A2D98',
    },
    anoLivroHome: {
        fontSize: 10,
        color: '#7A2D98',
    },
    descLivro: {
        backgroundColor: '#FFF',
        borderRadius: 9,
        width: '100%',
    },
    descLivroHome: {
        fontSize: 9,
        padding: 8,
        color: '#7A2D98',
        alignSelf: 'center',
    },

    scrollContainer: {
        flexGrow: 1,
    },

    categorias: {
        justifyContent: 'center',
        marginTop: 40,
        marginStart: 20,
        marginBottom: 40,
    },
});
