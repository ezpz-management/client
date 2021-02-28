import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Avatar, Card } from 'react-native-paper';

import type { Item } from '../../navigation/MenuList';

export default function MenuItem({ item }: { item: Item }) {
  const navigation = useNavigation();

  return (
    <Card style={{ margin: 4 }} onPress={() => navigation.navigate(item.id)}>
      <Card.Title
        title={item.data.title}
        left={(leftProps) => <Avatar.Icon {...leftProps} icon={item.data.icon} />}
      />
    </Card>
  );
}
