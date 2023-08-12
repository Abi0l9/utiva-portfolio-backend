const express = require("express");
const app = express();
const cors = require("cors");
const mailer = require("./mailer");
const mailToManager = require("./mailToManager");

app.use(cors());
app.use(express.json());

app.post("/mail", async (request, response) => {
  const body = request.body;
  try {
    await mailer(body);
    await mailToManager(body);
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }

  return response.status(200).json({ message: "Email sent successfully!" });
});

const PORT = 8000;
app.listen(PORT, () => console.log("App runnung on port ", PORT));
