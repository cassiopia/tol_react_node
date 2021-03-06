import express from "express";

const app = express();

const cors = require("cors");

var corsOptions = {
    origin: ["http://localhost:3001", "http://localhost:3002"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, x-access-token"
};

app.use(cors(corsOptions));

app.use(express.json());

// Express configuration
app.set("port", process.env.PORT || 3000);

/**
 * Primary app routes.
 */
app.get('/', function (req, res) {
    res.send('Hello!');
});

require("./routes/portfolio")(app);
require("./routes/tag")(app);
require("./routes/page")(app);
require("./routes/auth")(app);
require("./routes/user")(app);

export default app;