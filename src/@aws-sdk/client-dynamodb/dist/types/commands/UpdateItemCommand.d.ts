import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateItemInput, UpdateItemOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateItemCommandInput extends UpdateItemInput {
}
export interface UpdateItemCommandOutput extends UpdateItemOutput, __MetadataBearer {
}
/**
 * <p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
 *          <p>You can also return the item's attribute values in the same <code>UpdateItem</code>
 *       operation using the <code>ReturnValues</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateItemCommandInput} for command's `input` shape.
 * @see {@link UpdateItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateItemCommand extends $Command<UpdateItemCommandInput, UpdateItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateItemCommandInput;
    constructor(input: UpdateItemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateItemCommandInput, UpdateItemCommandOutput>;
    private serialize;
    private deserialize;
}
