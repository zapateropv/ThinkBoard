import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Notes from '../components/Notes'

const Home = () => {

  const navigate = useNavigate()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:8000/notes')
        const notesData = res.data

        setNotes(notesData)
      } catch (error) {
        alert(error)
      }


    }

    fetchNotes()
  }, [])

  const updateData = (title, description, id) => {
    console.log(id)
    navigate(`/notes/update/${id}`, {
      state: {
        title: title,
        description: description,
        id: id,
        toggle: true
      }
    })
  }

  const deleteNotes = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/notes/delete/${id}`)
      setNotes(prevNotes => prevNotes.filter((note) => note._id !== id))
    } catch (error) {
      alert(error)
    }



  }



  return (
    <div className='bg-black h-screen' >
      <Navbar />
      <div className="flex flex-wrap gap-4 items-start justify-start p-10">
        {notes.map((note, index) => (
          <Notes deleteNotes={deleteNotes}
            updateData={updateData}
            note={note}
            index={index}
            key={note._id} />
        ))}
      </div>
    </div>
  )
}

export default Home
