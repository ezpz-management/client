import * as React from 'react';
import { View, Text } from 'react-native';

export default function ServicesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Services Screen</Text>
    </View>
  );
}

ServicesScreen.title = 'Serviços';
ServicesScreen.icon = 'toolbox';
