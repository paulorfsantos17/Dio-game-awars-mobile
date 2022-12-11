import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'
import trofeu from '../../../assets/trofeu.jpg'


export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.label}>
          GAME OF YEAR
        </Text>
      </View>
      <View>
      <Image source={trofeu} style={styles.logo} />

      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#0EC244",
    borderRadius: 8,
    padding: 10,
    paddingLeft:50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
    marginBottom: 5,
    height: 150,
    fontSize:29
  },
  label: {
    borderColor: "#23262E",
    borderWidth: 1,
    borderRadius:5,
    padding: 10,
    fontSize: 22,
  }, 
  logo:{
    flex: 1,
    aspectRatio: 1.5,
    width: 50,
    height:20,
    resizeMode: 'contain'
  }
})