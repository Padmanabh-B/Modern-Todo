const app = require("./app");
const PORT = process.env.PORT || 4000;


//Server Config
app.listen(PORT, () => {
    console.log(`Your Server running at http://localhost:${PORT}`);
});

