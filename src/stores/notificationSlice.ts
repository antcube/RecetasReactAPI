import { StateCreator } from "zustand";

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    timeoutId: number | undefined
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    hiddenNotification: () => void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & NotificationSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    timeoutId: undefined,
    showNotification: (payload) => {
        if(get().timeoutId) {
            clearTimeout(get().timeoutId);
        }

        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })

        const timeoutId = setTimeout(() => {
            get().hiddenNotification()
        }, 3000);
        set({ timeoutId })
    },
    hiddenNotification: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            }
        })
    }
})