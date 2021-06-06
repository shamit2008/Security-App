import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeBackupInput, DescribeBackupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBackupCommandInput extends DescribeBackupInput {
}
export interface DescribeBackupCommandOutput extends DescribeBackupOutput, __MetadataBearer {
}
/**
 * <p>Describes an existing backup of a table.</p>
 *          <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBackupCommand extends $Command<DescribeBackupCommandInput, DescribeBackupCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeBackupCommandInput;
    constructor(input: DescribeBackupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBackupCommandInput, DescribeBackupCommandOutput>;
    private serialize;
    private deserialize;
}
