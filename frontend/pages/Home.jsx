import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Notes from '../components/Notes'
import useNotes from '../customHooks/useNotes'

const Home = () => {

  const { notes, deleteNotes } = useNotes()
  const navigate = useNavigate()
  const updateData = (title, description, id) => {

    navigate(`/notes/update/${id}`, {
      state: {
        title: title,
        description: description,
        id: id,
        toggle: true
      }
    })
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
