// @ts-nocheck
import { initializeApp, getApps } from 'firebase/app'

export function initFirebase() {
    if (typeof getApps === 'function' && getApps().length) return
    // Read from Vite env variables. Add these to a .env file as VITE_FIREBASE_*
    const config = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? 'REPLACE_ME',
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? 'REPLACE_ME',
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? 'task-management-app',
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? 'REPLACE_ME',
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? 'REPLACE_ME',
        appId: import.meta.env.VITE_FIREBASE_APP_ID ?? 'REPLACE_ME'
    }
    initializeApp(config)
}

