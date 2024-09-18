import { StyleSheet } from 'react-native';

import {
  Palette,
  scaled,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const newsListStyles = ({
  backgroundColor,
  borderColor,
  secondaryColor,
}: Palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: scaleWidth(20),
    },
    contentContainer: {
      paddingBottom: 40,
    },
    header: {
      fontWeight: 'bold',
      marginBottom: scaleHeight(10),
    },
    orderNumber: {
      fontSize: scaledSize(24),
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: scaleHeight(25),
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      flexDirection: 'row',
      backgroundColor: backgroundColor,
      padding: scaleWidth(15),
      borderRadius: scaledSize(8),
      alignItems: 'center',
      flex: 1,
      marginRight: scaleWidth(10),
      borderColor: borderColor,
      borderWidth: 1.5,
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: scaledSize(15),
      marginLeft: scaleWidth(10),
    },
  });
