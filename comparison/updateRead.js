var AWS = require("aws-sdk");

AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIA3KZVSRWDBU2FCXN2',
    secretAccessKey: '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',
    endpoint: new AWS.Endpoint('dynamodb.ap-south-1.amazonaws.com'),
});

const update = async () => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    // for (i = 5010; i <= 5020; i++) {
    var appID = "60ba619cdc52f500d37e810f";
    var params = {
        TableName: "MISPanel",
        Key: {
            "app": appID,
            "loopCount": 5010
        },
        UpdateExpression: "set destination = :destination",
        ConditionExpression: "message = :message",
        ExpressionAttributeValues: {
            ":destination": "#############",
            ":message": "61dfda468c6d5000ebec727a"
        },
        ReturnValues: "UPDATED_NEW"
    };

    const update = await docClient.update(params).promise();
    if (update) {
        var loopCount = 5010;

        var params = {
            TableName: "MISPanel",
            Key: {
                "app": appID,
                "loopCount": loopCount
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
    // }
}


update()