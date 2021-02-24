import * as React from 'react';
import { View, Text } from 'react-native';

export default function ProductsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Products Screen</Text>
    </View>
  );
}

ProductsScreen.title = 'Produtos';
ProductsScreen.icon = 'archive';
