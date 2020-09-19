const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 3000;

// const Pusher = require('pusher');

// const pusher = new Pusher({
//     appId: '1075799',
//     key: 'a3eb2b3ae9b441d9c8ff',
//     secret: 'a43adf0efd0798a84262',
//     cluster: 'ap3',
// });

// let title = '',
//     editorState = {};

app.use(cors());
app.use(morgan('tiny'))

app.post('/update-docs', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// pusher.get({ path: '/update-docs', params: {} }, function(error, request, response) {
//     if(response.statusCode === 200) {
//         var result = JSON.parse( response.body );
//         var channelsInfo = result.channels;
//         console.log(result)
//     }
//   });

// pusher.trigger('my-channel', 'update:document', {
//     'message': 'hello world'
// });
