// @ts-nocheck
import * as React from 'react'
import * as dnd from 'react-beautiful-dnd'
import * as firestore from 'firebase/firestore'
import * as fb from '../firebase'

fb.initFirebase()
const db = (firestore as any).getFirestore ? (firestore as any).getFirestore() : undefined

type Task = { id: string; title: string; assignedTo?: string }

type Column = { id: string; title: string; tasks: Task[] }

const defaultBoard: Column[] = [
    { id: 'todo', title: 'To do', tasks: [{ id: 't1', title: 'Welcome - drag me' }] },
    { id: 'inprogress', title: 'In progress', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] }
]

export default function Board() {
    const [columns, setColumns] = React.useState(defaultBoard as Column[])

    React.useEffect(() => {
        // listen to a single document 'boards/default' for realtime updates
        if (!db) return
        const docRef = (firestore as any).doc(db, 'boards', 'default')
        const unsub = (firestore as any).onSnapshot(docRef, (snap: any) => {
            if (snap && snap.exists && snap.exists()) {
                const data = snap.data()
                if (data && Array.isArray((data as any).columns)) setColumns((data as any).columns)
            }
        }, (err: unknown) => {
            console.warn('Realtime listener error', err)
        })

            // initialize if missing
            ; (firestore as any).setDoc(docRef, { columns: defaultBoard }, { merge: true }).catch(() => { })

        return () => unsub && unsub()
    }, [])

    const onDragEnd = async (result: any) => {
        if (!result.destination) return
        const { source, destination } = result
        if (source.droppableId === destination.droppableId && source.index === destination.index) return

        const next = JSON.parse(JSON.stringify(columns)) as Column[]
        const srcCol = next.find((c) => c.id === source.droppableId)!
        const dstCol = next.find((c) => c.id === destination.droppableId)!
        const [moved] = srcCol.tasks.splice(source.index, 1)
        dstCol.tasks.splice(destination.index, 0, moved)

        setColumns(next)

        // write back to Firestore (optimistic update)
        try {
            const docRef = (firestore as any).doc(db, 'boards', 'default')
            await (firestore as any).setDoc(docRef, { columns: next }, { merge: true })
        } catch (e) {
            console.error('Failed to persist board', e)
        }
    }

    const DndContext = (dnd as any).DragDropContext
    const Droppable = (dnd as any).Droppable
    const Draggable = (dnd as any).Draggable

    return (
        <DndContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {columns.map((col: Column) => (
                    <div key={col.id} className="bg-white rounded shadow p-4">
                        <h2 className="font-semibold mb-3">{col.title}</h2>
                        <Droppable droppableId={col.id}>
                            {(provided: any) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="min-h-[80px]">
                                    {col.tasks.map((task: Task, i: number) => (
                                        <Draggable key={String(task.id)} draggableId={String(task.id)} index={i}>
                                            {(p: any) => (
                                                <div
                                                    ref={p.innerRef}
                                                    {...p.draggableProps}
                                                    {...p.dragHandleProps}
                                                    className="p-3 mb-2 bg-gray-100 rounded"
                                                >
                                                    {task.title}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DndContext>
    )
}
