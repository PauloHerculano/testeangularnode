const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// //NLU
// const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
// const { IamAuthenticator } = require('ibm-watson/auth');
// //NLU

// //NewsAPI
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('82387374b5dd401bbf5bede554da0d7c');
// //NewsAPI

const postsRoutes = require('./routes/posts');
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://paulo:G4eMuX0hZgTExaID@cluster0-xleff.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
    console.log('Connected to database!')
})
.catch(() => {
    console.log('Connection failed')
});


//NLU

// const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
//   version: '2019-07-12',
//   authenticator: new IamAuthenticator({
//     apikey: 'IMinyq6Z_c_7CebAulM_Mi4fP7JDbMUr5g8hWQYZx_kR',
//   }),
//   url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/699e499c-020f-441c-8fc9-693b902b0325',
// });

// const analyzeParams = {
//   'url': '',
//   'features': {
//     'sentiment': {
//       'targets': [
//         'stocks'
//       ]
//     }
//   }
// };

// naturalLanguageUnderstanding.analyze(analyzeParams)
//   .then(analysisResults => {
//     console.log(JSON.stringify(analysisResults, null, 2));
//   })
//   .catch(err => {
//     console.log('error:', err);
//   });

//NLU FIM


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS, PUSH, LISTEN"
    );
    next();
  });

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname,"angular","index.html"));
});

module.exports = app;

