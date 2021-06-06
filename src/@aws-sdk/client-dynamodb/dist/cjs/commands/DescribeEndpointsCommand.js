"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeEndpointsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the regional endpoint information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeEndpointsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeEndpointsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeEndpointsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "DescribeEndpointsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeEndpointsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0DescribeEndpointsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0DescribeEndpointsCommand(output, context);
    }
}
exports.DescribeEndpointsCommand = DescribeEndpointsCommand;
//# sourceMappingURL=DescribeEndpointsCommand.js.map