
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    resultsContainer: {
      marginVertical: 0,
      marginHorizontal: 15,
      borderRadius: 13,
        borderColor: '#BAB8BC',
        borderWidth: 1,
        alignSelf: 'center',
    },
    bookItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 13,
      width: null,
      resizeMode: 'contain',
    },
    
    bookTitle: {
      fontSize: 18,
    },
  });