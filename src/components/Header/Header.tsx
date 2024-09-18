import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgIcon } from '../AppIcon/AppIcon';
import { contents, useColor } from '@src/context';
import { SVGIcons } from '@src/assets';
import {
  Palette,
  scaled,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';
import { AnimatedTouchableOpacity, Text } from '@app/blueprints';

interface HeaderProps {
  onSettingsPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsPress }) => {
  const { color } = useColor();
  const styles = headerStyles(color);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLabelContainer}>
        <SvgIcon
          pathFill={color.primaryColor}
          icon={SVGIcons.SYMBOL}
          {...scaled(25)}
        />
        <Text preset="h1"> {contents('common.substanceTitle')}</Text>
      </View>
      <AnimatedTouchableOpacity
        onPress={onSettingsPress}
        containerStyle={styles.settingBtn}>
        <SvgIcon
          pathFill={color.primaryColor}
          icon={SVGIcons.MENU}
          {...scaled(25)}
        />
      </AnimatedTouchableOpacity>
    </View>
  );
};

export const headerStyles = ({ backgroundColor, primaryColor }: Palette) =>
  StyleSheet.create({
    debugIcon: {
      ...scaled(25),
      tintColor: primaryColor,
    },
    headerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: scaleHeight(10),
    },
    headerLabelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    newsImage: {
      borderRadius: scaledSize(5),
      height: scaleHeight(95),
      width: scaleWidth(120),
    },
    newsItemContainer: {
      backgroundColor,
      borderRadius: scaledSize(5),
      flex: 1,
      flexDirection: 'row',
      marginBottom: scaleHeight(5),
      marginTop: scaleHeight(5),
    },
    newsTextView: {
      flex: 1,
      padding: scaledSize(5),
    },
    settingBtn: {
      position: 'absolute',
      left: scaleWidth(20),
    },
  });

export default Header;
