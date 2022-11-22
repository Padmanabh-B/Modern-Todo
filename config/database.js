const mongoose = require("mongoose")

const MONGO_URL = process.env.MONGO_URL;

exports.connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log(`DB Connected Successfully`))
        .catch(error => {
            console.log(`DB is not Connected`);
            console.log(error);
            process.exit(1);
        })
}

