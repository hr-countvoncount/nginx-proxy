const express = require("express");
const path = require("path");
const app = express();

app.get("/loaderio-00660a6577182fa90bf2cc75351199b9", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "./public/loaderio-00660a6577182fa90bf2cc75351199b9.txt"
    )
  );
});

app.listen(3002, () => console.log("connected on 3002"));
