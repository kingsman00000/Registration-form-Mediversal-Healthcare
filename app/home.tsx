import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { medicines } from './medicines';

interface Medicine {
  id: string;
  name: string;
  price: number;
}

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [cart, setCart] = useState<Medicine[]>([]);

  const addToCart = (medicine: Medicine) => {
    setCart([...cart, medicine]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse Medicines</Text>
      <FlatList
        data={medicines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ₹{item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('cart', { cart })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
});

export default HomeScreen;
