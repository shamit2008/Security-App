import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListBackupsInput, ListBackupsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBackupsCommandInput extends ListBackupsInput {
}
export interface ListBackupsCommandOutput extends ListBackupsOutput, __MetadataBearer {
}
/**
 * <p>List backups associated with an AWS account. To list backups for a given table, specify
 *                 <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results
 *             with at most 1 MB worth of items in a page. You can also specify a maximum number of
 *             entries to be returned in a page. </p>
 *          <p>In the request, start time is inclusive, but end time is exclusive. Note that these
 *             boundaries are for the time at which the original backup was requested.</p>
 *          <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupsCommandInput} for command's `input` shape.
 * @see {@link ListBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBackupsCommand extends $Command<ListBackupsCommandInput, ListBackupsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListBackupsCommandInput;
    constructor(input: ListBackupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBackupsCommandInput, ListBackupsCommandOutput>;
    private serialize;
    private deserialize;
}
