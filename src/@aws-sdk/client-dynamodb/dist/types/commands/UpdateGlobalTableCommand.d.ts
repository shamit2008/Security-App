import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateGlobalTableInput, UpdateGlobalTableOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateGlobalTableCommandInput extends UpdateGlobalTableInput {
}
export interface UpdateGlobalTableCommandOutput extends UpdateGlobalTableOutput, __MetadataBearer {
}
/**
 * <p>Adds or removes replicas in the specified global table. The global table must already
 *             exist to be able to use this operation. Any replica to be added must be empty, have the
 *             same name as the global table, have the same key schema, have DynamoDB Streams enabled,
 *             and have the same provisioned and maximum write capacity units.</p>
 *         <note>
 *             <p>Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in
 *                 a single request, for simplicity we recommend that you issue separate requests for
 *                 adding or removing replicas.</p>
 *          </note>
 *        	<p>
 *         If global secondary indexes are specified, then the following conditions must also be met:
 *         </p>
 *         <ul>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same name.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same hash key and sort key (if present).
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same provisioned and maximum write capacity units.
 *             </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateGlobalTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateGlobalTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateGlobalTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalTableCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGlobalTableCommand extends $Command<UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateGlobalTableCommandInput;
    constructor(input: UpdateGlobalTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput>;
    private serialize;
    private deserialize;
}
