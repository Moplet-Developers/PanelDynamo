var AWS = require("aws-sdk");

AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIA3KZVSRWDBU2FCXN2',
    secretAccessKey: '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',
    endpoint: new AWS.Endpoint('dynamodb.ap-south-1.amazonaws.com'),
});




// var docClient = new AWS.DynamoDB.DocumentClient();

// var start = new Date().getTime();
// console.log('start time', start);

// for (i = 1; i <= 1000; i++) {
//     var table = "MISPanel";
//     var params = {
//         TableName: table,
//         Item: {
//             "appId": "60ba619cdc52f500d37e810f",
//             "appIdid": i,
//             "appUserId": "2c0aa1dc1897b22d22f0973b",
//             "appUserIdid": i,
//             "notificationId": "a925f60e-21b8-4382-a4f2-51a2a86efe67",
//             "destinationId": "919744695571",
//             "destinationIdid": i,
//             "read": "Read",
//             "delivered": "Delivered",
//             "date": new Date().getTime()

//         }
//     }

//     // console.log("Adding a new item...");
//     const insertingTime = new Date().getTime();
//     const insDiff = insertingTime - start
//     console.log('Inserting difference', insDiff)

//     docClient.put(params, function (err, data) {
//         if (err) {
//             console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//         } else {
//             console.log("Added item:", JSON.stringify(data, null, 2));
//             const insertedTime = new Date().getTime();
//             const diff = insertedTime - start
//             console.log('Inserted difference', diff)
//         }
//     });


// }





// var end = new Date().getTime();
// console.log(end)
// var time = 1642071204829 - 1642071202225;

// console.log('Execution time: ' + time);