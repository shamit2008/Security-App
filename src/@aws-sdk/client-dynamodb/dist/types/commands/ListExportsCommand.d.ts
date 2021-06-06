import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListExportsInput, ListExportsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListExportsCommandInput extends ListExportsInput {
}
export interface ListExportsCommandOutput extends ListExportsOutput, __MetadataBearer {
}
/**
 * <p>Lists completed exports within the past 90 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListExportsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListExportsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListExportsCommand extends $Command<ListExportsCommandInput, ListExportsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListExportsCommandInput;
    constructor(input: ListExportsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListExportsCommandInput, ListExportsCommandOutput>;
    private serialize;
    private deserialize;
}
