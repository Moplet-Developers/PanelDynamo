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
            AttributeName: "appId",
            KeyType: "HASH"
        }, //partition key
        {
            AttributeName: "appIdid",
            KeyType: "RANGE"
        } //sort key
    ],
    AttributeDefinitions: [{
            AttributeName: "appId",
            AttributeType: "S"
        },
        {
            AttributeName: "appIdid",
            AttributeType: "N"
        },
        {
            AttributeName: "appUserId",
            AttributeType: "S"
        },
        {
            AttributeName: "appUserIdid",
            AttributeType: "N"
        },
        {
            AttributeName: "destinationId",
            AttributeType: "S"
        },
        {
            AttributeName: "destinationIdid",
            AttributeType: "N"
        },
        {
            AttributeName: "messageType",
            AttributeType: "S"
        },
        {
            AttributeName: "messageTypeid",
            AttributeType: "N"
        },
        {
            AttributeName: "read",
            AttributeType: "S"
        },
        {
            AttributeName: "delivered",
            AttributeType: "S"
        },
        {
            AttributeName: "dateTime",
            AttributeType: "S"
        }
    ],
    GlobalSecondaryIndexes: [{
            IndexName: 'AppUserId',
            KeySchema: [{
                    AttributeName: 'appUserId',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'appUserIdid',
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
                    AttributeName: 'destinationId',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'destinationIdid',
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
            IndexName: 'MessageTypeId',
            KeySchema: [{
                    AttributeName: 'messageType',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'messageTypeid',
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
            IndexName: 'ReadDateTime',
            KeySchema: [{
                    AttributeName: 'read',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'dateTime',
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
            IndexName: 'DeliveryDateTime',
            KeySchema: [{
                    AttributeName: 'delivered',
                    KeyType: 'HASH'
                }, //partition key
                {
                    AttributeName: 'dateTime',
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