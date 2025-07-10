import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useState } from "react"

const useNoteStore = create(
    persist(
        (set, get) => ({
            notes: [],
            categories: ['General', 'Work', 'Personal'],
            currentCategory: 'General',

            addNote: (title, content, category) => {
                const newNote = {
                    id: Date.now().toString(),
                    title,
                    content,
                    category,
                    createdAt: new Date().toISOString()
                }
                set(state => ({
                    notes: [...state.notes, newNote]
                }))
            },

            updateNote: (id, updates) => {
                set(state => ({
                    notes: state.notes.map(note => 
                        note.id === id ? { ...note, ...updates } : note
                    )
                }))
            },

            deleteNote: (id) => {
                set(state => ({
                    notes: state.notes.filter(note => note.id !== id)
                }))
            },

            addCategory: (category) => {
                set(state => ({
                    categories: [...state.categories, category]
                }))
            },

            setCurrentCategory: (category) => {
                set({ currentCategory: category })
            },

            getFilteredNotes: () => {
                const { notes, currentCategory } = get()
                return notes.filter(note => note.category === currentCategory)
            }
        }),
        {
            name: 'note-storage'
        }
    )
)

function NoteTaking() {
    const { 
        notes, 
        categories, 
        currentCategory, 
        addNote, 
        updateNote, 
        deleteNote, 
        addCategory, 
        setCurrentCategory, 
        getFilteredNotes 
    } = useNoteStore()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [editingNote, setEditingNote] = useState(null)

    const filteredNotes = getFilteredNotes()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim() || !content.trim()) return

        if (editingNote) {
            updateNote(editingNote.id, { title, content, category: currentCategory })
            setEditingNote(null)
        } else {
            addNote(title, content, currentCategory)
        }
        
        setTitle('')
        setContent('')
    }

    const handleEdit = (note) => {
        setEditingNote(note)
        setTitle(note.title)
        setContent(note.content)
        setCurrentCategory(note.category)
    }

    const handleAddCategory = (e) => {
        e.preventDefault()
        if (!newCategory.trim() || categories.includes(newCategory)) return
        
        addCategory(newCategory)
        setNewCategory('')
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Note Taking App</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                {editingNote ? 'Edit Note' : 'Add New Note'}
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Note title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                                
                                <textarea
                                    placeholder="Note content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                    required
                                />
                                
                                <select
                                    value={currentCategory}
                                    onChange={(e) => setCurrentCategory(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        {editingNote ? 'Update Note' : 'Add Note'}
                                    </button>
                                    
                                    {editingNote && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditingNote(null)
                                                setTitle('')
                                                setContent('')
                                            }}
                                            className="px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                            
                            <div className="mt-6 pt-6 border-t">
                                <h3 className="font-semibold mb-2">Add Category</h3>
                                <form onSubmit={handleAddCategory} className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="New category"
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                    >
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                            <h3 className="font-semibold mb-3">Filter by Category</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setCurrentCategory(cat)}
                                        className={`px-4 py-2 rounded-lg transition ${
                                            currentCategory === cat
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                    >
                                        {cat} ({notes.filter(n => n.category === cat).length})
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">
                                {currentCategory} Notes ({filteredNotes.length})
                            </h2>
                            
                            {filteredNotes.length === 0 ? (
                                <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
                                    No notes in {currentCategory} category
                                </div>
                            ) : (
                                <div className="grid gap-4">
                                    {filteredNotes.map(note => (
                                        <div key={note.id} className="bg-white rounded-lg shadow-md p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {note.title}
                                                </h3>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(note)}
                                                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-sm"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => deleteNote(note.id)}
                                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-600 mb-3">{note.content}</p>
                                            
                                            <div className="flex justify-between items-center text-sm text-gray-500">
                                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                    {note.category}
                                                </span>
                                                <span>
                                                    {new Date(note.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteTaking