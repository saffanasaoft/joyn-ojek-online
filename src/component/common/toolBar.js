import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';

import { colors } from '../../utils/colors';
import { EXTRAS } from '../../utils/imagePath';

class toolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {
          titleName
      } = this.props;
    return (
      <View style={{ 
          backgroundColor: colors.toolbar_color, 
          justifyContent: 'space-between', 
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
        <Text 
            style={{
                fontWeight: 'bold',
                fontSize: 16,
                color : colors.white_color,
                marginTop : 15
            }}
        > {titleName} </Text>
        <TouchableOpacity>
             <Image  source={EXTRAS.Option} style={{ width: 25, height: 25, marginTop:15 }}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default toolBar;
