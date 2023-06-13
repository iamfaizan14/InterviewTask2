export const getUserController=async(req,res)=>{
    try {
        const users=[
            {id:1, name:"john"},
            {id:2, name:"doe"}
        ]
        await res.json(users)
    } catch (error) {
        console.log(error)
    }
}

export const postUserController=(req, res)=>{
    try {
        if(!req.body.name){
            return res,send({
                error:"Name is required"
            })
        } 
        const newUser={id:4, name:req.body.name}
        res.send(newUser)
    } catch (error) {
        console.log(error)
    }
}