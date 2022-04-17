let express = require("express");
let app = express();
let port = 2400;

app.use(express.static("./static"));

app.listen(port, function() {
    console.log(`Listening at http://localhost:${port}`);
});
