import * as React from 'react';
import { View, Text } from 'react-native';

export default function CreditCardsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Credit Cards Screen</Text>
    </View>
  );
}

CreditCardsScreen.title = 'Cartões de crédito';
CreditCardsScreen.icon = 'credit-card';
