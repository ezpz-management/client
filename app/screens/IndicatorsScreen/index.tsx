import * as React from 'react';
import { View, Text } from 'react-native';

export default function IndicatorsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Indicators Screen</Text>
    </View>
  );
}

IndicatorsScreen.title = 'Indicadores';
IndicatorsScreen.icon = 'fire';
