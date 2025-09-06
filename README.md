# Task Management App

A starter frontend for a collaborative task management app (React + TypeScript + Firebase + Tailwind).

Features included in this scaffold:
- Vite + React + TypeScript project
- Tailwind CSS ready
- Minimal Kanban board with drag-and-drop via `@hello-pangea/dnd`
- Firestore realtime listener and optimistic updates (placeholder Firebase config)

Getting started

1. Install dependencies

```powershell
cd c:\Users\sawaa\task_management_app
npm install
```

2. Add Firebase env vars in a `.env` file at project root (example):

```text
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

3. Run the dev server

```powershell
npm run dev
```

Notes and next steps
- Replace Firebase env values, enable Firestore, and secure rules before collaborating.
- Add authentication (Firebase Auth) for team features.
- Improve board persistence and conflict handling for concurrent edits.

Project metadata:
- title: "Task Management App"
- description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features."
- image: "📋"
- category: "frontend"
- technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"]
# task_managment_app
