import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Votes/Header'
import GameCard from '../components/Votes/GameCard'
import { clientGetGames } from '../api/api'
import { gameInterface } from '../interfaces/gameInterface'

export  function VotesScreen() {
  const [games, setGames] = useState<[gameInterface]>([])


  useEffect(() => {
    (async () => {
      const response = await clientGetGames()
      setGames(response)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <Header></Header>
      
      <ScrollView style={styles.gameArea}>
        {games ?  games.map(game => GameCard(game)) : ''}

      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameArea: {
    flex:1,
    paddingTop: 10,
    paddingBottom:20,
    width: '100%'
  }
})


