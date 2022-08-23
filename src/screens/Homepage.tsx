import { clear, set, WELCOME_MESSAGE } from '@slices/messageSlice';
import { storage } from '@storage';
import { RootState, store } from '@store';
import React, { useEffect } from 'react';
import { Alert, Linking, Pressable, Share, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { Base64 } from 'js-base64';

// @ts-ignore
export default function Homepage({ navigation }) {

    const dispatch = useDispatch()

    useEffect(() => {
        const storedMessages = storage.getString('messages')
        if (storedMessages === undefined) {
            console.log('No stored messages was found, creating initial state.')
            dispatch(clear())
        } else {
            dispatch(set(JSON.parse(storedMessages)))
        }
    }, [])

    return (
        <View className="p-4 my-auto">
            <Pressable onPress={viewSourceCode}>
                <Text className="text-2xl" style={{ fontFamily: 'Inter-Bold' }}>
                    My Rubber Duck 🦆
                </Text>
                <Text className="text-xs mb-2" style={{ fontFamily: 'Inter-Light' }}>
                    made with 💝 by shindou mihou
                </Text>
            </Pressable>
            <Text className="text-base my-2" style={{ fontFamily: 'Inter-Light' }}>
                is an open-source platform where one can privately chat with themselves without any external servers receiving any messages.
            </Text>
            <Text className="text-base my-2" style={{ fontFamily: 'Inter-Light' }}>
                the platform was created to reduce the amount of rubber duck victims created by software engineers by making themselves into rubber ducks instead.
            </Text>
            <Pressable className="my-2 p-3 bg-oceania active:opacity-80" onPress={() => navigation.navigate('Chatbox')}>
                <Text className="text-lg" style={{ fontFamily: 'Inter-Bold' }}>become a rubber duck now</Text>
            </Pressable>
            <Pressable className="my-2 p-3 bg-lucent active:opacity-80" onPress={() => navigation.navigate('Import Messages')}>
                <Text className="text-lg" style={{ fontFamily: 'Inter-Bold' }}>import messages</Text>
            </Pressable>
            <Pressable className="my-2 p-3 bg-ube active:opacity-80" onPress={() => exportMessages()}>
                <Text className="text-lg" style={{ fontFamily: 'Inter-Bold' }}>export messages</Text>
            </Pressable>
            <Pressable className="my-2 p-3 bg-mangoe active:opacity-80" onPress={viewSourceCode}>
                <Text className="text-lg" style={{ fontFamily: 'Inter-Bold' }}>view source code</Text>
            </Pressable>
        </View>
    )
}

/**
 * Opens the source code link of the native application.
 */
function viewSourceCode() {
    Linking.openURL('https://github.com/ShindouMihou/MyRubberDuck-Native')
}

/**
 * Attempts to export all the messages of the user except the welcome message which will only be added 
 * during override.
 * 
 * @returns All the messages except the welcome message.
 */
function exportMessages() {
    const messages = store.getState().messages.contents
    const withoutWelcomeMessage = messages.filter(content => content !== WELCOME_MESSAGE)

    if (withoutWelcomeMessage.length === 0) {
        Alert.alert('No messages exportable.', 'There are no messages other than the welcome message that can be imorted.')
        return
    }

    Share.share({
        message: Base64.encode(JSON.stringify(withoutWelcomeMessage)),
        url: 'https://github.com/ShindouMihou/MyRubberDuck-Native'
    })
}