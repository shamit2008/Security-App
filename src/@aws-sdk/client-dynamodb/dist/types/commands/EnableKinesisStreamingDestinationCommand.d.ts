import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { KinesisStreamingDestinationInput, KinesisStreamingDestinationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableKinesisStreamingDestinationCommandInput extends KinesisStreamingDestinationInput {
}
export interface EnableKinesisStreamingDestinationCommandOutput extends KinesisStreamingDestinationOutput, __MetadataBearer {
}
/**
 * <p>Starts table data replication to the specified Kinesis data stream at a timestamp chosen
 *             during the enable workflow. If this operation doesn't return results immediately, use
 *             DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is
 *             ACTIVE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, EnableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, EnableKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new EnableKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link EnableKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableKinesisStreamingDestinationCommand extends $Command<EnableKinesisStreamingDestinationCommandInput, EnableKinesisStreamingDestinationCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: EnableKinesisStreamingDestinationCommandInput;
    constructor(input: EnableKinesisStreamingDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableKinesisStreamingDestinationCommandInput, EnableKinesisStreamingDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
