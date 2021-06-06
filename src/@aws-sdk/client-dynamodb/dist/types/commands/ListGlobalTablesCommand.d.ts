import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListGlobalTablesInput, ListGlobalTablesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGlobalTablesCommandInput extends ListGlobalTablesInput {
}
export interface ListGlobalTablesCommandOutput extends ListGlobalTablesOutput, __MetadataBearer {
}
/**
 * <p>Lists all global tables that have a replica in the specified Region.</p>
 *           <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListGlobalTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListGlobalTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListGlobalTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGlobalTablesCommandInput} for command's `input` shape.
 * @see {@link ListGlobalTablesCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGlobalTablesCommand extends $Command<ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListGlobalTablesCommandInput;
    constructor(input: ListGlobalTablesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput>;
    private serialize;
    private deserialize;
}
