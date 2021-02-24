import * as React from 'react';
import { View, Text } from 'react-native';

export default function SalesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sales Screen</Text>
    </View>
  );
}

SalesScreen.title = 'Vendas';
SalesScreen.icon = 'cart-arrow-up';
