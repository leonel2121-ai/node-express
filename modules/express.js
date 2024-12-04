const express = require ("express")
const  UserModel = require("../src/models/user.model")

const app = express();// inicializando express
 app.use(express.json()); // Informar que sempre sera json nas nossas requisições

// endpoint para pegas ususuario que eu criei
    app.get("/users", async (req, res) =>{
     try{
        const users = await UserModel.find({});
        res.status(201).json(users);
     }catch(error){
        return res.status(500).send(error.menssage);
     }
    });

// endpoint para pegar o usuario pelo ID
 app.get("/users/:id", async (req,res)=>{
    try {
      const ids = req.params.id;// quardar em uma variavel, para acessar o parametro
      const userid = await UserModel.findById(ids);//pegar o usuario pelo seu id no banco
      res.status(200).json(userid);
    } catch (error) {
      return res.status(500).send(error.menssage);
   }

 })         
    


// endpoint  do tipo post (criar usuario)

app.post("/users", async (req, res) =>{
      try{
        const user = await UserModel.create(req.body)
        res.status(201).json(user);
      }catch (error){
        res.status(500).send(error.menssage);
      }
});

//endpoint para actualizar um usuario
app.patch("/users/:id", async(req,res)=>{
try{
   const ids = req.params.id;
   const userup = await UserModel.findByIdAndUpdate(ids, req.body,{new: true});//para retornar actualizado {new: true}
   res.status(200).json(userup);
}catch (error){
res.status(500).send(error.menssage);
}
});



//endpoint para apagar um usuario
app.delete  ("/users/:id", async(req,res)=>{
try{
   const ids = req.params.id;
   const userde = await UserModel.findByIdAndDelete(ids);
   res.status(200).json(userde);
}catch (error){
res.status(500).send(error.menssage);
}
});


    const port = 8080;

app.listen(port, () => console.log('rodando na porta ${port} !'));