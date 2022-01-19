const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


var AWS = require("aws-sdk");

AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIA3KZVSRWDBU2FCXN2',
    secretAccessKey: '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',
    endpoint: new AWS.Endpoint('dynamodb.ap-south-1.amazonaws.com'),
});

var docClient = new AWS.DynamoDB.DocumentClient();

app.post('/store', (req, res) => {
    // We will be coding here
    const data = req.body;

    console.log(data['appId']);

    var start = new Date().getTime();
    console.log(start);

    for (i = 22001; i <= 24000; i++) {
        var table = "panelDynamo";
        var params = {
            TableName: table,
            Item: {
                "appId": "60ba619cdc52f500d37e810f",
                "appIdid": i,
                "appUserId": "2c0aa1dc1897b22d22f0973b",
                "appUserIdid": i,
                "notificationId": "a925f60e-21b8-4382-a4f2-51a2a86efe67",
                "destinationId": "919744695571",
                "destinationIdid": i,
                "read": "Read",
                "delivered": "Delivered",
                "date": new Date().getTime()

            }
        }

        console.log("Adding a new item...");
        docClient.put(params, function (err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });
    }

    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);


    res.send('data added');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});