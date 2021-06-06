import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DeleteItemInput, DeleteItemOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteItemCommandInput extends DeleteItemInput {
}
export interface DeleteItemCommandOutput extends DeleteItemOutput, __MetadataBearer {
}
/**
 * <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
 *          <p>In addition to deleting an item, you can also return the item's attribute values in the same
 *       operation, using the <code>ReturnValues</code> parameter.</p>
 *          <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it
 *       multiple times on the same item or attribute does <i>not</i> result in an error response.</p>
 *          <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DeleteItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteItemCommandInput} for command's `input` shape.
 * @see {@link DeleteItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteItemCommand extends $Command<DeleteItemCommandInput, DeleteItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DeleteItemCommandInput;
    constructor(input: DeleteItemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteItemCommandInput, DeleteItemCommandOutput>;
    private serialize;
    private deserialize;
}
