import { db } from "../firebase/firabase-config";


export const loadNotes = async (uid) => {

    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];
    
    notesSnap.forEach(snap => {
        notes.push({
            id: snap.id,
            ...snap.data()
        });
    });
    
    return notes;
}