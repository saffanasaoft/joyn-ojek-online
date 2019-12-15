import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import MenuComponent from './menuComponent';
import { MENU } from '../../utils/imagePath';
import { colors } from '../../utils/colors';

class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ 
          marginHorizontal: 10,
          paddingVertical: 15,
      }}>
        <ScrollView horizontal={true} style={{ paddingVertical: 20 }}>
            <View style={{ marginBottom: 10}}>
                <MenuComponent 
                    icon={MENU.Car}
                    title={'Car'}
                    onPress={()=> alert('Car')}
                />
                <MenuComponent 
                    icon={MENU.Send}
                    title={'Send'}
                    onPress={()=> alert('Send')}
                />
            </View>
            <View>
                <MenuComponent 
                    icon={MENU.Ride}
                    title={'Ride'}
                    onPress={()=> alert('Ride')}
                />
                <MenuComponent 
                    icon={MENU.Food}
                    title={'Food'}
                    onPress={()=> alert('Food')}
                />
            </View>
            <View>
                <MenuComponent 
                    icon={MENU.Box}
                    title={'Box'}
                    onPress={()=> alert('Box')}
                />
                <MenuComponent 
                    icon={MENU.Shop}
                    title={'Shop'}
                    onPress={()=> alert('Shop')}
                />
            </View>
            <View>
                <MenuComponent 
                    icon={MENU.Mall}
                    title={'Mall'}
                    onPress={()=> alert('Mall')}
                />
                <MenuComponent 
                    icon={MENU.Messages}
                    title={'Messages'}
                    onPress={()=> alert('Messages')}
                />
            </View>
            <View>
                <MenuComponent 
                    icon={MENU.Doctor}
                    title={'Doctor'}
                    onPress={()=> alert('Doctor')}
                />
                <MenuComponent 
                    icon={MENU.Clean}
                    title={'Clean'}
                    onPress={()=> alert('Clean')}
                />
            </View>
            <View>
                <MenuComponent 
                    icon={MENU.Apotik}
                    title={'Apotik'}
                    onPress={()=> alert('Apotik')}
                />
                <MenuComponent 
                    icon={MENU.Ticket}
                    title={'Ticket'}
                    onPress={()=> alert('Ticket')}
                />
            </View>
        </ScrollView>
      </View>
    );
  }
}

export default MenuItems;
