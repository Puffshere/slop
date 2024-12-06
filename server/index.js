const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// CORS configuration
const corsOptions = {
  origin: 'https://sloppygolf.com', // Allow only your production domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// Console.log for cors server used for debugging

// app.use((req, res, next) => {
//     console.log('Incoming request:', req.method, req.path);
//     next();
// });

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/', {
        setHeaders: function (res, path) {
            res.set('Cache-Control', 'public, max-age=18000');
        }
    }));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

