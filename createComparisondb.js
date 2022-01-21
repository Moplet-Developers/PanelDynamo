var AWS = require("aws-sdk");

AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIA3KZVSRWDBU2FCXN2',
    secretAccessKey: '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',
    endpoint: new AWS.Endpoint('dynamodb.ap-south-1.amazonaws.com'),
});

var dynamodb = new AWS.DynamoDB();

// Create a table with Global Secondary index
var params = {
    TableName: "MISPanel",
    KeySchema: [{
            AttributeName: "app",
            KeyType: "HASH"
        }, //partition key
        {
            AttributeName: "loopCount",
            KeyType: "RANGE"
        } //sort key
    ],
    AttributeDefinitions: [{
            AttributeName: "app",
            AttributeType: "S"
        },
        {
            AttributeName: "loopCount",
            AttributeType: "N"
        },
        {
            AttributeName: "trigger",
            AttributeType: "S"
        },
        {
            AttributeName: "appUser",
            AttributeType: "S"
        },
        {
            AttributeName: "conversation",
            AttributeType: "S"
        },
        {
            AttributeName: "destination",
            AttributeType: "S"
        },
        {
            AttributeName: "message",
            AttributeType: "S"
        }
    ],
    GlobalSecondaryIndexes: [{
            IndexName: 'AppUserId',
            KeySchema: [{
                    AttributeName: 'appUser',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'loopCount',
                    KeyType: 'RANGE'
                } //sort key
            ],
            Projection: {
                ProjectionType: 'ALL'
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 50,
                WriteCapacityUnits: 50
            }
        },
        {
            IndexName: 'Destination_Id',
            KeySchema: [{
                    AttributeName: 'destination',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'loopCount',
                    KeyType: 'RANGE'
                } //sort key
            ],
            Projection: {
                ProjectionType: 'ALL'
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 50,
                WriteCapacityUnits: 50
            }
        },
        {
            IndexName: 'Message',
            KeySchema: [{
                    AttributeName: 'message',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'loopCount',
                    KeyType: 'RANGE'
                } //sort key
            ],
            Projection: {
                ProjectionType: 'ALL'
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 50,
                WriteCapacityUnits: 50
            }
        },
        {
            IndexName: 'Conversation',
            KeySchema: [{
                    AttributeName: 'conversation',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'loopCount',
                    KeyType: 'RANGE'
                } //sort key
            ],
            Projection: {
                ProjectionType: 'ALL'
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 50,
                WriteCapacityUnits: 50
            }
        },
        {
            IndexName: 'Status',
            KeySchema: [{
                    AttributeName: 'trigger',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'loopCount',
                    KeyType: 'RANGE'
                } //sort key
            ],
            Projection: {
                ProjectionType: 'ALL'
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 50,
                WriteCapacityUnits: 50
            }
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 50,
        WriteCapacityUnits: 100
    }
}

dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});