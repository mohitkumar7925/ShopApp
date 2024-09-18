import { Image, Text } from '@app/blueprints';
import { Images } from '@src/assets';
import DividerLine from '@src/components/DividerLine/DividerLine';
import { useColor } from '@src/context';
import { scaledSize } from '@src/utils';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const summaryData = [
  {
    id: 1,
    name: 'Aedle VK-X - Premium..',
    details: 'VK-X-100A, Metallic Silver',
    quantity: 1,
    price: '$15,302.00',
  },
  {
    id: 2,
    name: 'Nikon D750 FX-format',
    details: 'D750 FX, Black',
    quantity: 2,
    price: '$12,302.00',
  },
  {
    id: 3,
    name: 'Shinobi watch 2',
    details: 'SHN-CW-02, Cream White',
    quantity: 1,
    price: '$25,302.00',
  },
  {
    id: 4,
    name: 'Minimalist wireless..',
    details: 'K30-SE, Black Hole',
    quantity: 1,
    price: '$8,302.00',
  },
];

const OrderSummary = () => {
  const { color } = useColor();
  return (
    <View>
      <Text preset="h3" style={styles.header}>
        Order Summary{' '}
        <Text preset="h3" color={color.secondaryColor}>
          (4)
        </Text>
      </Text>
      {summaryData.map((item, index) => {
        return (
          <View key={item.id} style={styles.itemContainer}>
            <Image
              source={Images.ORDERITEM_IMAGE}
              style={{
                width: scaledSize(45),
                height: scaledSize(45),
                marginRight: 10,
              }}
            />
            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text preset="h4" style={styles.itemName}>
                  {item.name}
                </Text>
                <Text
                  preset="h6"
                  color={color.secondaryColor}
                  style={styles.itemQuantityText}>
                  {item.quantity}x
                </Text>
              </View>
              <View style={[styles.row, { marginTop: 4 }]}>
                <Text
                  preset="h5"
                  color={color.secondaryColor}
                  style={styles.itemDetails}>
                  {item.details}
                </Text>
                <Text preset="h4" style={styles.itemPrice}>
                  {item.price}
                </Text>
              </View>
            </View>
          </View>
        );
      })}

      <DividerLine />

      <View style={styles.totalContainer}>
        <Text preset="h5" color={color.secondaryColor} style={styles.totalText}>
          Subtotal
        </Text>
        <Text preset="h5" style={styles.totalValue}>
          $15,302.00
        </Text>
      </View>
      <View style={styles.totalContainer}>
        <Text preset="h5" color={color.secondaryColor} style={styles.totalText}>
          Shipping fee
        </Text>
        <Text preset="h5" style={styles.totalValue}>
          $0.00
        </Text>
      </View>
      <View style={styles.totalContainer}>
        <Text preset="h5" color={color.secondaryColor} style={styles.totalText}>
          Tax
        </Text>
        <Text preset="h5" style={styles.totalValue}>
          $15.00
        </Text>
      </View>
      <View style={styles.totalContainer}>
        <Text preset="h5" color={color.secondaryColor} style={styles.totalText}>
          Total
        </Text>
        <Text preset="h5" style={styles.totalValue}>
          $15,302.00
        </Text>
      </View>
      <View style={[styles.totalContainer, { marginBottom: 10 }]}>
        <Text preset="h5" color={color.secondaryColor} style={styles.totalText}>
          Amount to be paid
        </Text>
        <Text style={styles.totalValue}>$15,417.00</Text>
      </View>

      <DividerLine />
      <View style={[styles.totalContainer, { marginTop: 10 }]}>
        <Text preset="h5" style={styles.grandTotal}>
          Amount to be paid
        </Text>
        <Text style={styles.grandTotal}>$15,417.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
  },
  itemName: {
    fontSize: scaledSize(15),
  },
  itemDetails: {
    fontSize: scaledSize(13),
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemQuantityText: {
    fontSize: scaledSize(14),
  },
  itemPrice: {
    fontSize: scaledSize(14),
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  totalText: {
    fontSize: scaledSize(15),
  },
  totalValue: {
    fontSize: scaledSize(15),
  },
  grandTotal: {
    fontSize: scaledSize(16),
  },
});

export default OrderSummary;
