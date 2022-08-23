import { View, Text, Platform, StyleSheet } from "react-native";
import React, { Component } from 'react';
import Markdown from "react-native-markdown-display";
import { SafeAreaView } from "react-native-safe-area-context";

class Message extends Component<{ content: string }> {
    render() {
        // @ts-ignore
        return (
            <View className="p-4 bg-lucent mt-3 rounded-lg border-2 border-truce">
                <Text className="text-xl text-titler" style={{ fontFamily: 'Inter-Bold' }}>Yourself</Text>
                <SafeAreaView>
                    <Markdown style={markdownStyle}>{this.props.content}</Markdown>
                </SafeAreaView>
            </View>
        )
    }

    shouldComponentUpdate() {
        return false
    }
}

export default Message;

const markdownStyle: StyleSheet.NamedStyles<any> = {
    // The main container
    body: {},

    // Headings
    heading1: {
        flexDirection: 'row',
        fontFamily: 'Inter-Bold',
        fontSize: 32,
    },
    heading2: {
        flexDirection: 'row',
        fontFamily: 'Inter-Bold',
        fontSize: 24,
    },
    heading3: {
        flexDirection: 'row',
        fontFamily: 'Inter-Bold',
        fontSize: 18,
    },
    heading4: {
        flexDirection: 'row',
        fontFamily: 'Inter-Bold',
        fontSize: 16,
    },
    heading5: {
        flexDirection: 'row',
        fontFamily: 'Inter-Bold',
        fontSize: 13,
    },
    heading6: {
        flexDirection: 'row',
        fontFamily: 'Inter-Bold',
        fontSize: 11,
    },

    // Horizontal Rule
    hr: {
        backgroundColor: '#000000',
        height: 1,
    },

    // Emphasis
    strong: {
        fontWeight: 'bold',
    },
    em: {
        fontStyle: 'italic',
    },
    s: {
        textDecorationLine: 'line-through',
    },

    // Blockquotes
    blockquote: {
        backgroundColor: '#F5F5F5',
        borderColor: '#CCC',
        borderLeftWidth: 4,
        marginLeft: 5,
        paddingHorizontal: 5,
    },

    // Lists
    bullet_list: {},
    ordered_list: {},
    list_item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_icon: {
        marginLeft: 10,
        marginRight: 10,
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_content: {
        flex: 1,
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_icon: {
        marginLeft: 10,
        marginRight: 10,
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_content: {
        flex: 1,
    },

    // Code
    code_inline: {
        backgroundColor: '#171717',
        color: '#fff',
        borderRadius: 4,
        ...Platform.select({
            ['ios']: {
                fontFamily: 'Courier',
            },
            ['android']: {
                fontFamily: 'monospace',
            },
        }),
    },
    code_block: {
        backgroundColor: '#171717',
        padding: 10,
        marginTop: 10,
        color: '#fff',
        borderRadius: 4,
        ...Platform.select({
            ['ios']: {
                fontFamily: 'Courier',
            },
            ['android']: {
                fontFamily: 'monospace',
            },
        }),
    },
    fence: {
        borderColor: '#171717',
        backgroundColor: '#171717',
        padding: 10,
        color: '#fff',
        marginTop: 10,
        borderRadius: 4,
        ...Platform.select({
            ['ios']: {
                fontFamily: 'Courier',
            },
            ['android']: {
                fontFamily: 'monospace',
            },
        }),
    },

    // Tables
    table: {
        borderWidth: 0,
        borderColor: '#000000',
        borderRadius: 3,
    },
    thead: {},
    tbody: {},
    th: {
        flex: 1,
        padding: 5,
        fontFamily: 'Inter-Bold'
    },
    tr: {
        borderBottomWidth: 0,
        borderColor: '#000000',
        flexDirection: 'row',
    },
    td: {
        flex: 1,
        padding: 5,
    },

    // Links
    link: {
        textDecorationLine: 'none',
        color: '#60A5FA'
    },
    blocklink: {
        flex: 1,
        borderColor: '#000000',
        borderBottomWidth: 1,
    },

    // Images
    image: {
        flex: 1,
    },

    // Text Output
    text: {
    },
    textgroup: {},
    paragraph: {
        fontFamily: 'Inter-Light',
        marginTop: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
    },
    hardbreak: {
        width: '100%',
        height: 1,
    },
    softbreak: {},

    // Believe these are never used but retained for completeness
    pre: {},
    inline: {},
    span: {},
}