import React from 'react'
import { View, Text } from 'react-native'
export default function OneContact(props) {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.phone}</Text>
        </View>
    )
}
