import {View, Button, TextInput, StyleSheet, Modal, Image} from 'react-native'
import {useState} from 'react'

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible } animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.Image} source={require('../assets/images/goal.png')}/>
                <TextInput 
                    placeholder='course goal'
                    style={styles.TextInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    
                    <View style={styles.button}>
                        <Button 
                            title='cancel'
                            onPress={props.onCancel}
                            color='#f31282'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='add goal'
                            onPress={props.onAddGoal}
                            color='#5e0acc'
                        />  
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: '#311b6b'
      },
      TextInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        color: '#120438',
        borderRadius: 6,
        //marginRight: 8,
        padding: 16,
        
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
      Image: {
        width: 100,
        height: 100,
        margin: 20
      }
})