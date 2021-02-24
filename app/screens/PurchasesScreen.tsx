import * as React from 'react';
import { View, Text } from 'react-native';

export default function PurchasesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Purchases Screen</Text>
    </View>
  );
}

PurchasesScreen.title = 'Compras';
PurchasesScreen.icon = 'cart-arrow-down';
