import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { storage } from "@storage";

export const WELCOME_MESSAGE = [
    "Hello,",
    "",
    "",
    "[My Rubber Duck 🦆](https://github.com/ShindouMihou/MyRubberDuck) is a platform where one can privately chat with themselves without any external servers receiving your messages.",
    "The platform was created to help software engineers stop making their friends into rubber ducks and make themselves into rubber ducks.",
    "", 
    "",
    "Clear your message by simply pressing the 🗑️ icon.",
    "Send your message by simply pressing the ↩️ button or ENTER key.",
    "",
    "[My Rubber Duck 🦆](https://github.com/ShindouMihou/MyRubberDuck) has markdown enabled on the message boxes.",
    "",
    "",
    "I hope you solve whatever production issue that you have.",
    "",
    "From,",
    "Your impostor!",
].join('\n')

export const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        contents: [] as string[]
    },
    reducers: {
        push: (state, action: PayloadAction<string>) => {
            state.contents = [...state.contents, action.payload]
            storage.set('messages', JSON.stringify(state.contents))
        },
        pushMany: (state, action: PayloadAction<string[]>) => {
            state.contents = [...state.contents, ...action.payload]
            storage.set('messages', JSON.stringify(state.contents))
        },
        clear: (state) => {
            state.contents = [WELCOME_MESSAGE]
            storage.set('messages', JSON.stringify(state.contents))
        },
        set: (state, action: PayloadAction<string[]>) => {
            state.contents = action.payload
        },
        setAndSave: (state, action: PayloadAction<string[]>) => {
            state.contents = action.payload
            storage.set('messages', JSON.stringify(state.contents))
        }
    }
})

export const { push, clear, set, pushMany, setAndSave } = messageSlice.actions
export default messageSlice.reducer