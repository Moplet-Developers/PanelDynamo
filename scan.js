var AWS = require("aws-sdk");

AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIA3KZVSRWDBU2FCXN2',
    secretAccessKey: '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',
    endpoint: new AWS.Endpoint('dynamodb.ap-south-1.amazonaws.com'),
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "PanelDynamo",
    KeyConditionExpression: "#appId = :appId AND appIdid = :appIdid",
    ExpressionAttributeNames: {
        "#appId": "appId",
    },
    ExpressionAttributeValues: {
        ":appId": "60ba619cdc52f500d37e810f",
        ":appIdid": 589
    }
};

docClient.query(params, function (err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function (item) {
            // console.log(" -", item.appID + ": " + item.appIDid);
            console.log(item)
        });
    }
});