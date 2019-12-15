import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {TypeOne,TypeTwo} from "react-native-animated-bottom-tabbar";

import Toolbar from '../../component/common/toolBar';
import TabBarBottom from '../../component/TabBar';
import Menus from '../../component/menu';
import MenuHeader from '../../component/menu/menuHeader';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar titleName={'Saldo Rp 20.000.000'}/>
        <MenuHeader/>
        <Menus />
        <TabBarBottom />
      </View>
    );
  }
}

export default index;
