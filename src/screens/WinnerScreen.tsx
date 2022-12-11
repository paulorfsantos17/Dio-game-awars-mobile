import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { gameInterface } from '../interfaces/gameInterface'
import { useFocusEffect } from '@react-navigation/native'
import { clientGetWinner } from '../api/api'
import Winner from '../components/Winner/Winner'

export default function WinnerScreen(props: gameInterface) {
  const [game, setGame] = useState<gameInterface>({
    id: 0,
    name: '',
    description: '',
    cover: '',
    votes: 0,
  })

  useFocusEffect(
    useCallback(() => {
      (async() => {
        const response = await clientGetWinner()
        setGame(response)
      })()
    },[])
  )

  return (
    <View style={styles.container}>
      <Winner 
        id={game.id}
        name={game.name}
        cover= {game.cover}
        votes={game.votes}
        description={game.description}
        />
    </View> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor:'#191919',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
