import { create } from 'zustand'

interface useMessagesState {
    messages: any[]
    setMessages: (messages: any) => void
}

export const useBearStore = create<useMessagesState>()((set) => ({
    messages: [],
    setMessages: (messages) => set({messages}),
}))