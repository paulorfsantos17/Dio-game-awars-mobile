import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'

import {clientSendindVote} from '../../api/api'
import { gameInterface } from '../../interfaces/gameInterface'

const sendingVote = (id: number) => {
  Alert.alert(
    "Vote Send", 
    "thaks for helping decide game of the year",
    [
      { text: 'OK', onPress: () => clientSendindVote(id)}
    ]
  )
}

export default function GameCard(props : gameInterface) {
  return (
    <View style={styles.CardContainer} key={props.id}>
      <View>
        <Image 
          source={{ uri: props.cover }}
          style={styles.card}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          {props.name}
        </Text>
        <Button
          onPress={() => sendingVote(props.id)}
          title='vote'
          color='#9AC33C' 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  CardContainer: {
    borderWidth: 2,
    padding: 10,
    borderBottomColor: '#fff',
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: "#404040"
  },
  card: {
    borderRadius: 10,
    width: 200,
    height: 300
  }, 
  label: {
    fontSize: 22,
    color: 'white',
    paddingBottom: 15,
    textAlign: 'center'
  },infoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20
  }
})