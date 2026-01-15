import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from "expo-router"

import icedCoffeeImg from "@/assets/images/iced_coffee.jpg";
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>Coffee shop</Text>


        <Link href="/contact" style={{marginHorizontal: 'auto'}}
         asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>CONTACT US</Text>
          </Pressable>
        </Link>


      </ImageBackground>
    </View>
  )
}

export default app;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: "#000000cd",
    marginBottom: 120
  },
  image: {
    width: '100%',
    height: "100%",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  Link: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: "underline",
    backgroundColor: "#000000cd",
    padding: 4,
  },button: {
    // height:60,
    borderRadius: 20,
    backgroundColor: '#221717',
    paddingHorizontal: 30,
    justifyContent: "center",
    paddingVertical:8
  },buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
})