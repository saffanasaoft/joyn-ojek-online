import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import MenuCompHeader from './menCompHeader';
import { HEDAER_MENU } from '../../utils/imagePath';
import { colors } from '../../utils/colors';

class menuHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ 
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.header_menu,
      }}>
        {/* <ScrollView horizontal={true}> */}
          <MenuCompHeader
            icon={HEDAER_MENU.Dana}
            title={'Dana'}
            onPress={()=> alert('Dana')}
          />
          <MenuCompHeader
            icon={HEDAER_MENU.Ovo}
            title={'Ovo'}
            onPress={()=> alert('Ovo')}
          />
          <MenuCompHeader
            icon={HEDAER_MENU.TopUp}
            title={'TopUp'}
            onPress={()=> alert('TopUp')}
          />
          <MenuCompHeader
            icon={HEDAER_MENU.More}
            title={'More'}
            onPress={()=> alert('More')}
          />
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default menuHeader;
