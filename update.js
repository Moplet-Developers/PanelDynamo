var AWS = require("aws-sdk");

AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIA3KZVSRWDBU2FCXN2',
    secretAccessKey: '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',
    endpoint: new AWS.Endpoint('dynamodb.ap-south-1.amazonaws.com'),
});



// var docClient = new AWS.DynamoDB.DocumentClient();

// var table = "MISPanel";

// var appID = "60ba619cdc52f500d37e810f";
// var appIDid = 1;

// // Update the item, unconditionally,

// var params = {
//     TableName: table,
//     Key: {
//         "appId": appID,
//         "appIdid": appIDid
//     },
//     UpdateExpression: "set destinationId = :destinationId, destinationIdid = :destinationIdid",
//     ConditionExpression: "notificationId = :notID",
//     ExpressionAttributeValues: {
//         ":destinationId": "919847646750",
//         ":destinationIdid": 5000,
//         ":notID": "a925f60e-21b8-4382-a4f2-51a2a86efe67"
//     },
//     ReturnValues: "UPDATED_NEW"
// };

// console.log("Updating the item...");
// docClient.update(params, function (err, data) {
//     if (err) {
//         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });

const updateName = async () => {
    const docClient = new AWS.DynamoDB.DocumentClient();

    var appID = "60ba619cdc52f500d37e810f";
    // var appIDid = 1;

    for (i = 10; i < 20; i++) {
        const destId = i + 600;
        var params = {
            TableName: "MISPanel",
            Key: {
                "appId": appID,
                "appIdid": i
            },
            UpdateExpression: "set destinationId = :destinationId, destinationIdid = :destinationIdid",
            ConditionExpression: "notificationId = :notID",
            ExpressionAttributeValues: {
                ":destinationId": "#############",
                ":destinationIdid": destId,
                ":notID": "a925f60e-21b8-4382-a4f2-51a2a86efe67"
            },
            ReturnValues: "UPDATED_NEW"
        };

        const update = await docClient.update(params).promise();
        console.log(update)
        if (update) {
            var params = {
                TableName: "PanelDynamo",
                Key: {
                    "appId": appID,
                    "appIdid": i
                }
            };

            docClient.get(params, function (err, data) {
                if (err) {
                    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
                }
            });
        }
    }

}

updateName();