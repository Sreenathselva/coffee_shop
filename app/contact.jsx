import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#000' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Contact
        </ThemedText>
      </ThemedView>
      <ThemedText>Here you can submit your queries and we will get back to you</ThemedText>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Demo Form</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
          />

          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#999"
          />

          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={currency}
              onValueChange={(currentCurrency) =>
                setCurrency(currentCurrency)
              }
            >
              <Picker.Item label="USD" value="US Dollars" />
              <Picker.Item label="EUR" value="Euro" />
              <Picker.Item label="NGN" value="Naira" />
            </Picker>
          </View>

          <Text style={styles.selectedText}>
            Selected: {currency}
          </Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f2f4f8",
    justifyContent: "center",
    alignItems: "start",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    // backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 15,
  },
  selectedText: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
