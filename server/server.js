const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), exoress.urlencoded({ extended: true }));

const AllMyUserRoutes = require('./routes/user.routes');
AllMyUserRoutes(app);

app.listen(8000, () => console.log('The server is now activated on port 8000.'));