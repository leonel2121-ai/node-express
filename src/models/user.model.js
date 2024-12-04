const mongoose = require('mongoose') 

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true, // propriedade de obrigatoriedade
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {    
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 4,
    },
});


// criando o model( )
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel; //para exportar esse o userModel    

