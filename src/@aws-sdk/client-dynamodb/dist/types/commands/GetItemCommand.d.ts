import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { GetItemInput, GetItemOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetItemCommandInput extends GetItemInput {
}
export interface GetItemCommandOutput extends GetItemOutput, __MetadataBearer {
}
/**
 * <p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary
 *           key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p>
 *          <p>
 *             <code>GetItem</code> provides an eventually consistent read by default. If your application
 *       requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although
 *       a strongly consistent read might take more time than an eventually consistent read, it always
 *       returns the last updated value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new GetItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetItemCommandInput} for command's `input` shape.
 * @see {@link GetItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetItemCommand extends $Command<GetItemCommandInput, GetItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: GetItemCommandInput;
    constructor(input: GetItemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetItemCommandInput, GetItemCommandOutput>;
    private serialize;
    private deserialize;
}
