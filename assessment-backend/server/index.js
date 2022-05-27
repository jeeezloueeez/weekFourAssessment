const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const controllerFile = require('./controller')


app.get("/api/compliment", controllerFile.getCompliment);
app.get('/api/fortune', controllerFile.getFortune)
app.get('/api/encourage', controllerFile.encourage)
app.get('/api/inspire', controllerFile.inspire)
app.get('/api/help', controllerFile.help)

app.listen(4000, () => console.log("Server running on 4000"));
