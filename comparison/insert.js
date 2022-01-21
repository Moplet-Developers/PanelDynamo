var AWS = require("aws-sdk");

AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIA3KZVSRWDBU2FCXN2',
    secretAccessKey: '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',
    endpoint: new AWS.Endpoint('dynamodb.ap-south-1.amazonaws.com'),
});

const insert = async () => {
    const startTime = new Date().getTime()
    console.log("Start Time ", startTime)

    for (let i = 5000; i <= 105000; i++) {
        console.log("Inserting Data ", new Date().getTime() - startTime, "ms")

        var docClient = new AWS.DynamoDB.DocumentClient();

        var table = "MISPanel";
        var params = {
            TableName: table,
            Item: {
                "loopCount": i,
                "trigger": "message:delivery:channel",
                "version": "v1.1",
                "app": "60ba619cdc52f500d37e810f",
                "appUser": "c3d4caad2db85c5565fd1d2d",
                "conversation": "09854f2fc0b11c2c7fc096a6",
                "message": "61dfda468c6d5000ebec727a"
            }
        }

        const insertingTime = new Date().getTime();
        const insDiff = insertingTime - startTime
        console.log('Inserting difference', insDiff)

        docClient.put(params, function (err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log('Inserted ', JSON.stringify(data, null, 2))
                const insertedTime = new Date().getTime()

                const diff = insertedTime - startTime

                console.log("Time difference ", diff, " ms")
            }
        });
    }
}

insert();