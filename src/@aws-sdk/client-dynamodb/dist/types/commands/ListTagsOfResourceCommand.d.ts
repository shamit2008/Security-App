import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListTagsOfResourceInput, ListTagsOfResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsOfResourceCommandInput extends ListTagsOfResourceInput {
}
export interface ListTagsOfResourceCommandOutput extends ListTagsOfResourceOutput, __MetadataBearer {
}
/**
 * <p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p>
 *          <p>For an overview on tagging DynamoDB resources, see
 *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>
 *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListTagsOfResourceCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListTagsOfResourceCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListTagsOfResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsOfResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsOfResourceCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsOfResourceCommand extends $Command<ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListTagsOfResourceCommandInput;
    constructor(input: ListTagsOfResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput>;
    private serialize;
    private deserialize;
}
