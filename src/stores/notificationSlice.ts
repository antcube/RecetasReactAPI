import { StateCreator } from "zustand";

type Notification = {
    text: string
    error: boolean
}

export type NotificationSliceType = {
    notification: Notification
    timeoutId: number | undefined
    isVisible: boolean
    showNotification: (payload: Notification) => void
    hiddenNotification: () => void
    setIsVisible: (isVisible: boolean) => void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & NotificationSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false
    },
    timeoutId: undefined,
    isVisible: false,
    showNotification: (payload) => {
        if(get().timeoutId) {
            clearTimeout(get().timeoutId);
        }

        set({
            notification: {
                text: payload.text,
                error: payload.error,
            },
            isVisible: true
        })

        const timeoutId = setTimeout(() => {
            set({ isVisible: false })
            setTimeout(() => {
                get().hiddenNotification()
            }, 300); // Duración de la transición
        }, 3000);
        set({ timeoutId })
    },
    hiddenNotification: () => {
        if(get().timeoutId) {
            clearTimeout(get().timeoutId);
        }
        set({
            notification: {
                text: '',
                error: false
            },
            timeoutId: undefined
        })
    },
    setIsVisible: (isVisible) => {
        set({ isVisible })
    }
})