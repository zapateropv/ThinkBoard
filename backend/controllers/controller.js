import { Notes } from "../db/db.js"


//GET
export const GetAllPost = async (req, res) => {
    try {
        const data = await Notes.find()
        res.send(data)
       
        res.status(200).json({ message: "notes created! "})

    } catch (error) {
        res.status(404).json({message: "notes not found "})
    }

}

//INSERT
export const InsertPost = async (req, res) => {

    try {
        await Notes.create(req.body)
        res.status(201).json({messagee: "notes created! "})
    } catch (error) {
        res.status(400).json({messagee: "bad requst "})
    }

}


//UPDATE
export const UpdatePost = async (req, res) => {

    try {
        const id = req.params.id
        const { title, description} = req.body
        await Notes.findByIdAndUpdate(id, { title, description}, { new: true})
        res.status(200).json({ message: 'notes updated! ' })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }



}

// DELETE 
export const DeletePost = async (req, res) => {
  
    try {
        const id = req.params.id
    
        await Notes.findByIdAndDelete(id)

        res.status(200).json({ message: 'notes deleted'  })
        

    } catch (error) {
        res.status(500).json({ error: error.message });
    }


}