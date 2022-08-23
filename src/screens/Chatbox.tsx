import { FlatList, ScrollView, Text, View } from "react-native";
import React from 'react';
import TextBar from "@components/TextBar";
import Message from "@components/Message";
import { useSelector } from "react-redux";
import { RootState } from "@store";

export function Chatbox() {
    const messages = useSelector((state: RootState) => state.messages.contents)

    return (
        <View className="p-4 flex-1">
            <TextBar></TextBar>
            <FlatList
                data={messages}
                renderItem={(entry) => <Message content={entry.item}></Message>}
                contentInsetAdjustmentBehavior="automatic"
                removeClippedSubviews={true}
                style={{ height: '100%'}}
            ></FlatList>
        </View>
    )
}