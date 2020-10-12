import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({ inputValue, inputChange }) => (
    <View style={styles.inputContatiner}>
        <TextInput
            value={inputValue}
            style={styles.input}
            placeholder='What needs to be done?'
            placeholderTextColor='#CACACA'
            selectionColor='#666666' 
            onChangeText={inputChange} />
    </View>
)
const styles = StyleSheet.create({
    inputContatiner: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, hegith: 2}
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
})
export default Input