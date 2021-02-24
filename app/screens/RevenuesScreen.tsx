import * as React from 'react';
import { View, Text } from 'react-native';

export default function RevenuesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Revenues Screen</Text>
    </View>
  );
}

RevenuesScreen.title = 'Receitas';
RevenuesScreen.icon = 'arrow-down-bold';
