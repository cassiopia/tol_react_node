import express from "express";

const app = express();

const cors = require("cors");

var corsOptions = {
    origin: ["http://localhost:3009"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, x-access-token, range, prefer",
    exposedHeaders: "Content-Range"
};

app.use(cors(corsOptions));

app.use(express.json());

// Express configuration
app.set("port", process.env.PORT || 3010);

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