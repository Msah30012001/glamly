const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://0.0.0.0:27017/glamly`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`connection successfully`))
  .catch((err) => console.log(err));
