import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Appbar } from 'react-native-paper';

import MenuList, { items } from './MenuList';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ navigation, scene, previous }) => (
          <Appbar.Header>
            {previous && <Appbar.BackAction onPress={() => navigation.goBack()} />}
            <Appbar.Content title={scene.descriptor.options.title} />
          </Appbar.Header>
        ),
      }}>
      <Stack.Screen name="Menu" component={MenuList} options={{ title: 'Menu' }} />
      {(Object.keys(items) as (keyof typeof items)[]).map((id) => (
        <Stack.Screen
          key={id}
          name={id}
          component={items[id]}
          options={{ title: items[id].title }}
        />
      ))}
    </Stack.Navigator>
  );
}
