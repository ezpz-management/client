import * as React from 'react';
import { View, Text } from 'react-native';

export default function ExpensesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Expenses Screen</Text>
    </View>
  );
}

ExpensesScreen.title = 'Despesas';
ExpensesScreen.icon = 'arrow-up-bold';
