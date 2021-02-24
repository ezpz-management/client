import * as React from 'react';
import { View, Text } from 'react-native';

export default function AccountsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Accounts Screen</Text>
    </View>
  );
}

AccountsScreen.title = 'Contas bancárias e caixas';
AccountsScreen.icon = 'bank';
