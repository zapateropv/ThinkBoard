import React from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
const Notes = ({deleteNotes, updateData, note, index}) => {
  return (
    
       <div
      key={index}
      className="bg-[#110f0f]  border-t-10 border-t-green-700 text-white rounded-lg shadow-md p-4  max-w-100 w-full h-40 hover:scale-105 transition-transform duration-200 "
    >
    
      <div className="mb-4">
        <p className="font-bold text-2xl truncate">{note.title}</p>
        <p className="text-md mt-2 text-gray-300 line-clamp-3">{note.description}</p>
      </div>

      <div className="flex justify-between items-center  text-gray-400 text-sm">
        <p>{new Date(note.createdAt).toLocaleDateString()}</p>
        <p>{new Date(note.createdAt).toLocaleTimeString()}</p>
        <span className="flex items-center gap-2">
        
        <FaEdit className="hover:text-blue-500 cursor-pointer text-xl" 
           onClick={()=> updateData(note.title, note.description, note._id)}/>
        
        <RiDeleteBin5Line className="text-red-800 text-xl cursor-pointer"
         onClick={() => deleteNotes(note._id)} />
        </span>
      </div>
    </div>
   
  )
}

export default Notes
