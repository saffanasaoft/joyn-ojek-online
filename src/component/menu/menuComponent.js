import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const MenuComponent = ({
    icon, title, onPress
}) => (
    <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    }}>
        <TouchableOpacity onPress={onPress}>
           <Image 
                source={icon}
                style={{ 
                    width: 50, 
                    height: 50,
                    marginHorizontal: 30
                }}
            /> 
        </TouchableOpacity>
        <Text style={{ paddingVertical: 5, }}>{title}</Text>
    </View>
);






export default MenuComponent;
