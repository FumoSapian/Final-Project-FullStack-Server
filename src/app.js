const express = require('express');
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });
app.use(express.urlencoded({ extended: true}));

app.listen(PORT, () => console.log('Server running on port ${PORT}'));