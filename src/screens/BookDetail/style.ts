import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  scrollContainer: {
    flexGrow: 1,
  },

  container: {
      flex: 1,
      backgroundColor: '#F8F2FA',
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 20,
  },


  pageTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#7A2D98',
      marginTop: 100,
      alignSelf:'center',
  },
   
  imageContainer: {
    flex: 1,
    alignSelf:"center",
    marginTop:60,
  },

  capa: {
    resizeMode: 'cover', 
    borderRadius: 16, 
    width: 300, 
    height: 460,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  titulo: {
    color:'#490165',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    marginLeft: 25,
    textAlign:'left',
  },
  autor: {
    color:'#490165',
    fontSize: 19,
    fontWeight: '200',
    marginBottom: 10,
    marginLeft: 30,
    textAlign:'left',
  },
    
  descricaoContainer: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },

  descricao: {
    fontSize: 14,
    marginBottom: 10,
    textAlign:'legth',
    color:'#490165',
  },

  fullDescription: {
    fontSize: 14, 
  },

  lerMaisOcultar: {
    textDecorationLine: 'underline',
    marginTop: 5,
    textAlign:'center',
    color:'#490165',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  },
  
  likeText: {
    alignSelf: 'center', 
    marginLeft: 10, 
    fontSize:20,
    color: '#7A2D98',
  },

  likeContainer: {
  flexDirection: 'row', 
  alignItems: 'center', 
  marginTop: 30, 
  justifyContent:'space-evenly',
  marginBottom:50,  
  },

  checkButton: {
    alignSelf: 'center', 
  },
  });