//  lib
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer')
const path = require('path')
const fs = require("fs")
const http = require("http").createServer(app)
module.exports = http
// routers
const gamesRouter = require("./routers/gamesRouter")
const authRouter = require("./routers/authRouter")
// secret
const SECRET = require("./config");
const startingSocket = require("./socket")
//db
const GridFile = require("./models/filesSchame");
////middleWare
const upload = multer({ dest: path.join(__dirname, '.') })


const PORT = SECRET.SECRET.PORT || "3033";

app.use(cors({
  origin: ["http://localhost:3000"],
  maxHttpBufferSize: 1e8
}));
app.use(express.json({limit: "30mb",extended:true}));
app.use("/casino_px", gamesRouter )
app.use("/auth", authRouter )



app.post('/casino_px/files', upload.any(), async (req, res, nxt) => {
  try {
    console.log(req.files);
    let info;
    // uploaded file are accessible as req.files
    if (req.files) {
      // console.log(req)
      const promises = req.files.map(async (file) => {
        const fileStream = fs.createReadStream(file.path)
        // upload file to gridfs
        const gridFile = new GridFile({ filename: file.originalname })
        await gridFile.upload(fileStream)
        // delete the file from local folder
        fs.unlinkSync(file.path)
        const data = await GridFile.find({ gridFile })
         info = data[data.length - 1]
        console.log(SECRET.SECRET.URL_LOCAL_SERVER + "/casino_px/files/" + info._id + "/" + info.filename);

      })
      await Promise.all(promises)
      res.send(SECRET.SECRET.URL_LOCAL_SERVER + "/casino_px/files/" + info._id + "/" + info.filename)
    }
  } catch (err) {
    nxt(err)
  }
})

app.get('/casino_px/files/:id/:name', async (req, res, nxt) => {
  try {
    const { id, name } = req.params

    const gridFile = await GridFile.findById(id)

    if (gridFile) {
      res.attachment(name)
      gridFile.downloadStream(res)
    } else {
      // file not found
      res.status(404).json({ error: 'file not found' })
    }
  } catch (err) {
    nxt(err)
  }
})

async function startAPP() {
  try {
    mongoose
      .connect(SECRET.SECRET.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => console.log("DB is conected... "))
      .catch(() => console.log("DB is not conected see your Node"));

    http.listen(PORT, () => {
      console.log(`Express is started... `);
    });
  } catch (e) {
    console.log(e);
  }
}


startAPP();
startingSocket();
