import * as React from 'react';
import { View, Text } from 'react-native';

export default function PeopleScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>People Screen</Text>
    </View>
  );
}

PeopleScreen.title = 'Pessoas';
PeopleScreen.icon = 'account-group';
