import { Alert, Pressable, TextInput, View } from "react-native";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { clear, push } from "@slices/messageSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export default function TextBar() {
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    return (
        <View className="w-full mb-3">
            <View className="bg-valor border-2 border-truce p-1 rounded-lg flex flex-row items-center justify-between">
                <Pressable className="p-2" onPress={() => wipe(dispatch, setContent)}>
                    <FontAwesomeIcon icon={faTrashCan} color="#fff" secondaryColor="#fff" size={16}></FontAwesomeIcon>
                </Pressable>
                <TextInput
                    className="px-2 rounded-xl w-64 max-h-64 flex-grow-1"
                    style={{ fontFamily: 'Inter-Light' }}
                    multiline={true} placeholder="You are a rubber duck."
                    defaultValue={content}
                    onChangeText={(text) => setContent(text)}
                ></TextInput>
                <Pressable className="p-2" onPress={() => {
                    dispatch(push(content))
                    setContent('')
                }}>
                    <FontAwesomeIcon icon={faReply} color="#fff" secondaryColor="#fff" size={16}></FontAwesomeIcon>
                </Pressable>
            </View>
        </View>
    )
}

function wipe(dispatch: Dispatch<AnyAction>, setContent: React.Dispatch<React.SetStateAction<string>>) {
    Alert.alert(
        'Are you sure you want to clear current messages?', 
        'Clearing your messages will wipe the data from your disk, we recommend keeping a backup by exporting your messages.',
        [
            { text: 'Clear Messages', style: 'destructive', onPress: () => { dispatch(clear()); setContent(''); }},
            { text: 'Cancel', style: 'cancel'}
        ]
    )
}