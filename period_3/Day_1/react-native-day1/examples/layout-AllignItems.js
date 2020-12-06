import React from 'react';
import { View } from 'react-native';

const AlignItemsBasics = () => {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{height: 100, backgroundColor: 'green'}} />
        <View style={{height: 100, backgroundColor: 'yellow'}} />
      </View>
    );
};

export default AlignItemsBasics;