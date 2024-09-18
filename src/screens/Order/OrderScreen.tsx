import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';

import { AnimatedTouchableOpacity, Text } from '@app/blueprints';

import { Icons, SVGIcons } from '@src/assets';
import { AppImage, BaseLayout, Icon, SvgIcon } from '@src/components';
import { contents } from '@src/context';
import type { NewsResult } from '@src/services';
import { scaled } from '@src/utils';

import useOrder from './useOrder';
import DividerLine from '@src/components/DividerLine/DividerLine';
import OrderSummary from './OrderSummary';

const OrderScreen = () => {
  const { color, styles } = useOrder();

  return (
    <BaseLayout>
      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text preset="h4">
          {contents('order.orders')}
          <Text preset="h4" style={styles.header}>
            {' / '}
            {contents('order.orderDetails')}
          </Text>
        </Text>
        <Text preset="h1" style={styles.orderNumber}>
          Order #27839-00
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <SvgIcon
              pathFill={color.primaryColor}
              icon={SVGIcons.PRINT}
              {...scaled(20)}
            />
            <Text preset="h3" style={styles.buttonText}>
              Print
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: color.textColor }]}>
            <SvgIcon
              pathFill={color.primaryColor}
              icon={SVGIcons.EDIT}
              {...scaled(20)}
            />
            <Text
              preset="h3"
              style={styles.buttonText}
              color={color.backgroundColor}>
              Edit Order
            </Text>
          </TouchableOpacity>
        </View>

        <DividerLine />

        <OrderSummary />
      </ScrollView>
    </BaseLayout>
  );
};

export default React.memo(OrderScreen);
