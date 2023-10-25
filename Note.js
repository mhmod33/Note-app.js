class Note {
    constructor(id, title, content) {
        
        this.id = id;
        this.title = title;
        this.content = content;
    }


}

class NoteManager {
    constructor() {
        this.Notes = [];
    }

    add(title, content) {
        const id = this.Notes.length + 1;
        const note = new Note(id, title, content);
        this.Notes.push(note);
    }

    delete(title, content) {
        this.note.filter(n=>n.id !== id);
    }

    allNotes() {
        return this.Notes;
    }
}



const addNoteForm = document.getElementById('addNoteForm');
const NoteTitle = document.getElementById('noteTitle');
const NoteContent = document.getElementById('noteContent');
const NoteList = document.getElementById('noteList');

function UpdateNoteList() {
    NoteList.innerHTML = '';
    noteManager.allNotes().forEach(note => {
        const ListItem = document.createElement('li');
        ListItem.textContent = `Title: ${note.title} and Content: ${note.content}`;
        NoteList.appendChild(ListItem);

        ListItem.style.padding = '20px';
        ListItem.style.fontSize = '1.5rem';
        ListItem.style.fontFamily = 'Gill Sans';
    });
}

const noteManager = new NoteManager();

addNoteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = NoteTitle.value;
    const contentValue = NoteContent.value;

    NoteTitle.value = '';
    noteManager.add(title, contentValue);

    UpdateNoteList();
});
