import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {TypeOne,TypeTwo} from "react-native-animated-bottom-tabbar";

import {colors} from '../../utils/colors';
import { FOOTER } from '../../utils/imagePath';

const icons = [
  <Image 
    source={FOOTER.Home}
    style={{ width: 32, height: 32 }}
  />,

  <Image 
    source={FOOTER.Order}
    style={{ width: 32, height: 32 }}
  />,

  <Image 
    source={FOOTER.Chat}
    style={{ width: 32, height: 32 }}
  />,

  <Image 
    source={FOOTER.Inbox}
    style={{ width: 32, height: 32 }}
  />,

  <Image 
    source={FOOTER.Profile}
    style={{ width: 32, height: 32 }}
  />,
]

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{ position: 'absolute', bottom: 0 }}>
                <TypeTwo 
                    icons={icons} 
                    selectedColor={'#FF8F00'} 
                    backgroundColor={colors.bottom_bar} 
                    onSelect={(index)=>console.log(index)} 
                />
            </View>
            
        )
    }
}