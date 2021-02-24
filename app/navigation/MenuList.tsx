import type { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { FlatList } from 'react-native';
import { Avatar, Badge, Card, useTheme } from 'react-native-paper';

import AccountsScreen from '../screens/AccountsScreen';
import CreditCardsScreen from '../screens/CreditCardsScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import HelpScreen from '../screens/HelpScreen';
import IndicatorsScreen from '../screens/IndicatorsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import PeopleScreen from '../screens/PeopleScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PurchasesScreen from '../screens/PurchasesScreen';
import RevenuesScreen from '../screens/RevenuesScreen';
import SalesScreen from '../screens/SalesScreen';
import ServicesScreen from '../screens/ServicesScreen';
import TaxInvoicesScreen from '../screens/TaxInvoicesScreen';

export const items: Record<string, React.Component<any> & { title: string; icon: string }> = {
  notifications: NotificationsScreen,
  indicators: IndicatorsScreen,
  sales: SalesScreen,
  purchases: PurchasesScreen,
  taxInvoices: TaxInvoicesScreen,
  people: PeopleScreen,
  products: ProductsScreen,
  services: ServicesScreen,
  revenues: RevenuesScreen,
  expenses: ExpensesScreen,
  accounts: AccountsScreen,
  creditCards: CreditCardsScreen,
  profile: ProfileScreen,
  help: HelpScreen,
};

type Props = {
  navigation: StackNavigationProp<{ [key: string]: undefined }>;
};

type Item = {
  id: string;
  data: typeof items[string];
};

const data = Object.keys(items).map((id): Item => ({ id, data: items[id] }));

export default function MenuList({ navigation }: Props) {
  const renderItem = ({ item }: { item: Item }) => (
    <Card style={{ margin: 4 }} onPress={() => navigation.navigate(item.id)}>
      <Card.Title
        title={item.data.title}
        left={(props) => <Avatar.Icon {...props} icon={item.data.icon} />}
        // right={(props) => <Badge visible={true} {...props}></Badge>}
        rightStyle={{ marginHorizontal: 16 }}
      />
    </Card>
  );

  const keyExtractor = (item: { id: string }) => item.id;

  const { colors } = useTheme();

  return (
    <FlatList
      contentContainerStyle={{ padding: 4 }}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={data}
    />
  );
}
