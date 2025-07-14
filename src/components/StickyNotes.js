// src/components/StickyNotes.js
import React, { useState, useEffect } from 'react';

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Load from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() === '') return;
    const newNoteObj = {
      id: Date.now(),
      text: newNote,
    };
    setNotes([newNoteObj, ...notes]);
    setNewNote('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-3">🗒 Sticky Notes</h2>
      <div className="flex mb-3">
        <input
          type="text"
          placeholder="Write a new note..."
          className="flex-grow p-2 border rounded-l"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button
          onClick={addNote}
          className="bg-yellow-500 text-white px-4 rounded-r"
        >
          Add
        </button>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {notes.length === 0 && <p>No notes yet.</p>}
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-yellow-200 p-3 rounded flex justify-between items-center"
          >
            <span>{note.text}</span>
            <button
              onClick={() => deleteNote(note.id)}
              className="text-red-600 font-bold ml-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;
