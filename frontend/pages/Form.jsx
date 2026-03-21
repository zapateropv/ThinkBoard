import React from 'react'
import Navbar from '../components/Navbar'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Form = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const InputForm = location.state?.toggle == true
    const id = location.state?.id
   
    const [title, setTitle] = useState(
        InputForm ? location.state.title : " "
    )
    const [content, setContent] = useState(
        InputForm ? location.state.description : " "
    )

    const submitBtn = async () => {
        await axios.post('http://localhost:8000/notes/create',
            {title: title,
             description: content
            }
        )

         navigate('/notes')

    }

    const updateBtn = async () => {
        
        await axios.put(`http://localhost:8000/notes/update/${id}`,
            {

                title: title,
                description: content
            }      
        )
           
        navigate('/notes')
    }

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#130e0d] px-4">
   
    <div className="w-full max-w-xl space-y-6">
    <Link to={'/notes'} className="flex items-center gap-2 text-md cursor-pointer font-bold text-white  " >
     ← Back to Notes
    </Link>
    {/* main form */}
    <div className="bg-[#181110] rounded-2xl shadow-lg p-8 text-white  space-y-6 ">
      <h1 className="text-xl font-semibold ">
        Create New Note
      </h1>
      <div className="space-y-1">
        <label className="text-sm font-medium  ">
          Title
        </label>
        <input
          value={title}
          onChange={ (e) => setTitle(e.target.value)}
          type="text"
          placeholder="Note title"
          className="w-full mt-4 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your notes here..."
          rows={4}
          className="w-full mt-4 rounded-lg border border-gray-300 px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex justify-end">
        {InputForm ?  <button className="rounded-lg bg-green-600 px-6 py-2 text-sm font-medium text-black cursor-pointer"
        onClick={() => updateBtn()}>
            Save
        </button> :   <button className="rounded-lg bg-green-600 px-6 py-2 text-sm font-medium text-black cursor-pointer"
        onClick={() => submitBtn()}>
          Create Note
        </button> }
       
      
      </div>
    </div>
  </div>
  
</div>
  )
}

export default Form
