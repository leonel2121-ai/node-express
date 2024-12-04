const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.xp4gluk.mongodb.net/database?retryWrites=true&w=majority`,
    );
    console.log("Conexão ao banco de dados estabelecida com sucesso");
  } catch (error) {
    console.error("Ocorreu um erro ao conectar ao banco de dados:", error.message);
  }
};

module.exports = connectToDatabase;
