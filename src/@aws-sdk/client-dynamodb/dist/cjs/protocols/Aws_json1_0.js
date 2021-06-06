"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_0UpdateTimeToLiveCommand = exports.serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = exports.serializeAws_json1_0UpdateTableCommand = exports.serializeAws_json1_0UpdateItemCommand = exports.serializeAws_json1_0UpdateGlobalTableSettingsCommand = exports.serializeAws_json1_0UpdateGlobalTableCommand = exports.serializeAws_json1_0UpdateContributorInsightsCommand = exports.serializeAws_json1_0UpdateContinuousBackupsCommand = exports.serializeAws_json1_0UntagResourceCommand = exports.serializeAws_json1_0TransactWriteItemsCommand = exports.serializeAws_json1_0TransactGetItemsCommand = exports.serializeAws_json1_0TagResourceCommand = exports.serializeAws_json1_0ScanCommand = exports.serializeAws_json1_0RestoreTableToPointInTimeCommand = exports.serializeAws_json1_0RestoreTableFromBackupCommand = exports.serializeAws_json1_0QueryCommand = exports.serializeAws_json1_0PutItemCommand = exports.serializeAws_json1_0ListTagsOfResourceCommand = exports.serializeAws_json1_0ListTablesCommand = exports.serializeAws_json1_0ListGlobalTablesCommand = exports.serializeAws_json1_0ListExportsCommand = exports.serializeAws_json1_0ListContributorInsightsCommand = exports.serializeAws_json1_0ListBackupsCommand = exports.serializeAws_json1_0GetItemCommand = exports.serializeAws_json1_0ExportTableToPointInTimeCommand = exports.serializeAws_json1_0ExecuteTransactionCommand = exports.serializeAws_json1_0ExecuteStatementCommand = exports.serializeAws_json1_0EnableKinesisStreamingDestinationCommand = exports.serializeAws_json1_0DisableKinesisStreamingDestinationCommand = exports.serializeAws_json1_0DescribeTimeToLiveCommand = exports.serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = exports.serializeAws_json1_0DescribeTableCommand = exports.serializeAws_json1_0DescribeLimitsCommand = exports.serializeAws_json1_0DescribeKinesisStreamingDestinationCommand = exports.serializeAws_json1_0DescribeGlobalTableSettingsCommand = exports.serializeAws_json1_0DescribeGlobalTableCommand = exports.serializeAws_json1_0DescribeExportCommand = exports.serializeAws_json1_0DescribeEndpointsCommand = exports.serializeAws_json1_0DescribeContributorInsightsCommand = exports.serializeAws_json1_0DescribeContinuousBackupsCommand = exports.serializeAws_json1_0DescribeBackupCommand = exports.serializeAws_json1_0DeleteTableCommand = exports.serializeAws_json1_0DeleteItemCommand = exports.serializeAws_json1_0DeleteBackupCommand = exports.serializeAws_json1_0CreateTableCommand = exports.serializeAws_json1_0CreateGlobalTableCommand = exports.serializeAws_json1_0CreateBackupCommand = exports.serializeAws_json1_0BatchWriteItemCommand = exports.serializeAws_json1_0BatchGetItemCommand = exports.serializeAws_json1_0BatchExecuteStatementCommand = void 0;
exports.deserializeAws_json1_0UpdateTimeToLiveCommand = exports.deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = exports.deserializeAws_json1_0UpdateTableCommand = exports.deserializeAws_json1_0UpdateItemCommand = exports.deserializeAws_json1_0UpdateGlobalTableSettingsCommand = exports.deserializeAws_json1_0UpdateGlobalTableCommand = exports.deserializeAws_json1_0UpdateContributorInsightsCommand = exports.deserializeAws_json1_0UpdateContinuousBackupsCommand = exports.deserializeAws_json1_0UntagResourceCommand = exports.deserializeAws_json1_0TransactWriteItemsCommand = exports.deserializeAws_json1_0TransactGetItemsCommand = exports.deserializeAws_json1_0TagResourceCommand = exports.deserializeAws_json1_0ScanCommand = exports.deserializeAws_json1_0RestoreTableToPointInTimeCommand = exports.deserializeAws_json1_0RestoreTableFromBackupCommand = exports.deserializeAws_json1_0QueryCommand = exports.deserializeAws_json1_0PutItemCommand = exports.deserializeAws_json1_0ListTagsOfResourceCommand = exports.deserializeAws_json1_0ListTablesCommand = exports.deserializeAws_json1_0ListGlobalTablesCommand = exports.deserializeAws_json1_0ListExportsCommand = exports.deserializeAws_json1_0ListContributorInsightsCommand = exports.deserializeAws_json1_0ListBackupsCommand = exports.deserializeAws_json1_0GetItemCommand = exports.deserializeAws_json1_0ExportTableToPointInTimeCommand = exports.deserializeAws_json1_0ExecuteTransactionCommand = exports.deserializeAws_json1_0ExecuteStatementCommand = exports.deserializeAws_json1_0EnableKinesisStreamingDestinationCommand = exports.deserializeAws_json1_0DisableKinesisStreamingDestinationCommand = exports.deserializeAws_json1_0DescribeTimeToLiveCommand = exports.deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = exports.deserializeAws_json1_0DescribeTableCommand = exports.deserializeAws_json1_0DescribeLimitsCommand = exports.deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand = exports.deserializeAws_json1_0DescribeGlobalTableSettingsCommand = exports.deserializeAws_json1_0DescribeGlobalTableCommand = exports.deserializeAws_json1_0DescribeExportCommand = exports.deserializeAws_json1_0DescribeEndpointsCommand = exports.deserializeAws_json1_0DescribeContributorInsightsCommand = exports.deserializeAws_json1_0DescribeContinuousBackupsCommand = exports.deserializeAws_json1_0DescribeBackupCommand = exports.deserializeAws_json1_0DeleteTableCommand = exports.deserializeAws_json1_0DeleteItemCommand = exports.deserializeAws_json1_0DeleteBackupCommand = exports.deserializeAws_json1_0CreateTableCommand = exports.deserializeAws_json1_0CreateGlobalTableCommand = exports.deserializeAws_json1_0CreateBackupCommand = exports.deserializeAws_json1_0BatchWriteItemCommand = exports.deserializeAws_json1_0BatchGetItemCommand = exports.deserializeAws_json1_0BatchExecuteStatementCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_0BatchExecuteStatementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.BatchExecuteStatement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0BatchExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0BatchExecuteStatementCommand = serializeAws_json1_0BatchExecuteStatementCommand;
const serializeAws_json1_0BatchGetItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.BatchGetItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0BatchGetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0BatchGetItemCommand = serializeAws_json1_0BatchGetItemCommand;
const serializeAws_json1_0BatchWriteItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.BatchWriteItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0BatchWriteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0BatchWriteItemCommand = serializeAws_json1_0BatchWriteItemCommand;
const serializeAws_json1_0CreateBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.CreateBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateBackupCommand = serializeAws_json1_0CreateBackupCommand;
const serializeAws_json1_0CreateGlobalTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.CreateGlobalTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateGlobalTableCommand = serializeAws_json1_0CreateGlobalTableCommand;
const serializeAws_json1_0CreateTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.CreateTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateTableCommand = serializeAws_json1_0CreateTableCommand;
const serializeAws_json1_0DeleteBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DeleteBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteBackupCommand = serializeAws_json1_0DeleteBackupCommand;
const serializeAws_json1_0DeleteItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DeleteItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteItemCommand = serializeAws_json1_0DeleteItemCommand;
const serializeAws_json1_0DeleteTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DeleteTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteTableCommand = serializeAws_json1_0DeleteTableCommand;
const serializeAws_json1_0DescribeBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeBackupCommand = serializeAws_json1_0DescribeBackupCommand;
const serializeAws_json1_0DescribeContinuousBackupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeContinuousBackups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeContinuousBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeContinuousBackupsCommand = serializeAws_json1_0DescribeContinuousBackupsCommand;
const serializeAws_json1_0DescribeContributorInsightsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeContributorInsights",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeContributorInsightsCommand = serializeAws_json1_0DescribeContributorInsightsCommand;
const serializeAws_json1_0DescribeEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeEndpointsCommand = serializeAws_json1_0DescribeEndpointsCommand;
const serializeAws_json1_0DescribeExportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeExport",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeExportInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeExportCommand = serializeAws_json1_0DescribeExportCommand;
const serializeAws_json1_0DescribeGlobalTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeGlobalTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeGlobalTableCommand = serializeAws_json1_0DescribeGlobalTableCommand;
const serializeAws_json1_0DescribeGlobalTableSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeGlobalTableSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeGlobalTableSettingsCommand = serializeAws_json1_0DescribeGlobalTableSettingsCommand;
const serializeAws_json1_0DescribeKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeKinesisStreamingDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeKinesisStreamingDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeKinesisStreamingDestinationCommand = serializeAws_json1_0DescribeKinesisStreamingDestinationCommand;
const serializeAws_json1_0DescribeLimitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeLimits",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeLimitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeLimitsCommand = serializeAws_json1_0DescribeLimitsCommand;
const serializeAws_json1_0DescribeTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeTableCommand = serializeAws_json1_0DescribeTableCommand;
const serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeTableReplicaAutoScaling",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTableReplicaAutoScalingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = serializeAws_json1_0DescribeTableReplicaAutoScalingCommand;
const serializeAws_json1_0DescribeTimeToLiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DescribeTimeToLive",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTimeToLiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeTimeToLiveCommand = serializeAws_json1_0DescribeTimeToLiveCommand;
const serializeAws_json1_0DisableKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.DisableKinesisStreamingDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0KinesisStreamingDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DisableKinesisStreamingDestinationCommand = serializeAws_json1_0DisableKinesisStreamingDestinationCommand;
const serializeAws_json1_0EnableKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.EnableKinesisStreamingDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0KinesisStreamingDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0EnableKinesisStreamingDestinationCommand = serializeAws_json1_0EnableKinesisStreamingDestinationCommand;
const serializeAws_json1_0ExecuteStatementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ExecuteStatement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ExecuteStatementCommand = serializeAws_json1_0ExecuteStatementCommand;
const serializeAws_json1_0ExecuteTransactionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ExecuteTransaction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExecuteTransactionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ExecuteTransactionCommand = serializeAws_json1_0ExecuteTransactionCommand;
const serializeAws_json1_0ExportTableToPointInTimeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ExportTableToPointInTime",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExportTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ExportTableToPointInTimeCommand = serializeAws_json1_0ExportTableToPointInTimeCommand;
const serializeAws_json1_0GetItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.GetItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetItemCommand = serializeAws_json1_0GetItemCommand;
const serializeAws_json1_0ListBackupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ListBackups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListBackupsCommand = serializeAws_json1_0ListBackupsCommand;
const serializeAws_json1_0ListContributorInsightsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ListContributorInsights",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListContributorInsightsCommand = serializeAws_json1_0ListContributorInsightsCommand;
const serializeAws_json1_0ListExportsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ListExports",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListExportsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListExportsCommand = serializeAws_json1_0ListExportsCommand;
const serializeAws_json1_0ListGlobalTablesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ListGlobalTables",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListGlobalTablesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListGlobalTablesCommand = serializeAws_json1_0ListGlobalTablesCommand;
const serializeAws_json1_0ListTablesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ListTables",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTablesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTablesCommand = serializeAws_json1_0ListTablesCommand;
const serializeAws_json1_0ListTagsOfResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.ListTagsOfResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsOfResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTagsOfResourceCommand = serializeAws_json1_0ListTagsOfResourceCommand;
const serializeAws_json1_0PutItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.PutItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0PutItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0PutItemCommand = serializeAws_json1_0PutItemCommand;
const serializeAws_json1_0QueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.Query",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0QueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0QueryCommand = serializeAws_json1_0QueryCommand;
const serializeAws_json1_0RestoreTableFromBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.RestoreTableFromBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RestoreTableFromBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RestoreTableFromBackupCommand = serializeAws_json1_0RestoreTableFromBackupCommand;
const serializeAws_json1_0RestoreTableToPointInTimeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.RestoreTableToPointInTime",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RestoreTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0RestoreTableToPointInTimeCommand = serializeAws_json1_0RestoreTableToPointInTimeCommand;
const serializeAws_json1_0ScanCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.Scan",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ScanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ScanCommand = serializeAws_json1_0ScanCommand;
const serializeAws_json1_0TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
const serializeAws_json1_0TransactGetItemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.TransactGetItems",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TransactGetItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TransactGetItemsCommand = serializeAws_json1_0TransactGetItemsCommand;
const serializeAws_json1_0TransactWriteItemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.TransactWriteItems",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TransactWriteItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TransactWriteItemsCommand = serializeAws_json1_0TransactWriteItemsCommand;
const serializeAws_json1_0UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
const serializeAws_json1_0UpdateContinuousBackupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UpdateContinuousBackups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateContinuousBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateContinuousBackupsCommand = serializeAws_json1_0UpdateContinuousBackupsCommand;
const serializeAws_json1_0UpdateContributorInsightsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UpdateContributorInsights",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateContributorInsightsCommand = serializeAws_json1_0UpdateContributorInsightsCommand;
const serializeAws_json1_0UpdateGlobalTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UpdateGlobalTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateGlobalTableCommand = serializeAws_json1_0UpdateGlobalTableCommand;
const serializeAws_json1_0UpdateGlobalTableSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UpdateGlobalTableSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateGlobalTableSettingsCommand = serializeAws_json1_0UpdateGlobalTableSettingsCommand;
const serializeAws_json1_0UpdateItemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UpdateItem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateItemCommand = serializeAws_json1_0UpdateItemCommand;
const serializeAws_json1_0UpdateTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UpdateTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateTableCommand = serializeAws_json1_0UpdateTableCommand;
const serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UpdateTableReplicaAutoScaling",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTableReplicaAutoScalingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = serializeAws_json1_0UpdateTableReplicaAutoScalingCommand;
const serializeAws_json1_0UpdateTimeToLiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDB_20120810.UpdateTimeToLive",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTimeToLiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateTimeToLiveCommand = serializeAws_json1_0UpdateTimeToLiveCommand;
const deserializeAws_json1_0BatchExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0BatchExecuteStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0BatchExecuteStatementOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0BatchExecuteStatementCommand = deserializeAws_json1_0BatchExecuteStatementCommand;
const deserializeAws_json1_0BatchExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0BatchGetItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0BatchGetItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0BatchGetItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0BatchGetItemCommand = deserializeAws_json1_0BatchGetItemCommand;
const deserializeAws_json1_0BatchGetItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0BatchWriteItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0BatchWriteItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0BatchWriteItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0BatchWriteItemCommand = deserializeAws_json1_0BatchWriteItemCommand;
const deserializeAws_json1_0BatchWriteItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CreateBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateBackupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateBackupCommand = deserializeAws_json1_0CreateBackupCommand;
const deserializeAws_json1_0CreateBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupInUseException":
        case "com.amazonaws.dynamodb#BackupInUseException":
            response = {
                ...(await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContinuousBackupsUnavailableException":
        case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableInUseException":
        case "com.amazonaws.dynamodb#TableInUseException":
            response = {
                ...(await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CreateGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateGlobalTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateGlobalTableCommand = deserializeAws_json1_0CreateGlobalTableCommand;
const deserializeAws_json1_0CreateGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableAlreadyExistsException":
        case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CreateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateTableCommand = deserializeAws_json1_0CreateTableCommand;
const deserializeAws_json1_0CreateTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeleteBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteBackupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteBackupCommand = deserializeAws_json1_0DeleteBackupCommand;
const deserializeAws_json1_0DeleteBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupInUseException":
        case "com.amazonaws.dynamodb#BackupInUseException":
            response = {
                ...(await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb#BackupNotFoundException":
            response = {
                ...(await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeleteItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteItemCommand = deserializeAws_json1_0DeleteItemCommand;
const deserializeAws_json1_0DeleteItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            response = {
                ...(await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            response = {
                ...(await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeleteTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteTableCommand = deserializeAws_json1_0DeleteTableCommand;
const deserializeAws_json1_0DeleteTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeBackupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeBackupCommand = deserializeAws_json1_0DescribeBackupCommand;
const deserializeAws_json1_0DescribeBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb#BackupNotFoundException":
            response = {
                ...(await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeContinuousBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeContinuousBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeContinuousBackupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeContinuousBackupsCommand = deserializeAws_json1_0DescribeContinuousBackupsCommand;
const deserializeAws_json1_0DescribeContinuousBackupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeContributorInsightsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeContributorInsightsCommand = deserializeAws_json1_0DescribeContributorInsightsCommand;
const deserializeAws_json1_0DescribeContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeEndpointsCommand = deserializeAws_json1_0DescribeEndpointsCommand;
const deserializeAws_json1_0DescribeEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeExportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeExportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeExportOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeExportCommand = deserializeAws_json1_0DescribeExportCommand;
const deserializeAws_json1_0DescribeExportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExportNotFoundException":
        case "com.amazonaws.dynamodb#ExportNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ExportNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeGlobalTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeGlobalTableCommand = deserializeAws_json1_0DescribeGlobalTableCommand;
const deserializeAws_json1_0DescribeGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeGlobalTableSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeGlobalTableSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeGlobalTableSettingsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeGlobalTableSettingsCommand = deserializeAws_json1_0DescribeGlobalTableSettingsCommand;
const deserializeAws_json1_0DescribeGlobalTableSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand = deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand;
const deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeLimitsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeLimitsCommand = deserializeAws_json1_0DescribeLimitsCommand;
const deserializeAws_json1_0DescribeLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeTableCommand = deserializeAws_json1_0DescribeTableCommand;
const deserializeAws_json1_0DescribeTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand;
const deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeTimeToLiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeTimeToLiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTimeToLiveOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeTimeToLiveCommand = deserializeAws_json1_0DescribeTimeToLiveCommand;
const deserializeAws_json1_0DescribeTimeToLiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DisableKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0KinesisStreamingDestinationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DisableKinesisStreamingDestinationCommand = deserializeAws_json1_0DisableKinesisStreamingDestinationCommand;
const deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0EnableKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0KinesisStreamingDestinationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0EnableKinesisStreamingDestinationCommand = deserializeAws_json1_0EnableKinesisStreamingDestinationCommand;
const deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ExecuteStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExecuteStatementOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ExecuteStatementCommand = deserializeAws_json1_0ExecuteStatementCommand;
const deserializeAws_json1_0ExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            response = {
                ...(await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateItemException":
        case "com.amazonaws.dynamodb#DuplicateItemException":
            response = {
                ...(await deserializeAws_json1_0DuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            response = {
                ...(await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ExecuteTransactionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ExecuteTransactionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExecuteTransactionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ExecuteTransactionCommand = deserializeAws_json1_0ExecuteTransactionCommand;
const deserializeAws_json1_0ExecuteTransactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb#TransactionCanceledException":
            response = {
                ...(await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionInProgressException":
        case "com.amazonaws.dynamodb#TransactionInProgressException":
            response = {
                ...(await deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ExportTableToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ExportTableToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExportTableToPointInTimeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ExportTableToPointInTimeCommand = deserializeAws_json1_0ExportTableToPointInTimeCommand;
const deserializeAws_json1_0ExportTableToPointInTimeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExportConflictException":
        case "com.amazonaws.dynamodb#ExportConflictException":
            response = {
                ...(await deserializeAws_json1_0ExportConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidExportTimeException":
        case "com.amazonaws.dynamodb#InvalidExportTimeException":
            response = {
                ...(await deserializeAws_json1_0InvalidExportTimeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PointInTimeRecoveryUnavailableException":
        case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
            response = {
                ...(await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0GetItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetItemCommand = deserializeAws_json1_0GetItemCommand;
const deserializeAws_json1_0GetItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListBackupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListBackupsCommand = deserializeAws_json1_0ListBackupsCommand;
const deserializeAws_json1_0ListBackupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListContributorInsightsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListContributorInsightsCommand = deserializeAws_json1_0ListContributorInsightsCommand;
const deserializeAws_json1_0ListContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListExportsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListExportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListExportsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListExportsCommand = deserializeAws_json1_0ListExportsCommand;
const deserializeAws_json1_0ListExportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListGlobalTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListGlobalTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListGlobalTablesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListGlobalTablesCommand = deserializeAws_json1_0ListGlobalTablesCommand;
const deserializeAws_json1_0ListGlobalTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTablesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListTablesCommand = deserializeAws_json1_0ListTablesCommand;
const deserializeAws_json1_0ListTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListTagsOfResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListTagsOfResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTagsOfResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListTagsOfResourceCommand = deserializeAws_json1_0ListTagsOfResourceCommand;
const deserializeAws_json1_0ListTagsOfResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0PutItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0PutItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0PutItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0PutItemCommand = deserializeAws_json1_0PutItemCommand;
const deserializeAws_json1_0PutItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            response = {
                ...(await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            response = {
                ...(await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0QueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0QueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0QueryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0QueryCommand = deserializeAws_json1_0QueryCommand;
const deserializeAws_json1_0QueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RestoreTableFromBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RestoreTableFromBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0RestoreTableFromBackupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RestoreTableFromBackupCommand = deserializeAws_json1_0RestoreTableFromBackupCommand;
const deserializeAws_json1_0RestoreTableFromBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupInUseException":
        case "com.amazonaws.dynamodb#BackupInUseException":
            response = {
                ...(await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb#BackupNotFoundException":
            response = {
                ...(await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableAlreadyExistsException":
        case "com.amazonaws.dynamodb#TableAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableInUseException":
        case "com.amazonaws.dynamodb#TableInUseException":
            response = {
                ...(await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0RestoreTableToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0RestoreTableToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0RestoreTableToPointInTimeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0RestoreTableToPointInTimeCommand = deserializeAws_json1_0RestoreTableToPointInTimeCommand;
const deserializeAws_json1_0RestoreTableToPointInTimeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRestoreTimeException":
        case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
            response = {
                ...(await deserializeAws_json1_0InvalidRestoreTimeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PointInTimeRecoveryUnavailableException":
        case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
            response = {
                ...(await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableAlreadyExistsException":
        case "com.amazonaws.dynamodb#TableAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableInUseException":
        case "com.amazonaws.dynamodb#TableInUseException":
            response = {
                ...(await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ScanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ScanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ScanOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ScanCommand = deserializeAws_json1_0ScanCommand;
const deserializeAws_json1_0ScanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0TagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0TagResourceCommand = deserializeAws_json1_0TagResourceCommand;
const deserializeAws_json1_0TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0TransactGetItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0TransactGetItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TransactGetItemsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0TransactGetItemsCommand = deserializeAws_json1_0TransactGetItemsCommand;
const deserializeAws_json1_0TransactGetItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb#TransactionCanceledException":
            response = {
                ...(await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0TransactWriteItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0TransactWriteItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TransactWriteItemsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0TransactWriteItemsCommand = deserializeAws_json1_0TransactWriteItemsCommand;
const deserializeAws_json1_0TransactWriteItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb#TransactionCanceledException":
            response = {
                ...(await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionInProgressException":
        case "com.amazonaws.dynamodb#TransactionInProgressException":
            response = {
                ...(await deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UntagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UntagResourceCommand = deserializeAws_json1_0UntagResourceCommand;
const deserializeAws_json1_0UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateContinuousBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateContinuousBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateContinuousBackupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateContinuousBackupsCommand = deserializeAws_json1_0UpdateContinuousBackupsCommand;
const deserializeAws_json1_0UpdateContinuousBackupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContinuousBackupsUnavailableException":
        case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateContributorInsightsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateContributorInsightsCommand = deserializeAws_json1_0UpdateContributorInsightsCommand;
const deserializeAws_json1_0UpdateContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateGlobalTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateGlobalTableCommand = deserializeAws_json1_0UpdateGlobalTableCommand;
const deserializeAws_json1_0UpdateGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicaAlreadyExistsException":
        case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicaNotFoundException":
        case "com.amazonaws.dynamodb#ReplicaNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateGlobalTableSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateGlobalTableSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateGlobalTableSettingsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateGlobalTableSettingsCommand = deserializeAws_json1_0UpdateGlobalTableSettingsCommand;
const deserializeAws_json1_0UpdateGlobalTableSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            response = {
                ...(await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IndexNotFoundException":
        case "com.amazonaws.dynamodb#IndexNotFoundException":
            response = {
                ...(await deserializeAws_json1_0IndexNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicaNotFoundException":
        case "com.amazonaws.dynamodb#ReplicaNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateItemCommand = deserializeAws_json1_0UpdateItemCommand;
const deserializeAws_json1_0UpdateItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            response = {
                ...(await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            response = {
                ...(await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateTableCommand = deserializeAws_json1_0UpdateTableCommand;
const deserializeAws_json1_0UpdateTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand;
const deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateTimeToLiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateTimeToLiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTimeToLiveOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateTimeToLiveCommand = deserializeAws_json1_0UpdateTimeToLiveCommand;
const deserializeAws_json1_0UpdateTimeToLiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0BackupInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0BackupInUseException(body, context);
    const contents = {
        name: "BackupInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0BackupNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0BackupNotFoundException(body, context);
    const contents = {
        name: "BackupNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ConditionalCheckFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ConditionalCheckFailedException(body, context);
    const contents = {
        name: "ConditionalCheckFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ContinuousBackupsUnavailableException(body, context);
    const contents = {
        name: "ContinuousBackupsUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0DuplicateItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0DuplicateItemException(body, context);
    const contents = {
        name: "DuplicateItemException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ExportConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExportConflictException(body, context);
    const contents = {
        name: "ExportConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ExportNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExportNotFoundException(body, context);
    const contents = {
        name: "ExportNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0GlobalTableAlreadyExistsException(body, context);
    const contents = {
        name: "GlobalTableAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0GlobalTableNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0GlobalTableNotFoundException(body, context);
    const contents = {
        name: "GlobalTableNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0IdempotentParameterMismatchException(body, context);
    const contents = {
        name: "IdempotentParameterMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0IndexNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0IndexNotFoundException(body, context);
    const contents = {
        name: "IndexNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidEndpointException(body, context);
    const contents = {
        name: "InvalidEndpointException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidExportTimeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidExportTimeException(body, context);
    const contents = {
        name: "InvalidExportTimeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidRestoreTimeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidRestoreTimeException(body, context);
    const contents = {
        name: "InvalidRestoreTimeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ItemCollectionSizeLimitExceededException(body, context);
    const contents = {
        name: "ItemCollectionSizeLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0PointInTimeRecoveryUnavailableException(body, context);
    const contents = {
        name: "PointInTimeRecoveryUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ProvisionedThroughputExceededException(body, context);
    const contents = {
        name: "ProvisionedThroughputExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ReplicaAlreadyExistsException(body, context);
    const contents = {
        name: "ReplicaAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ReplicaNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ReplicaNotFoundException(body, context);
    const contents = {
        name: "ReplicaNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0RequestLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0RequestLimitExceeded(body, context);
    const contents = {
        name: "RequestLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceInUseException(body, context);
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TableAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableAlreadyExistsException(body, context);
    const contents = {
        name: "TableAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TableInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableInUseException(body, context);
    const contents = {
        name: "TableInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TableNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableNotFoundException(body, context);
    const contents = {
        name: "TableNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TransactionCanceledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionCanceledException(body, context);
    const contents = {
        name: "TransactionCanceledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TransactionConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionConflictException(body, context);
    const contents = {
        name: "TransactionConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TransactionInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionInProgressException(body, context);
    const contents = {
        name: "TransactionInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0AttributeDefinition = (input, context) => {
    return {
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.AttributeType !== undefined && input.AttributeType !== null && { AttributeType: input.AttributeType }),
    };
};
const serializeAws_json1_0AttributeDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0AttributeDefinition(entry, context);
    });
};
const serializeAws_json1_0AttributeNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0AttributeUpdates = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0AttributeValueUpdate(value, context),
        };
    }, {});
};
const serializeAws_json1_0AttributeValue = (input, context) => {
    return models_0_1.AttributeValue.visit(input, {
        B: (value) => ({ B: context.base64Encoder(value) }),
        BOOL: (value) => ({ BOOL: value }),
        BS: (value) => ({ BS: serializeAws_json1_0BinarySetAttributeValue(value, context) }),
        L: (value) => ({ L: serializeAws_json1_0ListAttributeValue(value, context) }),
        M: (value) => ({ M: serializeAws_json1_0MapAttributeValue(value, context) }),
        N: (value) => ({ N: value }),
        NS: (value) => ({ NS: serializeAws_json1_0NumberSetAttributeValue(value, context) }),
        NULL: (value) => ({ NULL: value }),
        S: (value) => ({ S: value }),
        SS: (value) => ({ SS: serializeAws_json1_0StringSetAttributeValue(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_json1_0AttributeValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0AttributeValue(entry, context);
    });
};
const serializeAws_json1_0AttributeValueUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Value !== undefined &&
            input.Value !== null && { Value: serializeAws_json1_0AttributeValue(input.Value, context) }),
    };
};
const serializeAws_json1_0AutoScalingPolicyUpdate = (input, context) => {
    return {
        ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
        ...(input.TargetTrackingScalingPolicyConfiguration !== undefined &&
            input.TargetTrackingScalingPolicyConfiguration !== null && {
            TargetTrackingScalingPolicyConfiguration: serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(input.TargetTrackingScalingPolicyConfiguration, context),
        }),
    };
};
const serializeAws_json1_0AutoScalingSettingsUpdate = (input, context) => {
    return {
        ...(input.AutoScalingDisabled !== undefined &&
            input.AutoScalingDisabled !== null && { AutoScalingDisabled: input.AutoScalingDisabled }),
        ...(input.AutoScalingRoleArn !== undefined &&
            input.AutoScalingRoleArn !== null && { AutoScalingRoleArn: input.AutoScalingRoleArn }),
        ...(input.MaximumUnits !== undefined && input.MaximumUnits !== null && { MaximumUnits: input.MaximumUnits }),
        ...(input.MinimumUnits !== undefined && input.MinimumUnits !== null && { MinimumUnits: input.MinimumUnits }),
        ...(input.ScalingPolicyUpdate !== undefined &&
            input.ScalingPolicyUpdate !== null && {
            ScalingPolicyUpdate: serializeAws_json1_0AutoScalingPolicyUpdate(input.ScalingPolicyUpdate, context),
        }),
    };
};
const serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (input, context) => {
    return {
        ...(input.DisableScaleIn !== undefined &&
            input.DisableScaleIn !== null && { DisableScaleIn: input.DisableScaleIn }),
        ...(input.ScaleInCooldown !== undefined &&
            input.ScaleInCooldown !== null && { ScaleInCooldown: input.ScaleInCooldown }),
        ...(input.ScaleOutCooldown !== undefined &&
            input.ScaleOutCooldown !== null && { ScaleOutCooldown: input.ScaleOutCooldown }),
        ...(input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }),
    };
};
const serializeAws_json1_0BatchExecuteStatementInput = (input, context) => {
    return {
        ...(input.Statements !== undefined &&
            input.Statements !== null && { Statements: serializeAws_json1_0PartiQLBatchRequest(input.Statements, context) }),
    };
};
const serializeAws_json1_0BatchGetItemInput = (input, context) => {
    return {
        ...(input.RequestItems !== undefined &&
            input.RequestItems !== null && {
            RequestItems: serializeAws_json1_0BatchGetRequestMap(input.RequestItems, context),
        }),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    };
};
const serializeAws_json1_0BatchGetRequestMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0KeysAndAttributes(value, context),
        };
    }, {});
};
const serializeAws_json1_0BatchStatementRequest = (input, context) => {
    return {
        ...(input.ConsistentRead !== undefined &&
            input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
        }),
        ...(input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement }),
    };
};
const serializeAws_json1_0BatchWriteItemInput = (input, context) => {
    return {
        ...(input.RequestItems !== undefined &&
            input.RequestItems !== null && {
            RequestItems: serializeAws_json1_0BatchWriteItemRequestMap(input.RequestItems, context),
        }),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.ReturnItemCollectionMetrics !== undefined &&
            input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics }),
    };
};
const serializeAws_json1_0BatchWriteItemRequestMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0WriteRequests(value, context),
        };
    }, {});
};
const serializeAws_json1_0BinarySetAttributeValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return context.base64Encoder(entry);
    });
};
const serializeAws_json1_0Condition = (input, context) => {
    return {
        ...(input.AttributeValueList !== undefined &&
            input.AttributeValueList !== null && {
            AttributeValueList: serializeAws_json1_0AttributeValueList(input.AttributeValueList, context),
        }),
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    };
};
const serializeAws_json1_0ConditionCheck = (input, context) => {
    return {
        ...(input.ConditionExpression !== undefined &&
            input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }),
        ...(input.ReturnValuesOnConditionCheckFailure !== undefined &&
            input.ReturnValuesOnConditionCheckFailure !== null && {
            ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0CreateBackupInput = (input, context) => {
    return {
        ...(input.BackupName !== undefined && input.BackupName !== null && { BackupName: input.BackupName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0CreateGlobalSecondaryIndexAction = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.KeySchema !== undefined &&
            input.KeySchema !== null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
        ...(input.Projection !== undefined &&
            input.Projection !== null && { Projection: serializeAws_json1_0Projection(input.Projection, context) }),
        ...(input.ProvisionedThroughput !== undefined &&
            input.ProvisionedThroughput !== null && {
            ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
        }),
    };
};
const serializeAws_json1_0CreateGlobalTableInput = (input, context) => {
    return {
        ...(input.GlobalTableName !== undefined &&
            input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName }),
        ...(input.ReplicationGroup !== undefined &&
            input.ReplicationGroup !== null && {
            ReplicationGroup: serializeAws_json1_0ReplicaList(input.ReplicationGroup, context),
        }),
    };
};
const serializeAws_json1_0CreateReplicaAction = (input, context) => {
    return {
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    };
};
const serializeAws_json1_0CreateReplicationGroupMemberAction = (input, context) => {
    return {
        ...(input.GlobalSecondaryIndexes !== undefined &&
            input.GlobalSecondaryIndexes !== null && {
            GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
        }),
        ...(input.KMSMasterKeyId !== undefined &&
            input.KMSMasterKeyId !== null && { KMSMasterKeyId: input.KMSMasterKeyId }),
        ...(input.ProvisionedThroughputOverride !== undefined &&
            input.ProvisionedThroughputOverride !== null && {
            ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
        }),
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    };
};
const serializeAws_json1_0CreateTableInput = (input, context) => {
    return {
        ...(input.AttributeDefinitions !== undefined &&
            input.AttributeDefinitions !== null && {
            AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context),
        }),
        ...(input.BillingMode !== undefined && input.BillingMode !== null && { BillingMode: input.BillingMode }),
        ...(input.GlobalSecondaryIndexes !== undefined &&
            input.GlobalSecondaryIndexes !== null && {
            GlobalSecondaryIndexes: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
        }),
        ...(input.KeySchema !== undefined &&
            input.KeySchema !== null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
        ...(input.LocalSecondaryIndexes !== undefined &&
            input.LocalSecondaryIndexes !== null && {
            LocalSecondaryIndexes: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexes, context),
        }),
        ...(input.ProvisionedThroughput !== undefined &&
            input.ProvisionedThroughput !== null && {
            ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
        }),
        ...(input.SSESpecification !== undefined &&
            input.SSESpecification !== null && {
            SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context),
        }),
        ...(input.StreamSpecification !== undefined &&
            input.StreamSpecification !== null && {
            StreamSpecification: serializeAws_json1_0StreamSpecification(input.StreamSpecification, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0Delete = (input, context) => {
    return {
        ...(input.ConditionExpression !== undefined &&
            input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }),
        ...(input.ReturnValuesOnConditionCheckFailure !== undefined &&
            input.ReturnValuesOnConditionCheckFailure !== null && {
            ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DeleteBackupInput = (input, context) => {
    return {
        ...(input.BackupArn !== undefined && input.BackupArn !== null && { BackupArn: input.BackupArn }),
    };
};
const serializeAws_json1_0DeleteGlobalSecondaryIndexAction = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
    };
};
const serializeAws_json1_0DeleteItemInput = (input, context) => {
    return {
        ...(input.ConditionExpression !== undefined &&
            input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
        ...(input.ConditionalOperator !== undefined &&
            input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator }),
        ...(input.Expected !== undefined &&
            input.Expected !== null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.ReturnItemCollectionMetrics !== undefined &&
            input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics }),
        ...(input.ReturnValues !== undefined && input.ReturnValues !== null && { ReturnValues: input.ReturnValues }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DeleteReplicaAction = (input, context) => {
    return {
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    };
};
const serializeAws_json1_0DeleteReplicationGroupMemberAction = (input, context) => {
    return {
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    };
};
const serializeAws_json1_0DeleteRequest = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }),
    };
};
const serializeAws_json1_0DeleteTableInput = (input, context) => {
    return {
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DescribeBackupInput = (input, context) => {
    return {
        ...(input.BackupArn !== undefined && input.BackupArn !== null && { BackupArn: input.BackupArn }),
    };
};
const serializeAws_json1_0DescribeContinuousBackupsInput = (input, context) => {
    return {
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DescribeContributorInsightsInput = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DescribeEndpointsRequest = (input, context) => {
    return {};
};
const serializeAws_json1_0DescribeExportInput = (input, context) => {
    return {
        ...(input.ExportArn !== undefined && input.ExportArn !== null && { ExportArn: input.ExportArn }),
    };
};
const serializeAws_json1_0DescribeGlobalTableInput = (input, context) => {
    return {
        ...(input.GlobalTableName !== undefined &&
            input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName }),
    };
};
const serializeAws_json1_0DescribeGlobalTableSettingsInput = (input, context) => {
    return {
        ...(input.GlobalTableName !== undefined &&
            input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName }),
    };
};
const serializeAws_json1_0DescribeKinesisStreamingDestinationInput = (input, context) => {
    return {
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DescribeLimitsInput = (input, context) => {
    return {};
};
const serializeAws_json1_0DescribeTableInput = (input, context) => {
    return {
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DescribeTableReplicaAutoScalingInput = (input, context) => {
    return {
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DescribeTimeToLiveInput = (input, context) => {
    return {
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0ExecuteStatementInput = (input, context) => {
    return {
        ...(input.ConsistentRead !== undefined &&
            input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
        }),
        ...(input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement }),
    };
};
const serializeAws_json1_0ExecuteTransactionInput = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.TransactStatements !== undefined &&
            input.TransactStatements !== null && {
            TransactStatements: serializeAws_json1_0ParameterizedStatements(input.TransactStatements, context),
        }),
    };
};
const serializeAws_json1_0ExpectedAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0ExpectedAttributeValue(value, context),
        };
    }, {});
};
const serializeAws_json1_0ExpectedAttributeValue = (input, context) => {
    return {
        ...(input.AttributeValueList !== undefined &&
            input.AttributeValueList !== null && {
            AttributeValueList: serializeAws_json1_0AttributeValueList(input.AttributeValueList, context),
        }),
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.Exists !== undefined && input.Exists !== null && { Exists: input.Exists }),
        ...(input.Value !== undefined &&
            input.Value !== null && { Value: serializeAws_json1_0AttributeValue(input.Value, context) }),
    };
};
const serializeAws_json1_0ExportTableToPointInTimeInput = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ExportFormat !== undefined && input.ExportFormat !== null && { ExportFormat: input.ExportFormat }),
        ...(input.ExportTime !== undefined &&
            input.ExportTime !== null && { ExportTime: Math.round(input.ExportTime.getTime() / 1000) }),
        ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
        ...(input.S3BucketOwner !== undefined && input.S3BucketOwner !== null && { S3BucketOwner: input.S3BucketOwner }),
        ...(input.S3Prefix !== undefined && input.S3Prefix !== null && { S3Prefix: input.S3Prefix }),
        ...(input.S3SseAlgorithm !== undefined &&
            input.S3SseAlgorithm !== null && { S3SseAlgorithm: input.S3SseAlgorithm }),
        ...(input.S3SseKmsKeyId !== undefined && input.S3SseKmsKeyId !== null && { S3SseKmsKeyId: input.S3SseKmsKeyId }),
        ...(input.TableArn !== undefined && input.TableArn !== null && { TableArn: input.TableArn }),
    };
};
const serializeAws_json1_0ExpressionAttributeNameMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_0ExpressionAttributeValueMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const serializeAws_json1_0FilterConditionMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0Condition(value, context),
        };
    }, {});
};
const serializeAws_json1_0Get = (input, context) => {
    return {
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }),
        ...(input.ProjectionExpression !== undefined &&
            input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0GetItemInput = (input, context) => {
    return {
        ...(input.AttributesToGet !== undefined &&
            input.AttributesToGet !== null && {
            AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
        }),
        ...(input.ConsistentRead !== undefined &&
            input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }),
        ...(input.ProjectionExpression !== undefined &&
            input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression }),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0GlobalSecondaryIndex = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.KeySchema !== undefined &&
            input.KeySchema !== null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
        ...(input.Projection !== undefined &&
            input.Projection !== null && { Projection: serializeAws_json1_0Projection(input.Projection, context) }),
        ...(input.ProvisionedThroughput !== undefined &&
            input.ProvisionedThroughput !== null && {
            ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
        }),
    };
};
const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined &&
            input.ProvisionedWriteCapacityAutoScalingUpdate !== null && {
            ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingUpdate, context),
        }),
    };
};
const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};
const serializeAws_json1_0GlobalSecondaryIndexList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0GlobalSecondaryIndex(entry, context);
    });
};
const serializeAws_json1_0GlobalSecondaryIndexUpdate = (input, context) => {
    return {
        ...(input.Create !== undefined &&
            input.Create !== null && { Create: serializeAws_json1_0CreateGlobalSecondaryIndexAction(input.Create, context) }),
        ...(input.Delete !== undefined &&
            input.Delete !== null && { Delete: serializeAws_json1_0DeleteGlobalSecondaryIndexAction(input.Delete, context) }),
        ...(input.Update !== undefined &&
            input.Update !== null && { Update: serializeAws_json1_0UpdateGlobalSecondaryIndexAction(input.Update, context) }),
    };
};
const serializeAws_json1_0GlobalSecondaryIndexUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0GlobalSecondaryIndexUpdate(entry, context);
    });
};
const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !== undefined &&
            input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !== null && {
            ProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingSettingsUpdate, context),
        }),
        ...(input.ProvisionedWriteCapacityUnits !== undefined &&
            input.ProvisionedWriteCapacityUnits !== null && {
            ProvisionedWriteCapacityUnits: input.ProvisionedWriteCapacityUnits,
        }),
    };
};
const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};
const serializeAws_json1_0Key = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const serializeAws_json1_0KeyConditions = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0Condition(value, context),
        };
    }, {});
};
const serializeAws_json1_0KeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Key(entry, context);
    });
};
const serializeAws_json1_0KeysAndAttributes = (input, context) => {
    return {
        ...(input.AttributesToGet !== undefined &&
            input.AttributesToGet !== null && {
            AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
        }),
        ...(input.ConsistentRead !== undefined &&
            input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.Keys !== undefined && input.Keys !== null && { Keys: serializeAws_json1_0KeyList(input.Keys, context) }),
        ...(input.ProjectionExpression !== undefined &&
            input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression }),
    };
};
const serializeAws_json1_0KeySchema = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0KeySchemaElement(entry, context);
    });
};
const serializeAws_json1_0KeySchemaElement = (input, context) => {
    return {
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.KeyType !== undefined && input.KeyType !== null && { KeyType: input.KeyType }),
    };
};
const serializeAws_json1_0KinesisStreamingDestinationInput = (input, context) => {
    return {
        ...(input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0ListAttributeValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0AttributeValue(entry, context);
    });
};
const serializeAws_json1_0ListBackupsInput = (input, context) => {
    return {
        ...(input.BackupType !== undefined && input.BackupType !== null && { BackupType: input.BackupType }),
        ...(input.ExclusiveStartBackupArn !== undefined &&
            input.ExclusiveStartBackupArn !== null && { ExclusiveStartBackupArn: input.ExclusiveStartBackupArn }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.TimeRangeLowerBound !== undefined &&
            input.TimeRangeLowerBound !== null && {
            TimeRangeLowerBound: Math.round(input.TimeRangeLowerBound.getTime() / 1000),
        }),
        ...(input.TimeRangeUpperBound !== undefined &&
            input.TimeRangeUpperBound !== null && {
            TimeRangeUpperBound: Math.round(input.TimeRangeUpperBound.getTime() / 1000),
        }),
    };
};
const serializeAws_json1_0ListContributorInsightsInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0ListExportsInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TableArn !== undefined && input.TableArn !== null && { TableArn: input.TableArn }),
    };
};
const serializeAws_json1_0ListGlobalTablesInput = (input, context) => {
    return {
        ...(input.ExclusiveStartGlobalTableName !== undefined &&
            input.ExclusiveStartGlobalTableName !== null && {
            ExclusiveStartGlobalTableName: input.ExclusiveStartGlobalTableName,
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    };
};
const serializeAws_json1_0ListTablesInput = (input, context) => {
    return {
        ...(input.ExclusiveStartTableName !== undefined &&
            input.ExclusiveStartTableName !== null && { ExclusiveStartTableName: input.ExclusiveStartTableName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    };
};
const serializeAws_json1_0ListTagsOfResourceInput = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0LocalSecondaryIndex = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.KeySchema !== undefined &&
            input.KeySchema !== null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
        ...(input.Projection !== undefined &&
            input.Projection !== null && { Projection: serializeAws_json1_0Projection(input.Projection, context) }),
    };
};
const serializeAws_json1_0LocalSecondaryIndexList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0LocalSecondaryIndex(entry, context);
    });
};
const serializeAws_json1_0MapAttributeValue = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const serializeAws_json1_0NonKeyAttributeNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0NumberSetAttributeValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0ParameterizedStatement = (input, context) => {
    return {
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
        }),
        ...(input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement }),
    };
};
const serializeAws_json1_0ParameterizedStatements = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ParameterizedStatement(entry, context);
    });
};
const serializeAws_json1_0PartiQLBatchRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0BatchStatementRequest(entry, context);
    });
};
const serializeAws_json1_0PointInTimeRecoverySpecification = (input, context) => {
    return {
        ...(input.PointInTimeRecoveryEnabled !== undefined &&
            input.PointInTimeRecoveryEnabled !== null && { PointInTimeRecoveryEnabled: input.PointInTimeRecoveryEnabled }),
    };
};
const serializeAws_json1_0PreparedStatementParameters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0AttributeValue(entry, context);
    });
};
const serializeAws_json1_0Projection = (input, context) => {
    return {
        ...(input.NonKeyAttributes !== undefined &&
            input.NonKeyAttributes !== null && {
            NonKeyAttributes: serializeAws_json1_0NonKeyAttributeNameList(input.NonKeyAttributes, context),
        }),
        ...(input.ProjectionType !== undefined &&
            input.ProjectionType !== null && { ProjectionType: input.ProjectionType }),
    };
};
const serializeAws_json1_0ProvisionedThroughput = (input, context) => {
    return {
        ...(input.ReadCapacityUnits !== undefined &&
            input.ReadCapacityUnits !== null && { ReadCapacityUnits: input.ReadCapacityUnits }),
        ...(input.WriteCapacityUnits !== undefined &&
            input.WriteCapacityUnits !== null && { WriteCapacityUnits: input.WriteCapacityUnits }),
    };
};
const serializeAws_json1_0ProvisionedThroughputOverride = (input, context) => {
    return {
        ...(input.ReadCapacityUnits !== undefined &&
            input.ReadCapacityUnits !== null && { ReadCapacityUnits: input.ReadCapacityUnits }),
    };
};
const serializeAws_json1_0Put = (input, context) => {
    return {
        ...(input.ConditionExpression !== undefined &&
            input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.Item !== undefined &&
            input.Item !== null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) }),
        ...(input.ReturnValuesOnConditionCheckFailure !== undefined &&
            input.ReturnValuesOnConditionCheckFailure !== null && {
            ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0PutItemInput = (input, context) => {
    return {
        ...(input.ConditionExpression !== undefined &&
            input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
        ...(input.ConditionalOperator !== undefined &&
            input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator }),
        ...(input.Expected !== undefined &&
            input.Expected !== null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.Item !== undefined &&
            input.Item !== null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) }),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.ReturnItemCollectionMetrics !== undefined &&
            input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics }),
        ...(input.ReturnValues !== undefined && input.ReturnValues !== null && { ReturnValues: input.ReturnValues }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0PutItemInputAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const serializeAws_json1_0PutRequest = (input, context) => {
    return {
        ...(input.Item !== undefined &&
            input.Item !== null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) }),
    };
};
const serializeAws_json1_0QueryInput = (input, context) => {
    return {
        ...(input.AttributesToGet !== undefined &&
            input.AttributesToGet !== null && {
            AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
        }),
        ...(input.ConditionalOperator !== undefined &&
            input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator }),
        ...(input.ConsistentRead !== undefined &&
            input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead }),
        ...(input.ExclusiveStartKey !== undefined &&
            input.ExclusiveStartKey !== null && {
            ExclusiveStartKey: serializeAws_json1_0Key(input.ExclusiveStartKey, context),
        }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.FilterExpression !== undefined &&
            input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.KeyConditionExpression !== undefined &&
            input.KeyConditionExpression !== null && { KeyConditionExpression: input.KeyConditionExpression }),
        ...(input.KeyConditions !== undefined &&
            input.KeyConditions !== null && {
            KeyConditions: serializeAws_json1_0KeyConditions(input.KeyConditions, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.ProjectionExpression !== undefined &&
            input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression }),
        ...(input.QueryFilter !== undefined &&
            input.QueryFilter !== null && {
            QueryFilter: serializeAws_json1_0FilterConditionMap(input.QueryFilter, context),
        }),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.ScanIndexForward !== undefined &&
            input.ScanIndexForward !== null && { ScanIndexForward: input.ScanIndexForward }),
        ...(input.Select !== undefined && input.Select !== null && { Select: input.Select }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0Replica = (input, context) => {
    return {
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    };
};
const serializeAws_json1_0ReplicaAutoScalingUpdate = (input, context) => {
    return {
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
        ...(input.ReplicaGlobalSecondaryIndexUpdates !== undefined &&
            input.ReplicaGlobalSecondaryIndexUpdates !== null && {
            ReplicaGlobalSecondaryIndexUpdates: serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList(input.ReplicaGlobalSecondaryIndexUpdates, context),
        }),
        ...(input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== undefined &&
            input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== null && {
            ReplicaProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ReplicaProvisionedReadCapacityAutoScalingUpdate, context),
        }),
    };
};
const serializeAws_json1_0ReplicaAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaAutoScalingUpdate(entry, context);
    });
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndex = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.ProvisionedThroughputOverride !== undefined &&
            input.ProvisionedThroughputOverride !== null && {
            ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
        }),
    };
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.ProvisionedReadCapacityAutoScalingUpdate !== undefined &&
            input.ProvisionedReadCapacityAutoScalingUpdate !== null && {
            ProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedReadCapacityAutoScalingUpdate, context),
        }),
    };
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaGlobalSecondaryIndex(entry, context);
    });
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.ProvisionedReadCapacityAutoScalingSettingsUpdate !== undefined &&
            input.ProvisionedReadCapacityAutoScalingSettingsUpdate !== null && {
            ProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedReadCapacityAutoScalingSettingsUpdate, context),
        }),
        ...(input.ProvisionedReadCapacityUnits !== undefined &&
            input.ProvisionedReadCapacityUnits !== null && {
            ProvisionedReadCapacityUnits: input.ProvisionedReadCapacityUnits,
        }),
    };
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};
const serializeAws_json1_0ReplicaList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Replica(entry, context);
    });
};
const serializeAws_json1_0ReplicaSettingsUpdate = (input, context) => {
    return {
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
        ...(input.ReplicaGlobalSecondaryIndexSettingsUpdate !== undefined &&
            input.ReplicaGlobalSecondaryIndexSettingsUpdate !== null && {
            ReplicaGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList(input.ReplicaGlobalSecondaryIndexSettingsUpdate, context),
        }),
        ...(input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !== undefined &&
            input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !== null && {
            ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate, context),
        }),
        ...(input.ReplicaProvisionedReadCapacityUnits !== undefined &&
            input.ReplicaProvisionedReadCapacityUnits !== null && {
            ReplicaProvisionedReadCapacityUnits: input.ReplicaProvisionedReadCapacityUnits,
        }),
    };
};
const serializeAws_json1_0ReplicaSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaSettingsUpdate(entry, context);
    });
};
const serializeAws_json1_0ReplicationGroupUpdate = (input, context) => {
    return {
        ...(input.Create !== undefined &&
            input.Create !== null && {
            Create: serializeAws_json1_0CreateReplicationGroupMemberAction(input.Create, context),
        }),
        ...(input.Delete !== undefined &&
            input.Delete !== null && {
            Delete: serializeAws_json1_0DeleteReplicationGroupMemberAction(input.Delete, context),
        }),
        ...(input.Update !== undefined &&
            input.Update !== null && {
            Update: serializeAws_json1_0UpdateReplicationGroupMemberAction(input.Update, context),
        }),
    };
};
const serializeAws_json1_0ReplicationGroupUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicationGroupUpdate(entry, context);
    });
};
const serializeAws_json1_0ReplicaUpdate = (input, context) => {
    return {
        ...(input.Create !== undefined &&
            input.Create !== null && { Create: serializeAws_json1_0CreateReplicaAction(input.Create, context) }),
        ...(input.Delete !== undefined &&
            input.Delete !== null && { Delete: serializeAws_json1_0DeleteReplicaAction(input.Delete, context) }),
    };
};
const serializeAws_json1_0ReplicaUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaUpdate(entry, context);
    });
};
const serializeAws_json1_0RestoreTableFromBackupInput = (input, context) => {
    return {
        ...(input.BackupArn !== undefined && input.BackupArn !== null && { BackupArn: input.BackupArn }),
        ...(input.BillingModeOverride !== undefined &&
            input.BillingModeOverride !== null && { BillingModeOverride: input.BillingModeOverride }),
        ...(input.GlobalSecondaryIndexOverride !== undefined &&
            input.GlobalSecondaryIndexOverride !== null && {
            GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context),
        }),
        ...(input.LocalSecondaryIndexOverride !== undefined &&
            input.LocalSecondaryIndexOverride !== null && {
            LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context),
        }),
        ...(input.ProvisionedThroughputOverride !== undefined &&
            input.ProvisionedThroughputOverride !== null && {
            ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughputOverride, context),
        }),
        ...(input.SSESpecificationOverride !== undefined &&
            input.SSESpecificationOverride !== null && {
            SSESpecificationOverride: serializeAws_json1_0SSESpecification(input.SSESpecificationOverride, context),
        }),
        ...(input.TargetTableName !== undefined &&
            input.TargetTableName !== null && { TargetTableName: input.TargetTableName }),
    };
};
const serializeAws_json1_0RestoreTableToPointInTimeInput = (input, context) => {
    return {
        ...(input.BillingModeOverride !== undefined &&
            input.BillingModeOverride !== null && { BillingModeOverride: input.BillingModeOverride }),
        ...(input.GlobalSecondaryIndexOverride !== undefined &&
            input.GlobalSecondaryIndexOverride !== null && {
            GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context),
        }),
        ...(input.LocalSecondaryIndexOverride !== undefined &&
            input.LocalSecondaryIndexOverride !== null && {
            LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context),
        }),
        ...(input.ProvisionedThroughputOverride !== undefined &&
            input.ProvisionedThroughputOverride !== null && {
            ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughputOverride, context),
        }),
        ...(input.RestoreDateTime !== undefined &&
            input.RestoreDateTime !== null && { RestoreDateTime: Math.round(input.RestoreDateTime.getTime() / 1000) }),
        ...(input.SSESpecificationOverride !== undefined &&
            input.SSESpecificationOverride !== null && {
            SSESpecificationOverride: serializeAws_json1_0SSESpecification(input.SSESpecificationOverride, context),
        }),
        ...(input.SourceTableArn !== undefined &&
            input.SourceTableArn !== null && { SourceTableArn: input.SourceTableArn }),
        ...(input.SourceTableName !== undefined &&
            input.SourceTableName !== null && { SourceTableName: input.SourceTableName }),
        ...(input.TargetTableName !== undefined &&
            input.TargetTableName !== null && { TargetTableName: input.TargetTableName }),
        ...(input.UseLatestRestorableTime !== undefined &&
            input.UseLatestRestorableTime !== null && { UseLatestRestorableTime: input.UseLatestRestorableTime }),
    };
};
const serializeAws_json1_0ScanInput = (input, context) => {
    return {
        ...(input.AttributesToGet !== undefined &&
            input.AttributesToGet !== null && {
            AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
        }),
        ...(input.ConditionalOperator !== undefined &&
            input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator }),
        ...(input.ConsistentRead !== undefined &&
            input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead }),
        ...(input.ExclusiveStartKey !== undefined &&
            input.ExclusiveStartKey !== null && {
            ExclusiveStartKey: serializeAws_json1_0Key(input.ExclusiveStartKey, context),
        }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.FilterExpression !== undefined &&
            input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.ProjectionExpression !== undefined &&
            input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression }),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.ScanFilter !== undefined &&
            input.ScanFilter !== null && { ScanFilter: serializeAws_json1_0FilterConditionMap(input.ScanFilter, context) }),
        ...(input.Segment !== undefined && input.Segment !== null && { Segment: input.Segment }),
        ...(input.Select !== undefined && input.Select !== null && { Select: input.Select }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.TotalSegments !== undefined && input.TotalSegments !== null && { TotalSegments: input.TotalSegments }),
    };
};
const serializeAws_json1_0SSESpecification = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.KMSMasterKeyId !== undefined &&
            input.KMSMasterKeyId !== null && { KMSMasterKeyId: input.KMSMasterKeyId }),
        ...(input.SSEType !== undefined && input.SSEType !== null && { SSEType: input.SSEType }),
    };
};
const serializeAws_json1_0StreamSpecification = (input, context) => {
    return {
        ...(input.StreamEnabled !== undefined && input.StreamEnabled !== null && { StreamEnabled: input.StreamEnabled }),
        ...(input.StreamViewType !== undefined &&
            input.StreamViewType !== null && { StreamViewType: input.StreamViewType }),
    };
};
const serializeAws_json1_0StringSetAttributeValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_0TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Tag(entry, context);
    });
};
const serializeAws_json1_0TagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0TimeToLiveSpecification = (input, context) => {
    return {
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_json1_0TransactGetItem = (input, context) => {
    return {
        ...(input.Get !== undefined && input.Get !== null && { Get: serializeAws_json1_0Get(input.Get, context) }),
    };
};
const serializeAws_json1_0TransactGetItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0TransactGetItem(entry, context);
    });
};
const serializeAws_json1_0TransactGetItemsInput = (input, context) => {
    return {
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.TransactItems !== undefined &&
            input.TransactItems !== null && {
            TransactItems: serializeAws_json1_0TransactGetItemList(input.TransactItems, context),
        }),
    };
};
const serializeAws_json1_0TransactWriteItem = (input, context) => {
    return {
        ...(input.ConditionCheck !== undefined &&
            input.ConditionCheck !== null && {
            ConditionCheck: serializeAws_json1_0ConditionCheck(input.ConditionCheck, context),
        }),
        ...(input.Delete !== undefined &&
            input.Delete !== null && { Delete: serializeAws_json1_0Delete(input.Delete, context) }),
        ...(input.Put !== undefined && input.Put !== null && { Put: serializeAws_json1_0Put(input.Put, context) }),
        ...(input.Update !== undefined &&
            input.Update !== null && { Update: serializeAws_json1_0Update(input.Update, context) }),
    };
};
const serializeAws_json1_0TransactWriteItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0TransactWriteItem(entry, context);
    });
};
const serializeAws_json1_0TransactWriteItemsInput = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.ReturnItemCollectionMetrics !== undefined &&
            input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics }),
        ...(input.TransactItems !== undefined &&
            input.TransactItems !== null && {
            TransactItems: serializeAws_json1_0TransactWriteItemList(input.TransactItems, context),
        }),
    };
};
const serializeAws_json1_0UntagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_0Update = (input, context) => {
    return {
        ...(input.ConditionExpression !== undefined &&
            input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }),
        ...(input.ReturnValuesOnConditionCheckFailure !== undefined &&
            input.ReturnValuesOnConditionCheckFailure !== null && {
            ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.UpdateExpression !== undefined &&
            input.UpdateExpression !== null && { UpdateExpression: input.UpdateExpression }),
    };
};
const serializeAws_json1_0UpdateContinuousBackupsInput = (input, context) => {
    return {
        ...(input.PointInTimeRecoverySpecification !== undefined &&
            input.PointInTimeRecoverySpecification !== null && {
            PointInTimeRecoverySpecification: serializeAws_json1_0PointInTimeRecoverySpecification(input.PointInTimeRecoverySpecification, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0UpdateContributorInsightsInput = (input, context) => {
    return {
        ...(input.ContributorInsightsAction !== undefined &&
            input.ContributorInsightsAction !== null && { ContributorInsightsAction: input.ContributorInsightsAction }),
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0UpdateGlobalSecondaryIndexAction = (input, context) => {
    return {
        ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
        ...(input.ProvisionedThroughput !== undefined &&
            input.ProvisionedThroughput !== null && {
            ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
        }),
    };
};
const serializeAws_json1_0UpdateGlobalTableInput = (input, context) => {
    return {
        ...(input.GlobalTableName !== undefined &&
            input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName }),
        ...(input.ReplicaUpdates !== undefined &&
            input.ReplicaUpdates !== null && {
            ReplicaUpdates: serializeAws_json1_0ReplicaUpdateList(input.ReplicaUpdates, context),
        }),
    };
};
const serializeAws_json1_0UpdateGlobalTableSettingsInput = (input, context) => {
    return {
        ...(input.GlobalTableBillingMode !== undefined &&
            input.GlobalTableBillingMode !== null && { GlobalTableBillingMode: input.GlobalTableBillingMode }),
        ...(input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== undefined &&
            input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== null && {
            GlobalTableGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList(input.GlobalTableGlobalSecondaryIndexSettingsUpdate, context),
        }),
        ...(input.GlobalTableName !== undefined &&
            input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName }),
        ...(input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !== undefined &&
            input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !== null && {
            GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate, context),
        }),
        ...(input.GlobalTableProvisionedWriteCapacityUnits !== undefined &&
            input.GlobalTableProvisionedWriteCapacityUnits !== null && {
            GlobalTableProvisionedWriteCapacityUnits: input.GlobalTableProvisionedWriteCapacityUnits,
        }),
        ...(input.ReplicaSettingsUpdate !== undefined &&
            input.ReplicaSettingsUpdate !== null && {
            ReplicaSettingsUpdate: serializeAws_json1_0ReplicaSettingsUpdateList(input.ReplicaSettingsUpdate, context),
        }),
    };
};
const serializeAws_json1_0UpdateItemInput = (input, context) => {
    return {
        ...(input.AttributeUpdates !== undefined &&
            input.AttributeUpdates !== null && {
            AttributeUpdates: serializeAws_json1_0AttributeUpdates(input.AttributeUpdates, context),
        }),
        ...(input.ConditionExpression !== undefined &&
            input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
        ...(input.ConditionalOperator !== undefined &&
            input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator }),
        ...(input.Expected !== undefined &&
            input.Expected !== null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) }),
        ...(input.ExpressionAttributeNames !== undefined &&
            input.ExpressionAttributeNames !== null && {
            ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
        }),
        ...(input.ExpressionAttributeValues !== undefined &&
            input.ExpressionAttributeValues !== null && {
            ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
        }),
        ...(input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }),
        ...(input.ReturnConsumedCapacity !== undefined &&
            input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
        ...(input.ReturnItemCollectionMetrics !== undefined &&
            input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics }),
        ...(input.ReturnValues !== undefined && input.ReturnValues !== null && { ReturnValues: input.ReturnValues }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.UpdateExpression !== undefined &&
            input.UpdateExpression !== null && { UpdateExpression: input.UpdateExpression }),
    };
};
const serializeAws_json1_0UpdateReplicationGroupMemberAction = (input, context) => {
    return {
        ...(input.GlobalSecondaryIndexes !== undefined &&
            input.GlobalSecondaryIndexes !== null && {
            GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
        }),
        ...(input.KMSMasterKeyId !== undefined &&
            input.KMSMasterKeyId !== null && { KMSMasterKeyId: input.KMSMasterKeyId }),
        ...(input.ProvisionedThroughputOverride !== undefined &&
            input.ProvisionedThroughputOverride !== null && {
            ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
        }),
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    };
};
const serializeAws_json1_0UpdateTableInput = (input, context) => {
    return {
        ...(input.AttributeDefinitions !== undefined &&
            input.AttributeDefinitions !== null && {
            AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context),
        }),
        ...(input.BillingMode !== undefined && input.BillingMode !== null && { BillingMode: input.BillingMode }),
        ...(input.GlobalSecondaryIndexUpdates !== undefined &&
            input.GlobalSecondaryIndexUpdates !== null && {
            GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexUpdateList(input.GlobalSecondaryIndexUpdates, context),
        }),
        ...(input.ProvisionedThroughput !== undefined &&
            input.ProvisionedThroughput !== null && {
            ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
        }),
        ...(input.ReplicaUpdates !== undefined &&
            input.ReplicaUpdates !== null && {
            ReplicaUpdates: serializeAws_json1_0ReplicationGroupUpdateList(input.ReplicaUpdates, context),
        }),
        ...(input.SSESpecification !== undefined &&
            input.SSESpecification !== null && {
            SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context),
        }),
        ...(input.StreamSpecification !== undefined &&
            input.StreamSpecification !== null && {
            StreamSpecification: serializeAws_json1_0StreamSpecification(input.StreamSpecification, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0UpdateTableReplicaAutoScalingInput = (input, context) => {
    return {
        ...(input.GlobalSecondaryIndexUpdates !== undefined &&
            input.GlobalSecondaryIndexUpdates !== null && {
            GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList(input.GlobalSecondaryIndexUpdates, context),
        }),
        ...(input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined &&
            input.ProvisionedWriteCapacityAutoScalingUpdate !== null && {
            ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingUpdate, context),
        }),
        ...(input.ReplicaUpdates !== undefined &&
            input.ReplicaUpdates !== null && {
            ReplicaUpdates: serializeAws_json1_0ReplicaAutoScalingUpdateList(input.ReplicaUpdates, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0UpdateTimeToLiveInput = (input, context) => {
    return {
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.TimeToLiveSpecification !== undefined &&
            input.TimeToLiveSpecification !== null && {
            TimeToLiveSpecification: serializeAws_json1_0TimeToLiveSpecification(input.TimeToLiveSpecification, context),
        }),
    };
};
const serializeAws_json1_0WriteRequest = (input, context) => {
    return {
        ...(input.DeleteRequest !== undefined &&
            input.DeleteRequest !== null && {
            DeleteRequest: serializeAws_json1_0DeleteRequest(input.DeleteRequest, context),
        }),
        ...(input.PutRequest !== undefined &&
            input.PutRequest !== null && { PutRequest: serializeAws_json1_0PutRequest(input.PutRequest, context) }),
    };
};
const serializeAws_json1_0WriteRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0WriteRequest(entry, context);
    });
};
const deserializeAws_json1_0ArchivalSummary = (output, context) => {
    return {
        ArchivalBackupArn: output.ArchivalBackupArn !== undefined && output.ArchivalBackupArn !== null
            ? output.ArchivalBackupArn
            : undefined,
        ArchivalDateTime: output.ArchivalDateTime !== undefined && output.ArchivalDateTime !== null
            ? new Date(Math.round(output.ArchivalDateTime * 1000))
            : undefined,
        ArchivalReason: output.ArchivalReason !== undefined && output.ArchivalReason !== null ? output.ArchivalReason : undefined,
    };
};
const deserializeAws_json1_0AttributeDefinition = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        AttributeType: output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
    };
};
const deserializeAws_json1_0AttributeDefinitions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AttributeDefinition(entry, context);
    });
};
const deserializeAws_json1_0AttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_0AttributeNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0AttributeValue = (output, context) => {
    if (output.B !== undefined && output.B !== null) {
        return {
            B: context.base64Decoder(output.B),
        };
    }
    if (output.BOOL !== undefined && output.BOOL !== null) {
        return {
            BOOL: output.BOOL,
        };
    }
    if (output.BS !== undefined && output.BS !== null) {
        return {
            BS: deserializeAws_json1_0BinarySetAttributeValue(output.BS, context),
        };
    }
    if (output.L !== undefined && output.L !== null) {
        return {
            L: deserializeAws_json1_0ListAttributeValue(output.L, context),
        };
    }
    if (output.M !== undefined && output.M !== null) {
        return {
            M: deserializeAws_json1_0MapAttributeValue(output.M, context),
        };
    }
    if (output.N !== undefined && output.N !== null) {
        return {
            N: output.N,
        };
    }
    if (output.NS !== undefined && output.NS !== null) {
        return {
            NS: deserializeAws_json1_0NumberSetAttributeValue(output.NS, context),
        };
    }
    if (output.NULL !== undefined && output.NULL !== null) {
        return {
            NULL: output.NULL,
        };
    }
    if (output.S !== undefined && output.S !== null) {
        return {
            S: output.S,
        };
    }
    if (output.SS !== undefined && output.SS !== null) {
        return {
            SS: deserializeAws_json1_0StringSetAttributeValue(output.SS, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_json1_0AutoScalingPolicyDescription = (output, context) => {
    return {
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        TargetTrackingScalingPolicyConfiguration: output.TargetTrackingScalingPolicyConfiguration !== undefined &&
            output.TargetTrackingScalingPolicyConfiguration !== null
            ? deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription(output.TargetTrackingScalingPolicyConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0AutoScalingPolicyDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AutoScalingPolicyDescription(entry, context);
    });
};
const deserializeAws_json1_0AutoScalingSettingsDescription = (output, context) => {
    return {
        AutoScalingDisabled: output.AutoScalingDisabled !== undefined && output.AutoScalingDisabled !== null
            ? output.AutoScalingDisabled
            : undefined,
        AutoScalingRoleArn: output.AutoScalingRoleArn !== undefined && output.AutoScalingRoleArn !== null
            ? output.AutoScalingRoleArn
            : undefined,
        MaximumUnits: output.MaximumUnits !== undefined && output.MaximumUnits !== null ? output.MaximumUnits : undefined,
        MinimumUnits: output.MinimumUnits !== undefined && output.MinimumUnits !== null ? output.MinimumUnits : undefined,
        ScalingPolicies: output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
            ? deserializeAws_json1_0AutoScalingPolicyDescriptionList(output.ScalingPolicies, context)
            : undefined,
    };
};
const deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (output, context) => {
    return {
        DisableScaleIn: output.DisableScaleIn !== undefined && output.DisableScaleIn !== null ? output.DisableScaleIn : undefined,
        ScaleInCooldown: output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null ? output.ScaleInCooldown : undefined,
        ScaleOutCooldown: output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null ? output.ScaleOutCooldown : undefined,
        TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
    };
};
const deserializeAws_json1_0BackupDescription = (output, context) => {
    return {
        BackupDetails: output.BackupDetails !== undefined && output.BackupDetails !== null
            ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context)
            : undefined,
        SourceTableDetails: output.SourceTableDetails !== undefined && output.SourceTableDetails !== null
            ? deserializeAws_json1_0SourceTableDetails(output.SourceTableDetails, context)
            : undefined,
        SourceTableFeatureDetails: output.SourceTableFeatureDetails !== undefined && output.SourceTableFeatureDetails !== null
            ? deserializeAws_json1_0SourceTableFeatureDetails(output.SourceTableFeatureDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_0BackupDetails = (output, context) => {
    return {
        BackupArn: output.BackupArn !== undefined && output.BackupArn !== null ? output.BackupArn : undefined,
        BackupCreationDateTime: output.BackupCreationDateTime !== undefined && output.BackupCreationDateTime !== null
            ? new Date(Math.round(output.BackupCreationDateTime * 1000))
            : undefined,
        BackupExpiryDateTime: output.BackupExpiryDateTime !== undefined && output.BackupExpiryDateTime !== null
            ? new Date(Math.round(output.BackupExpiryDateTime * 1000))
            : undefined,
        BackupName: output.BackupName !== undefined && output.BackupName !== null ? output.BackupName : undefined,
        BackupSizeBytes: output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null ? output.BackupSizeBytes : undefined,
        BackupStatus: output.BackupStatus !== undefined && output.BackupStatus !== null ? output.BackupStatus : undefined,
        BackupType: output.BackupType !== undefined && output.BackupType !== null ? output.BackupType : undefined,
    };
};
const deserializeAws_json1_0BackupInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0BackupNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0BackupSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0BackupSummary(entry, context);
    });
};
const deserializeAws_json1_0BackupSummary = (output, context) => {
    return {
        BackupArn: output.BackupArn !== undefined && output.BackupArn !== null ? output.BackupArn : undefined,
        BackupCreationDateTime: output.BackupCreationDateTime !== undefined && output.BackupCreationDateTime !== null
            ? new Date(Math.round(output.BackupCreationDateTime * 1000))
            : undefined,
        BackupExpiryDateTime: output.BackupExpiryDateTime !== undefined && output.BackupExpiryDateTime !== null
            ? new Date(Math.round(output.BackupExpiryDateTime * 1000))
            : undefined,
        BackupName: output.BackupName !== undefined && output.BackupName !== null ? output.BackupName : undefined,
        BackupSizeBytes: output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null ? output.BackupSizeBytes : undefined,
        BackupStatus: output.BackupStatus !== undefined && output.BackupStatus !== null ? output.BackupStatus : undefined,
        BackupType: output.BackupType !== undefined && output.BackupType !== null ? output.BackupType : undefined,
        TableArn: output.TableArn !== undefined && output.TableArn !== null ? output.TableArn : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0BatchExecuteStatementOutput = (output, context) => {
    return {
        Responses: output.Responses !== undefined && output.Responses !== null
            ? deserializeAws_json1_0PartiQLBatchResponse(output.Responses, context)
            : undefined,
    };
};
const deserializeAws_json1_0BatchGetItemOutput = (output, context) => {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
            : undefined,
        Responses: output.Responses !== undefined && output.Responses !== null
            ? deserializeAws_json1_0BatchGetResponseMap(output.Responses, context)
            : undefined,
        UnprocessedKeys: output.UnprocessedKeys !== undefined && output.UnprocessedKeys !== null
            ? deserializeAws_json1_0BatchGetRequestMap(output.UnprocessedKeys, context)
            : undefined,
    };
};
const deserializeAws_json1_0BatchGetRequestMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0KeysAndAttributes(value, context),
        };
    }, {});
};
const deserializeAws_json1_0BatchGetResponseMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0ItemList(value, context),
        };
    }, {});
};
const deserializeAws_json1_0BatchStatementError = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0BatchStatementResponse = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_json1_0BatchStatementError(output.Error, context)
            : undefined,
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0AttributeMap(output.Item, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0BatchWriteItemOutput = (output, context) => {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context)
            : undefined,
        UnprocessedItems: output.UnprocessedItems !== undefined && output.UnprocessedItems !== null
            ? deserializeAws_json1_0BatchWriteItemRequestMap(output.UnprocessedItems, context)
            : undefined,
    };
};
const deserializeAws_json1_0BatchWriteItemRequestMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0WriteRequests(value, context),
        };
    }, {});
};
const deserializeAws_json1_0BillingModeSummary = (output, context) => {
    return {
        BillingMode: output.BillingMode !== undefined && output.BillingMode !== null ? output.BillingMode : undefined,
        LastUpdateToPayPerRequestDateTime: output.LastUpdateToPayPerRequestDateTime !== undefined && output.LastUpdateToPayPerRequestDateTime !== null
            ? new Date(Math.round(output.LastUpdateToPayPerRequestDateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0BinarySetAttributeValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return context.base64Decoder(entry);
    });
};
const deserializeAws_json1_0CancellationReason = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0AttributeMap(output.Item, context)
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0CancellationReasonList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0CancellationReason(entry, context);
    });
};
const deserializeAws_json1_0Capacity = (output, context) => {
    return {
        CapacityUnits: output.CapacityUnits !== undefined && output.CapacityUnits !== null ? output.CapacityUnits : undefined,
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
const deserializeAws_json1_0ConditionalCheckFailedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ConsumedCapacity = (output, context) => {
    return {
        CapacityUnits: output.CapacityUnits !== undefined && output.CapacityUnits !== null ? output.CapacityUnits : undefined,
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0SecondaryIndexesCapacityMap(output.GlobalSecondaryIndexes, context)
            : undefined,
        LocalSecondaryIndexes: output.LocalSecondaryIndexes !== undefined && output.LocalSecondaryIndexes !== null
            ? deserializeAws_json1_0SecondaryIndexesCapacityMap(output.LocalSecondaryIndexes, context)
            : undefined,
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_0Capacity(output.Table, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
const deserializeAws_json1_0ConsumedCapacityMultiple = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ConsumedCapacity(entry, context);
    });
};
const deserializeAws_json1_0ContinuousBackupsDescription = (output, context) => {
    return {
        ContinuousBackupsStatus: output.ContinuousBackupsStatus !== undefined && output.ContinuousBackupsStatus !== null
            ? output.ContinuousBackupsStatus
            : undefined,
        PointInTimeRecoveryDescription: output.PointInTimeRecoveryDescription !== undefined && output.PointInTimeRecoveryDescription !== null
            ? deserializeAws_json1_0PointInTimeRecoveryDescription(output.PointInTimeRecoveryDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0ContinuousBackupsUnavailableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ContributorInsightsRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0ContributorInsightsSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ContributorInsightsSummary(entry, context);
    });
};
const deserializeAws_json1_0ContributorInsightsSummary = (output, context) => {
    return {
        ContributorInsightsStatus: output.ContributorInsightsStatus !== undefined && output.ContributorInsightsStatus !== null
            ? output.ContributorInsightsStatus
            : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0CreateBackupOutput = (output, context) => {
    return {
        BackupDetails: output.BackupDetails !== undefined && output.BackupDetails !== null
            ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_0CreateGlobalTableOutput = (output, context) => {
    return {
        GlobalTableDescription: output.GlobalTableDescription !== undefined && output.GlobalTableDescription !== null
            ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0CreateTableOutput = (output, context) => {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DeleteBackupOutput = (output, context) => {
    return {
        BackupDescription: output.BackupDescription !== undefined && output.BackupDescription !== null
            ? deserializeAws_json1_0BackupDescription(output.BackupDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DeleteItemOutput = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
            : undefined,
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_0DeleteRequest = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? deserializeAws_json1_0Key(output.Key, context) : undefined,
    };
};
const deserializeAws_json1_0DeleteTableOutput = (output, context) => {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeBackupOutput = (output, context) => {
    return {
        BackupDescription: output.BackupDescription !== undefined && output.BackupDescription !== null
            ? deserializeAws_json1_0BackupDescription(output.BackupDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeContinuousBackupsOutput = (output, context) => {
    return {
        ContinuousBackupsDescription: output.ContinuousBackupsDescription !== undefined && output.ContinuousBackupsDescription !== null
            ? deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeContributorInsightsOutput = (output, context) => {
    return {
        ContributorInsightsRuleList: output.ContributorInsightsRuleList !== undefined && output.ContributorInsightsRuleList !== null
            ? deserializeAws_json1_0ContributorInsightsRuleList(output.ContributorInsightsRuleList, context)
            : undefined,
        ContributorInsightsStatus: output.ContributorInsightsStatus !== undefined && output.ContributorInsightsStatus !== null
            ? output.ContributorInsightsStatus
            : undefined,
        FailureException: output.FailureException !== undefined && output.FailureException !== null
            ? deserializeAws_json1_0FailureException(output.FailureException, context)
            : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        LastUpdateDateTime: output.LastUpdateDateTime !== undefined && output.LastUpdateDateTime !== null
            ? new Date(Math.round(output.LastUpdateDateTime * 1000))
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0DescribeEndpointsResponse = (output, context) => {
    return {
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_json1_0Endpoints(output.Endpoints, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeExportOutput = (output, context) => {
    return {
        ExportDescription: output.ExportDescription !== undefined && output.ExportDescription !== null
            ? deserializeAws_json1_0ExportDescription(output.ExportDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeGlobalTableOutput = (output, context) => {
    return {
        GlobalTableDescription: output.GlobalTableDescription !== undefined && output.GlobalTableDescription !== null
            ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeGlobalTableSettingsOutput = (output, context) => {
    return {
        GlobalTableName: output.GlobalTableName !== undefined && output.GlobalTableName !== null ? output.GlobalTableName : undefined,
        ReplicaSettings: output.ReplicaSettings !== undefined && output.ReplicaSettings !== null
            ? deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput = (output, context) => {
    return {
        KinesisDataStreamDestinations: output.KinesisDataStreamDestinations !== undefined && output.KinesisDataStreamDestinations !== null
            ? deserializeAws_json1_0KinesisDataStreamDestinations(output.KinesisDataStreamDestinations, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0DescribeLimitsOutput = (output, context) => {
    return {
        AccountMaxReadCapacityUnits: output.AccountMaxReadCapacityUnits !== undefined && output.AccountMaxReadCapacityUnits !== null
            ? output.AccountMaxReadCapacityUnits
            : undefined,
        AccountMaxWriteCapacityUnits: output.AccountMaxWriteCapacityUnits !== undefined && output.AccountMaxWriteCapacityUnits !== null
            ? output.AccountMaxWriteCapacityUnits
            : undefined,
        TableMaxReadCapacityUnits: output.TableMaxReadCapacityUnits !== undefined && output.TableMaxReadCapacityUnits !== null
            ? output.TableMaxReadCapacityUnits
            : undefined,
        TableMaxWriteCapacityUnits: output.TableMaxWriteCapacityUnits !== undefined && output.TableMaxWriteCapacityUnits !== null
            ? output.TableMaxWriteCapacityUnits
            : undefined,
    };
};
const deserializeAws_json1_0DescribeTableOutput = (output, context) => {
    return {
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_0TableDescription(output.Table, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput = (output, context) => {
    return {
        TableAutoScalingDescription: output.TableAutoScalingDescription !== undefined && output.TableAutoScalingDescription !== null
            ? deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeTimeToLiveOutput = (output, context) => {
    return {
        TimeToLiveDescription: output.TimeToLiveDescription !== undefined && output.TimeToLiveDescription !== null
            ? deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0DuplicateItemException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0Endpoint = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        CachePeriodInMinutes: output.CachePeriodInMinutes !== undefined && output.CachePeriodInMinutes !== null
            ? output.CachePeriodInMinutes
            : undefined,
    };
};
const deserializeAws_json1_0Endpoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Endpoint(entry, context);
    });
};
const deserializeAws_json1_0ExecuteStatementOutput = (output, context) => {
    return {
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_json1_0ItemList(output.Items, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ExecuteTransactionOutput = (output, context) => {
    return {
        Responses: output.Responses !== undefined && output.Responses !== null
            ? deserializeAws_json1_0ItemResponseList(output.Responses, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExportConflictException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ExportDescription = (output, context) => {
    return {
        BilledSizeBytes: output.BilledSizeBytes !== undefined && output.BilledSizeBytes !== null ? output.BilledSizeBytes : undefined,
        ClientToken: output.ClientToken !== undefined && output.ClientToken !== null ? output.ClientToken : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        ExportArn: output.ExportArn !== undefined && output.ExportArn !== null ? output.ExportArn : undefined,
        ExportFormat: output.ExportFormat !== undefined && output.ExportFormat !== null ? output.ExportFormat : undefined,
        ExportManifest: output.ExportManifest !== undefined && output.ExportManifest !== null ? output.ExportManifest : undefined,
        ExportStatus: output.ExportStatus !== undefined && output.ExportStatus !== null ? output.ExportStatus : undefined,
        ExportTime: output.ExportTime !== undefined && output.ExportTime !== null
            ? new Date(Math.round(output.ExportTime * 1000))
            : undefined,
        FailureCode: output.FailureCode !== undefined && output.FailureCode !== null ? output.FailureCode : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
        S3BucketOwner: output.S3BucketOwner !== undefined && output.S3BucketOwner !== null ? output.S3BucketOwner : undefined,
        S3Prefix: output.S3Prefix !== undefined && output.S3Prefix !== null ? output.S3Prefix : undefined,
        S3SseAlgorithm: output.S3SseAlgorithm !== undefined && output.S3SseAlgorithm !== null ? output.S3SseAlgorithm : undefined,
        S3SseKmsKeyId: output.S3SseKmsKeyId !== undefined && output.S3SseKmsKeyId !== null ? output.S3SseKmsKeyId : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        TableArn: output.TableArn !== undefined && output.TableArn !== null ? output.TableArn : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
    };
};
const deserializeAws_json1_0ExportNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ExportSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ExportSummary(entry, context);
    });
};
const deserializeAws_json1_0ExportSummary = (output, context) => {
    return {
        ExportArn: output.ExportArn !== undefined && output.ExportArn !== null ? output.ExportArn : undefined,
        ExportStatus: output.ExportStatus !== undefined && output.ExportStatus !== null ? output.ExportStatus : undefined,
    };
};
const deserializeAws_json1_0ExportTableToPointInTimeOutput = (output, context) => {
    return {
        ExportDescription: output.ExportDescription !== undefined && output.ExportDescription !== null
            ? deserializeAws_json1_0ExportDescription(output.ExportDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExpressionAttributeNameMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_0FailureException = (output, context) => {
    return {
        ExceptionDescription: output.ExceptionDescription !== undefined && output.ExceptionDescription !== null
            ? output.ExceptionDescription
            : undefined,
        ExceptionName: output.ExceptionName !== undefined && output.ExceptionName !== null ? output.ExceptionName : undefined,
    };
};
const deserializeAws_json1_0GetItemOutput = (output, context) => {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0AttributeMap(output.Item, context)
            : undefined,
    };
};
const deserializeAws_json1_0GlobalSecondaryIndexDescription = (output, context) => {
    return {
        Backfilling: output.Backfilling !== undefined && output.Backfilling !== null ? output.Backfilling : undefined,
        IndexArn: output.IndexArn !== undefined && output.IndexArn !== null ? output.IndexArn : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexSizeBytes: output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null ? output.IndexSizeBytes : undefined,
        IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_json1_0Projection(output.Projection, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context)
            : undefined,
    };
};
const deserializeAws_json1_0GlobalSecondaryIndexDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0GlobalSecondaryIndexDescription(entry, context);
    });
};
const deserializeAws_json1_0GlobalSecondaryIndexes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0GlobalSecondaryIndexInfo(entry, context);
    });
};
const deserializeAws_json1_0GlobalSecondaryIndexInfo = (output, context) => {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_json1_0Projection(output.Projection, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context)
            : undefined,
    };
};
const deserializeAws_json1_0GlobalTable = (output, context) => {
    return {
        GlobalTableName: output.GlobalTableName !== undefined && output.GlobalTableName !== null ? output.GlobalTableName : undefined,
        ReplicationGroup: output.ReplicationGroup !== undefined && output.ReplicationGroup !== null
            ? deserializeAws_json1_0ReplicaList(output.ReplicationGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_0GlobalTableAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0GlobalTableDescription = (output, context) => {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        GlobalTableArn: output.GlobalTableArn !== undefined && output.GlobalTableArn !== null ? output.GlobalTableArn : undefined,
        GlobalTableName: output.GlobalTableName !== undefined && output.GlobalTableName !== null ? output.GlobalTableName : undefined,
        GlobalTableStatus: output.GlobalTableStatus !== undefined && output.GlobalTableStatus !== null
            ? output.GlobalTableStatus
            : undefined,
        ReplicationGroup: output.ReplicationGroup !== undefined && output.ReplicationGroup !== null
            ? deserializeAws_json1_0ReplicaDescriptionList(output.ReplicationGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_0GlobalTableList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0GlobalTable(entry, context);
    });
};
const deserializeAws_json1_0GlobalTableNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0IdempotentParameterMismatchException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0IndexNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InternalServerError = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidEndpointException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0InvalidExportTimeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidRestoreTimeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ItemCollectionKeyAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_0ItemCollectionMetrics = (output, context) => {
    return {
        ItemCollectionKey: output.ItemCollectionKey !== undefined && output.ItemCollectionKey !== null
            ? deserializeAws_json1_0ItemCollectionKeyAttributeMap(output.ItemCollectionKey, context)
            : undefined,
        SizeEstimateRangeGB: output.SizeEstimateRangeGB !== undefined && output.SizeEstimateRangeGB !== null
            ? deserializeAws_json1_0ItemCollectionSizeEstimateRange(output.SizeEstimateRangeGB, context)
            : undefined,
    };
};
const deserializeAws_json1_0ItemCollectionMetricsMultiple = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ItemCollectionMetrics(entry, context);
    });
};
const deserializeAws_json1_0ItemCollectionMetricsPerTable = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0ItemCollectionMetricsMultiple(value, context),
        };
    }, {});
};
const deserializeAws_json1_0ItemCollectionSizeEstimateRange = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0ItemCollectionSizeLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AttributeMap(entry, context);
    });
};
const deserializeAws_json1_0ItemResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0AttributeMap(output.Item, context)
            : undefined,
    };
};
const deserializeAws_json1_0ItemResponseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ItemResponse(entry, context);
    });
};
const deserializeAws_json1_0Key = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_0KeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Key(entry, context);
    });
};
const deserializeAws_json1_0KeysAndAttributes = (output, context) => {
    return {
        AttributesToGet: output.AttributesToGet !== undefined && output.AttributesToGet !== null
            ? deserializeAws_json1_0AttributeNameList(output.AttributesToGet, context)
            : undefined,
        ConsistentRead: output.ConsistentRead !== undefined && output.ConsistentRead !== null ? output.ConsistentRead : undefined,
        ExpressionAttributeNames: output.ExpressionAttributeNames !== undefined && output.ExpressionAttributeNames !== null
            ? deserializeAws_json1_0ExpressionAttributeNameMap(output.ExpressionAttributeNames, context)
            : undefined,
        Keys: output.Keys !== undefined && output.Keys !== null
            ? deserializeAws_json1_0KeyList(output.Keys, context)
            : undefined,
        ProjectionExpression: output.ProjectionExpression !== undefined && output.ProjectionExpression !== null
            ? output.ProjectionExpression
            : undefined,
    };
};
const deserializeAws_json1_0KeySchema = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0KeySchemaElement(entry, context);
    });
};
const deserializeAws_json1_0KeySchemaElement = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        KeyType: output.KeyType !== undefined && output.KeyType !== null ? output.KeyType : undefined,
    };
};
const deserializeAws_json1_0KinesisDataStreamDestination = (output, context) => {
    return {
        DestinationStatus: output.DestinationStatus !== undefined && output.DestinationStatus !== null
            ? output.DestinationStatus
            : undefined,
        DestinationStatusDescription: output.DestinationStatusDescription !== undefined && output.DestinationStatusDescription !== null
            ? output.DestinationStatusDescription
            : undefined,
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
    };
};
const deserializeAws_json1_0KinesisDataStreamDestinations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0KinesisDataStreamDestination(entry, context);
    });
};
const deserializeAws_json1_0KinesisStreamingDestinationOutput = (output, context) => {
    return {
        DestinationStatus: output.DestinationStatus !== undefined && output.DestinationStatus !== null
            ? output.DestinationStatus
            : undefined,
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ListAttributeValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AttributeValue(entry, context);
    });
};
const deserializeAws_json1_0ListBackupsOutput = (output, context) => {
    return {
        BackupSummaries: output.BackupSummaries !== undefined && output.BackupSummaries !== null
            ? deserializeAws_json1_0BackupSummaries(output.BackupSummaries, context)
            : undefined,
        LastEvaluatedBackupArn: output.LastEvaluatedBackupArn !== undefined && output.LastEvaluatedBackupArn !== null
            ? output.LastEvaluatedBackupArn
            : undefined,
    };
};
const deserializeAws_json1_0ListContributorInsightsOutput = (output, context) => {
    return {
        ContributorInsightsSummaries: output.ContributorInsightsSummaries !== undefined && output.ContributorInsightsSummaries !== null
            ? deserializeAws_json1_0ContributorInsightsSummaries(output.ContributorInsightsSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListExportsOutput = (output, context) => {
    return {
        ExportSummaries: output.ExportSummaries !== undefined && output.ExportSummaries !== null
            ? deserializeAws_json1_0ExportSummaries(output.ExportSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListGlobalTablesOutput = (output, context) => {
    return {
        GlobalTables: output.GlobalTables !== undefined && output.GlobalTables !== null
            ? deserializeAws_json1_0GlobalTableList(output.GlobalTables, context)
            : undefined,
        LastEvaluatedGlobalTableName: output.LastEvaluatedGlobalTableName !== undefined && output.LastEvaluatedGlobalTableName !== null
            ? output.LastEvaluatedGlobalTableName
            : undefined,
    };
};
const deserializeAws_json1_0ListTablesOutput = (output, context) => {
    return {
        LastEvaluatedTableName: output.LastEvaluatedTableName !== undefined && output.LastEvaluatedTableName !== null
            ? output.LastEvaluatedTableName
            : undefined,
        TableNames: output.TableNames !== undefined && output.TableNames !== null
            ? deserializeAws_json1_0TableNameList(output.TableNames, context)
            : undefined,
    };
};
const deserializeAws_json1_0ListTagsOfResourceOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0LocalSecondaryIndexDescription = (output, context) => {
    return {
        IndexArn: output.IndexArn !== undefined && output.IndexArn !== null ? output.IndexArn : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexSizeBytes: output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null ? output.IndexSizeBytes : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_json1_0Projection(output.Projection, context)
            : undefined,
    };
};
const deserializeAws_json1_0LocalSecondaryIndexDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LocalSecondaryIndexDescription(entry, context);
    });
};
const deserializeAws_json1_0LocalSecondaryIndexes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LocalSecondaryIndexInfo(entry, context);
    });
};
const deserializeAws_json1_0LocalSecondaryIndexInfo = (output, context) => {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_json1_0Projection(output.Projection, context)
            : undefined,
    };
};
const deserializeAws_json1_0MapAttributeValue = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_0NonKeyAttributeNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0NumberSetAttributeValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0PartiQLBatchResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0BatchStatementResponse(entry, context);
    });
};
const deserializeAws_json1_0PointInTimeRecoveryDescription = (output, context) => {
    return {
        EarliestRestorableDateTime: output.EarliestRestorableDateTime !== undefined && output.EarliestRestorableDateTime !== null
            ? new Date(Math.round(output.EarliestRestorableDateTime * 1000))
            : undefined,
        LatestRestorableDateTime: output.LatestRestorableDateTime !== undefined && output.LatestRestorableDateTime !== null
            ? new Date(Math.round(output.LatestRestorableDateTime * 1000))
            : undefined,
        PointInTimeRecoveryStatus: output.PointInTimeRecoveryStatus !== undefined && output.PointInTimeRecoveryStatus !== null
            ? output.PointInTimeRecoveryStatus
            : undefined,
    };
};
const deserializeAws_json1_0PointInTimeRecoveryUnavailableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0Projection = (output, context) => {
    return {
        NonKeyAttributes: output.NonKeyAttributes !== undefined && output.NonKeyAttributes !== null
            ? deserializeAws_json1_0NonKeyAttributeNameList(output.NonKeyAttributes, context)
            : undefined,
        ProjectionType: output.ProjectionType !== undefined && output.ProjectionType !== null ? output.ProjectionType : undefined,
    };
};
const deserializeAws_json1_0ProvisionedThroughput = (output, context) => {
    return {
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
const deserializeAws_json1_0ProvisionedThroughputDescription = (output, context) => {
    return {
        LastDecreaseDateTime: output.LastDecreaseDateTime !== undefined && output.LastDecreaseDateTime !== null
            ? new Date(Math.round(output.LastDecreaseDateTime * 1000))
            : undefined,
        LastIncreaseDateTime: output.LastIncreaseDateTime !== undefined && output.LastIncreaseDateTime !== null
            ? new Date(Math.round(output.LastIncreaseDateTime * 1000))
            : undefined,
        NumberOfDecreasesToday: output.NumberOfDecreasesToday !== undefined && output.NumberOfDecreasesToday !== null
            ? output.NumberOfDecreasesToday
            : undefined,
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
const deserializeAws_json1_0ProvisionedThroughputExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ProvisionedThroughputOverride = (output, context) => {
    return {
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
    };
};
const deserializeAws_json1_0PutItemInputAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_0PutItemOutput = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
            : undefined,
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_0PutRequest = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0PutItemInputAttributeMap(output.Item, context)
            : undefined,
    };
};
const deserializeAws_json1_0QueryOutput = (output, context) => {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_json1_0ItemList(output.Items, context)
            : undefined,
        LastEvaluatedKey: output.LastEvaluatedKey !== undefined && output.LastEvaluatedKey !== null
            ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context)
            : undefined,
        ScannedCount: output.ScannedCount !== undefined && output.ScannedCount !== null ? output.ScannedCount : undefined,
    };
};
const deserializeAws_json1_0Replica = (output, context) => {
    return {
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
    };
};
const deserializeAws_json1_0ReplicaAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ReplicaAutoScalingDescription = (output, context) => {
    return {
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(output.GlobalSecondaryIndexes, context)
            : undefined,
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
        ReplicaProvisionedReadCapacityAutoScalingSettings: output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined &&
            output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context)
            : undefined,
        ReplicaProvisionedWriteCapacityAutoScalingSettings: output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined &&
            output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context)
            : undefined,
        ReplicaStatus: output.ReplicaStatus !== undefined && output.ReplicaStatus !== null ? output.ReplicaStatus : undefined,
    };
};
const deserializeAws_json1_0ReplicaAutoScalingDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaAutoScalingDescription(entry, context);
    });
};
const deserializeAws_json1_0ReplicaDescription = (output, context) => {
    return {
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context)
            : undefined,
        KMSMasterKeyId: output.KMSMasterKeyId !== undefined && output.KMSMasterKeyId !== null ? output.KMSMasterKeyId : undefined,
        ProvisionedThroughputOverride: output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
            ? deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
            : undefined,
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
        ReplicaInaccessibleDateTime: output.ReplicaInaccessibleDateTime !== undefined && output.ReplicaInaccessibleDateTime !== null
            ? new Date(Math.round(output.ReplicaInaccessibleDateTime * 1000))
            : undefined,
        ReplicaStatus: output.ReplicaStatus !== undefined && output.ReplicaStatus !== null ? output.ReplicaStatus : undefined,
        ReplicaStatusDescription: output.ReplicaStatusDescription !== undefined && output.ReplicaStatusDescription !== null
            ? output.ReplicaStatusDescription
            : undefined,
        ReplicaStatusPercentProgress: output.ReplicaStatusPercentProgress !== undefined && output.ReplicaStatusPercentProgress !== null
            ? output.ReplicaStatusPercentProgress
            : undefined,
    };
};
const deserializeAws_json1_0ReplicaDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaDescription(entry, context);
    });
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription = (output, context) => {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
        ProvisionedReadCapacityAutoScalingSettings: output.ProvisionedReadCapacityAutoScalingSettings !== undefined &&
            output.ProvisionedReadCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context)
            : undefined,
        ProvisionedWriteCapacityAutoScalingSettings: output.ProvisionedWriteCapacityAutoScalingSettings !== undefined &&
            output.ProvisionedWriteCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription = (output, context) => {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        ProvisionedThroughputOverride: output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
            ? deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
            : undefined,
    };
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription(entry, context);
    });
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription = (output, context) => {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
        ProvisionedReadCapacityAutoScalingSettings: output.ProvisionedReadCapacityAutoScalingSettings !== undefined &&
            output.ProvisionedReadCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context)
            : undefined,
        ProvisionedReadCapacityUnits: output.ProvisionedReadCapacityUnits !== undefined && output.ProvisionedReadCapacityUnits !== null
            ? output.ProvisionedReadCapacityUnits
            : undefined,
        ProvisionedWriteCapacityAutoScalingSettings: output.ProvisionedWriteCapacityAutoScalingSettings !== undefined &&
            output.ProvisionedWriteCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context)
            : undefined,
        ProvisionedWriteCapacityUnits: output.ProvisionedWriteCapacityUnits !== undefined && output.ProvisionedWriteCapacityUnits !== null
            ? output.ProvisionedWriteCapacityUnits
            : undefined,
    };
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
};
const deserializeAws_json1_0ReplicaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Replica(entry, context);
    });
};
const deserializeAws_json1_0ReplicaNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ReplicaSettingsDescription = (output, context) => {
    return {
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
        ReplicaBillingModeSummary: output.ReplicaBillingModeSummary !== undefined && output.ReplicaBillingModeSummary !== null
            ? deserializeAws_json1_0BillingModeSummary(output.ReplicaBillingModeSummary, context)
            : undefined,
        ReplicaGlobalSecondaryIndexSettings: output.ReplicaGlobalSecondaryIndexSettings !== undefined && output.ReplicaGlobalSecondaryIndexSettings !== null
            ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList(output.ReplicaGlobalSecondaryIndexSettings, context)
            : undefined,
        ReplicaProvisionedReadCapacityAutoScalingSettings: output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined &&
            output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context)
            : undefined,
        ReplicaProvisionedReadCapacityUnits: output.ReplicaProvisionedReadCapacityUnits !== undefined && output.ReplicaProvisionedReadCapacityUnits !== null
            ? output.ReplicaProvisionedReadCapacityUnits
            : undefined,
        ReplicaProvisionedWriteCapacityAutoScalingSettings: output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined &&
            output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context)
            : undefined,
        ReplicaProvisionedWriteCapacityUnits: output.ReplicaProvisionedWriteCapacityUnits !== undefined && output.ReplicaProvisionedWriteCapacityUnits !== null
            ? output.ReplicaProvisionedWriteCapacityUnits
            : undefined,
        ReplicaStatus: output.ReplicaStatus !== undefined && output.ReplicaStatus !== null ? output.ReplicaStatus : undefined,
    };
};
const deserializeAws_json1_0ReplicaSettingsDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaSettingsDescription(entry, context);
    });
};
const deserializeAws_json1_0RequestLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ResourceInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0RestoreSummary = (output, context) => {
    return {
        RestoreDateTime: output.RestoreDateTime !== undefined && output.RestoreDateTime !== null
            ? new Date(Math.round(output.RestoreDateTime * 1000))
            : undefined,
        RestoreInProgress: output.RestoreInProgress !== undefined && output.RestoreInProgress !== null
            ? output.RestoreInProgress
            : undefined,
        SourceBackupArn: output.SourceBackupArn !== undefined && output.SourceBackupArn !== null ? output.SourceBackupArn : undefined,
        SourceTableArn: output.SourceTableArn !== undefined && output.SourceTableArn !== null ? output.SourceTableArn : undefined,
    };
};
const deserializeAws_json1_0RestoreTableFromBackupOutput = (output, context) => {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0RestoreTableToPointInTimeOutput = (output, context) => {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0ScanOutput = (output, context) => {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_json1_0ItemList(output.Items, context)
            : undefined,
        LastEvaluatedKey: output.LastEvaluatedKey !== undefined && output.LastEvaluatedKey !== null
            ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context)
            : undefined,
        ScannedCount: output.ScannedCount !== undefined && output.ScannedCount !== null ? output.ScannedCount : undefined,
    };
};
const deserializeAws_json1_0SecondaryIndexesCapacityMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0Capacity(value, context),
        };
    }, {});
};
const deserializeAws_json1_0SourceTableDetails = (output, context) => {
    return {
        BillingMode: output.BillingMode !== undefined && output.BillingMode !== null ? output.BillingMode : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context)
            : undefined,
        TableArn: output.TableArn !== undefined && output.TableArn !== null ? output.TableArn : undefined,
        TableCreationDateTime: output.TableCreationDateTime !== undefined && output.TableCreationDateTime !== null
            ? new Date(Math.round(output.TableCreationDateTime * 1000))
            : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableSizeBytes: output.TableSizeBytes !== undefined && output.TableSizeBytes !== null ? output.TableSizeBytes : undefined,
    };
};
const deserializeAws_json1_0SourceTableFeatureDetails = (output, context) => {
    return {
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0GlobalSecondaryIndexes(output.GlobalSecondaryIndexes, context)
            : undefined,
        LocalSecondaryIndexes: output.LocalSecondaryIndexes !== undefined && output.LocalSecondaryIndexes !== null
            ? deserializeAws_json1_0LocalSecondaryIndexes(output.LocalSecondaryIndexes, context)
            : undefined,
        SSEDescription: output.SSEDescription !== undefined && output.SSEDescription !== null
            ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context)
            : undefined,
        StreamDescription: output.StreamDescription !== undefined && output.StreamDescription !== null
            ? deserializeAws_json1_0StreamSpecification(output.StreamDescription, context)
            : undefined,
        TimeToLiveDescription: output.TimeToLiveDescription !== undefined && output.TimeToLiveDescription !== null
            ? deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0SSEDescription = (output, context) => {
    return {
        InaccessibleEncryptionDateTime: output.InaccessibleEncryptionDateTime !== undefined && output.InaccessibleEncryptionDateTime !== null
            ? new Date(Math.round(output.InaccessibleEncryptionDateTime * 1000))
            : undefined,
        KMSMasterKeyArn: output.KMSMasterKeyArn !== undefined && output.KMSMasterKeyArn !== null ? output.KMSMasterKeyArn : undefined,
        SSEType: output.SSEType !== undefined && output.SSEType !== null ? output.SSEType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0StreamSpecification = (output, context) => {
    return {
        StreamEnabled: output.StreamEnabled !== undefined && output.StreamEnabled !== null ? output.StreamEnabled : undefined,
        StreamViewType: output.StreamViewType !== undefined && output.StreamViewType !== null ? output.StreamViewType : undefined,
    };
};
const deserializeAws_json1_0StringSetAttributeValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0TableAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0TableAutoScalingDescription = (output, context) => {
    return {
        Replicas: output.Replicas !== undefined && output.Replicas !== null
            ? deserializeAws_json1_0ReplicaAutoScalingDescriptionList(output.Replicas, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableStatus: output.TableStatus !== undefined && output.TableStatus !== null ? output.TableStatus : undefined,
    };
};
const deserializeAws_json1_0TableDescription = (output, context) => {
    return {
        ArchivalSummary: output.ArchivalSummary !== undefined && output.ArchivalSummary !== null
            ? deserializeAws_json1_0ArchivalSummary(output.ArchivalSummary, context)
            : undefined,
        AttributeDefinitions: output.AttributeDefinitions !== undefined && output.AttributeDefinitions !== null
            ? deserializeAws_json1_0AttributeDefinitions(output.AttributeDefinitions, context)
            : undefined,
        BillingModeSummary: output.BillingModeSummary !== undefined && output.BillingModeSummary !== null
            ? deserializeAws_json1_0BillingModeSummary(output.BillingModeSummary, context)
            : undefined,
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0GlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context)
            : undefined,
        GlobalTableVersion: output.GlobalTableVersion !== undefined && output.GlobalTableVersion !== null
            ? output.GlobalTableVersion
            : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        LatestStreamArn: output.LatestStreamArn !== undefined && output.LatestStreamArn !== null ? output.LatestStreamArn : undefined,
        LatestStreamLabel: output.LatestStreamLabel !== undefined && output.LatestStreamLabel !== null
            ? output.LatestStreamLabel
            : undefined,
        LocalSecondaryIndexes: output.LocalSecondaryIndexes !== undefined && output.LocalSecondaryIndexes !== null
            ? deserializeAws_json1_0LocalSecondaryIndexDescriptionList(output.LocalSecondaryIndexes, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context)
            : undefined,
        Replicas: output.Replicas !== undefined && output.Replicas !== null
            ? deserializeAws_json1_0ReplicaDescriptionList(output.Replicas, context)
            : undefined,
        RestoreSummary: output.RestoreSummary !== undefined && output.RestoreSummary !== null
            ? deserializeAws_json1_0RestoreSummary(output.RestoreSummary, context)
            : undefined,
        SSEDescription: output.SSEDescription !== undefined && output.SSEDescription !== null
            ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context)
            : undefined,
        StreamSpecification: output.StreamSpecification !== undefined && output.StreamSpecification !== null
            ? deserializeAws_json1_0StreamSpecification(output.StreamSpecification, context)
            : undefined,
        TableArn: output.TableArn !== undefined && output.TableArn !== null ? output.TableArn : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableSizeBytes: output.TableSizeBytes !== undefined && output.TableSizeBytes !== null ? output.TableSizeBytes : undefined,
        TableStatus: output.TableStatus !== undefined && output.TableStatus !== null ? output.TableStatus : undefined,
    };
};
const deserializeAws_json1_0TableInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0TableNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0TableNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_0TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Tag(entry, context);
    });
};
const deserializeAws_json1_0TimeToLiveDescription = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        TimeToLiveStatus: output.TimeToLiveStatus !== undefined && output.TimeToLiveStatus !== null ? output.TimeToLiveStatus : undefined,
    };
};
const deserializeAws_json1_0TimeToLiveSpecification = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
const deserializeAws_json1_0TransactGetItemsOutput = (output, context) => {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
            : undefined,
        Responses: output.Responses !== undefined && output.Responses !== null
            ? deserializeAws_json1_0ItemResponseList(output.Responses, context)
            : undefined,
    };
};
const deserializeAws_json1_0TransactionCanceledException = (output, context) => {
    return {
        CancellationReasons: output.CancellationReasons !== undefined && output.CancellationReasons !== null
            ? deserializeAws_json1_0CancellationReasonList(output.CancellationReasons, context)
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0TransactionConflictException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0TransactionInProgressException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0TransactWriteItemsOutput = (output, context) => {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateContinuousBackupsOutput = (output, context) => {
    return {
        ContinuousBackupsDescription: output.ContinuousBackupsDescription !== undefined && output.ContinuousBackupsDescription !== null
            ? deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateContributorInsightsOutput = (output, context) => {
    return {
        ContributorInsightsStatus: output.ContributorInsightsStatus !== undefined && output.ContributorInsightsStatus !== null
            ? output.ContributorInsightsStatus
            : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0UpdateGlobalTableOutput = (output, context) => {
    return {
        GlobalTableDescription: output.GlobalTableDescription !== undefined && output.GlobalTableDescription !== null
            ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateGlobalTableSettingsOutput = (output, context) => {
    return {
        GlobalTableName: output.GlobalTableName !== undefined && output.GlobalTableName !== null ? output.GlobalTableName : undefined,
        ReplicaSettings: output.ReplicaSettings !== undefined && output.ReplicaSettings !== null
            ? deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateItemOutput = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
            : undefined,
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateTableOutput = (output, context) => {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput = (output, context) => {
    return {
        TableAutoScalingDescription: output.TableAutoScalingDescription !== undefined && output.TableAutoScalingDescription !== null
            ? deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateTimeToLiveOutput = (output, context) => {
    return {
        TimeToLiveSpecification: output.TimeToLiveSpecification !== undefined && output.TimeToLiveSpecification !== null
            ? deserializeAws_json1_0TimeToLiveSpecification(output.TimeToLiveSpecification, context)
            : undefined,
    };
};
const deserializeAws_json1_0WriteRequest = (output, context) => {
    return {
        DeleteRequest: output.DeleteRequest !== undefined && output.DeleteRequest !== null
            ? deserializeAws_json1_0DeleteRequest(output.DeleteRequest, context)
            : undefined,
        PutRequest: output.PutRequest !== undefined && output.PutRequest !== null
            ? deserializeAws_json1_0PutRequest(output.PutRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_0WriteRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0WriteRequest(entry, context);
    });
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_0.js.map