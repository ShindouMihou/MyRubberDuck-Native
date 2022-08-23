import { Alert, AlertButton, Pressable, Text, TextInput, View } from "react-native";
import React, { Dispatch, useState } from 'react';
import { useDispatch } from "react-redux";
import { pushMany, setAndSave, WELCOME_MESSAGE } from "@slices/messageSlice";
import { Base64 } from "js-base64";
import { AnyAction } from "@reduxjs/toolkit";


export default function ImportMessages({ navigation }) {
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    return (
        (
            <View className="p-4 my-auto">
                <Text className="text-2xl" style={{ fontFamily: 'Inter-Bold' }}>
                    My Rubber Duck <Text className="text-4xl">🦆</Text>
                </Text>
                <Text className="text-base my-2" style={{ fontFamily: 'Inter-Light' }}>
                    you can paste the base64-encoded json array of messages here to import them to this device.
                </Text>
                <View className="bg-valor border-2 border-truce p-1 rounded my-3 flex flex-row items-center justify-between">
                    <TextInput
                        className="px-2 w-64 max-h-64 flex-grow-1"
                        style={{ fontFamily: 'Inter-Light' }}
                        multiline={true} 
                        placeholder="Quack quack quack."
                        defaultValue={content}
                        onChangeText={(text) => setContent(text)}
                    ></TextInput>
                </View>
                <Pressable className="my-2 p-3 bg-oceania active:opacity-80" onPress={() => addNewMessages(dispatch, content, navigation)}>
                    <Text className="text-lg" style={{ fontFamily: 'Inter-Bold' }}>add to current messages</Text>
                </Pressable>
                <Pressable className="my-2 p-3 bg-[#EF4444] active:opacity-80" onPress={() => override(dispatch, content, navigation)}>
                    <Text className="text-lg" style={{ fontFamily: 'Inter-Bold' }}>override current messages</Text>
                </Pressable>
            </View>
        )
    )
}

/**
 * Creates the standard open chatbox alert buttons that you can find.
 * 
 * @param navigation the navigation to use to navigate between screens.
 * @returns A standard open chat box alert buttons.
 */
const openChatBoxAlertButtons = (navigation: any) : AlertButton[] => [
    {text: "Yes", onPress: () => moveToChatBox(navigation)},
    {text: "No", style: "cancel"}
]

/**
 * Attempts to adds the import data with the current messages.
 * 
 * @param dispatch The redux dispatcher to dispatch redux actions.
 * @param content The import data to import.
 * @param navigation The navigation to use to navigate to chat box when needed.
 */
function addNewMessages(dispatch: Dispatch<AnyAction>, content: string, navigation: any) {
    const converted = convert(content)

    if (converted !== null) {
        Alert.alert(`Are you sure you want to add ${converted.length} messages?`, 'Are you sure you want to add all these messages,'
         + ' we recommend creating a backup of your current messages before adding them to keep a snapshot of your current messages if you need them.', [
            {text: "Yes", onPress: () => {
                console.log('Importing with push new messages...')
                dispatch(pushMany(converted))

                console.log('Imported with push successfully!')
                Alert.alert(
                    'Import complete', 
                    'Your messages have been imported successfully, do you want to open the chatbox?', 
                    openChatBoxAlertButtons(navigation)
                )
            }},
            {text: "No", style: "cancel"}
        ])
    }
}

/**
 * Attempts to override the current messages with the import data given, this will prepend the 
 * welcome message to make sure it matches how it is supposed to look.
 * 
 * @param dispatch The redux dispatcher to dispatch redux actions.
 * @param content The import data to import.
 * @param navigation The navigation to use to navigate to chat box when needed.
 */
function override(dispatch: Dispatch<AnyAction>, content: string, navigation: any) {
    const converted = convert(content)

    if (converted !== null) {
        Alert.alert('Are you sure you want to override?', 'Do you really want to override your current messages,'
         + ' we recommend creating a backup of your current messages before overriding if you need it.', [
            {text: "Yes", onPress: () => {
                console.log('Importing with override new messages...')
                dispatch(setAndSave([WELCOME_MESSAGE, ...converted]))

                console.log('Imported with override successfully!')
                Alert.alert(
                    'Import complete', 
                    'Your messages have been imported successfully, do you want to open the chatbox?', 
                    openChatBoxAlertButtons(navigation)
                )
            }},
            {text: "No", style: "cancel"}
        ])
    }
}

/**
 * Navigates to the chat box while reseting the route history to that of homepage and 
 * the chatbox.
 * 
 * @param navigation the navigation to use to navigate between screens.
 */
function moveToChatBox(navigation: any) {
    navigation.reset({
        index: 1,
        routes: [{ name: 'Homepage' }, { name: 'Chatbox' }]
    })
}

/**
 * Attempts to convert the given import data which should be base64 and json into an array of messages.
 * 
 * @param contents the contents to convert from base64 and json.
 * @returns An array of messages from the converted import data.
 */
function convert(contents: string): string[] | null {
    try {
        const decoded = Base64.decode(contents)
        return JSON.parse(decoded)
    } catch (exception) {
        Alert.alert('Invalid import data', 'The import data provided cannot be converted to its proper format, are you sure that it is correct?')
        return null
    }
}