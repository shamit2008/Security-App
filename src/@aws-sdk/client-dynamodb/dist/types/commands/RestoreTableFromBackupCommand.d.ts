import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { RestoreTableFromBackupInput, RestoreTableFromBackupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreTableFromBackupCommandInput extends RestoreTableFromBackupInput {
}
export interface RestoreTableFromBackupCommandOutput extends RestoreTableFromBackupOutput, __MetadataBearer {
}
/**
 * <p>Creates a new table from an existing backup. Any number of users can execute up to 4 concurrent restores
 *         (any type of restore) in a given account.
 *       </p>
 *          <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p>
 *          <p>You must manually set up the following on the restored table:</p>
 *          <ul>
 *             <li>
 *                  <p>Auto scaling policies</p>
 *              </li>
 *             <li>
 *                  <p>IAM policies</p>
 *              </li>
 *             <li>
 *                  <p>Amazon CloudWatch metrics and alarms</p>
 *              </li>
 *             <li>
 *                  <p>Tags</p>
 *              </li>
 *             <li>
 *                  <p>Stream settings</p>
 *              </li>
 *             <li>
 *                  <p>Time to Live (TTL) settings</p>
 *              </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, RestoreTableFromBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, RestoreTableFromBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new RestoreTableFromBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreTableFromBackupCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreTableFromBackupCommand extends $Command<RestoreTableFromBackupCommandInput, RestoreTableFromBackupCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: RestoreTableFromBackupCommandInput;
    constructor(input: RestoreTableFromBackupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreTableFromBackupCommandInput, RestoreTableFromBackupCommandOutput>;
    private serialize;
    private deserialize;
}
