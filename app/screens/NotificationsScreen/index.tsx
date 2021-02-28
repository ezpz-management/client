import * as React from 'react';
import { View, Text } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

NotificationsScreen.title = 'Notificações';
NotificationsScreen.icon = 'alarm-light';
