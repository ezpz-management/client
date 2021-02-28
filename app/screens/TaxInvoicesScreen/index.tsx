import * as React from 'react';
import { View, Text } from 'react-native';

export default function TaxInvoicesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tax Invoices Screen</Text>
    </View>
  );
}

TaxInvoicesScreen.title = 'Notas fiscais';
TaxInvoicesScreen.icon = 'file-document';
