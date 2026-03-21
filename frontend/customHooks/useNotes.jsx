import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useNotes = () => {


    const [notes, setNotes] = useState([])


    const fetchNotes = async () => {
        try {
            const res = await axios.get('http://localhost:8000/notes')
            const notesData = res.data

            setNotes(notesData)
        } catch (error) {
            alert(error)
        }


    }



    const deleteNotes = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/notes/delete/${id}`)
            setNotes(prevNotes => prevNotes.filter((note) => note._id !== id))
        } catch (error) {
            alert(error)
        }


    }

    useEffect(() => {

        fetchNotes()
    }, [])
    return {
        notes,
        deleteNotes,

    }
}

export default useNotes
