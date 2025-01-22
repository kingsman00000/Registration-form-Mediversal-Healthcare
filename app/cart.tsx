import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

interface Medicine {
  id: string;
  name: string;
  price: number;
}

interface Props {
  route: {
    params: {
      cart: Medicine[];
    };
  };
  navigation: any;
}

const CartScreen: React.FC<Props> = ({ route, navigation }) => {
  const { cart } = route.params;

  const removeFromCart = (medicine: Medicine) => {
    const updatedCart = cart.filter((item) => item.id !== medicine.id);
    navigation.setParams({ cart: updatedCart });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ₹{item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item)} />
          </View>
        )}
      />
      <Button title="Proceed to Summary" onPress={() => navigation.navigate('summary', { cart })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
});

export default CartScreen;
