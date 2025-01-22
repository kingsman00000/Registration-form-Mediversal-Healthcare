import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

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

const SummaryScreen: React.FC<Props> = ({ route, navigation }) => {
  const { cart } = route.params;

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} - ₹{item.price}</Text>
        )}
      />
      <Text style={styles.total}>Total: ₹{calculateTotal()}</Text>
      <Button title="Go Back Home" onPress={() => navigation.navigate('home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { fontSize: 18, marginBottom: 8 },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 16 },
});

export default SummaryScreen;
