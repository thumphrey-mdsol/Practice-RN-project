import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalItem = props => {
    const [enteredGoal, setEnteredGoal] = useState('')
    
    const goalInputHandler = (enteredText) => {setEnteredGoal(enteredText);};

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
                <Button title="ADD" onPress={() => props.addGoalHandler(enteredGoal)}/>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
        padding: 10,
        marginBottom: 10,
       },
       input: {
        borderColor: "grey", 
        borderWidth: 1, 
        width: '80%' 
       },
});

export default GoalItem