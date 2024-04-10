import { MessageType } from '@/types'
import { create } from 'zustand'

interface useMessagesState {
    messages: MessageType[]
    setMessages: (messages: MessageType[]) => void
}

export const useMessagesStore = create<useMessagesState>()((set) => ({
    messages: [],
    setMessages: (messages:MessageType[]) => set({messages}),
}))