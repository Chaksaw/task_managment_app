// Global typings to satisfy the TS compiler in this scaffold.
// Provides ImportMeta.env keys used by Vite and a simple JSX intrinsic element map
interface ImportMetaEnv {
    readonly VITE_FIREBASE_API_KEY?: string
    readonly VITE_FIREBASE_AUTH_DOMAIN?: string
    readonly VITE_FIREBASE_PROJECT_ID?: string
    readonly VITE_FIREBASE_STORAGE_BUCKET?: string
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID?: string
    readonly VITE_FIREBASE_APP_ID?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare namespace JSX {
    // allow any intrinsic elements (keeps the scaffold tolerant when types for React are missing)
    interface IntrinsicElements {
        [elemName: string]: any
    }
}

// Declare common external modules as any to avoid editor/TS errors in the scaffold.
declare module 'react' { const x: any; export = x }
declare module 'react-dom/client' { const x: any; export = x }
declare module 'react-beautiful-dnd' { const x: any; export = x }
declare module 'firebase/app' {
    export function initializeApp(config?: any): any
    export function getApps(): any[]
    export function getApp(name?: string): any
}
declare module 'firebase/firestore' {
    export function getFirestore(app?: any): any
    export function doc(db: any, ...path: any[]): any
    export function onSnapshot(docRef: any, ...args: any[]): any
    export function setDoc(docRef: any, data: any, opts?: any): Promise<any>
}
declare module 'react/jsx-runtime' {
    export function jsx(type: any, props: any, key?: any): any
    export function jsxs(type: any, props: any, key?: any): any
    export function jsxDEV(type: any, props: any, key?: any): any
}
declare module 'vite' { export function defineConfig(cfg: any): any }
declare module '@vitejs/plugin-react' { const plugin: any; export default plugin }

