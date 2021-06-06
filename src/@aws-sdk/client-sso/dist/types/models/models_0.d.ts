import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Provides information about your AWS account.</p>
 */
export interface AccountInfo {
    /**
     * <p>The identifier of the AWS account that is assigned to the user.</p>
     */
    accountId?: string;
    /**
     * <p>The display name of the AWS account that is assigned to the user.</p>
     */
    accountName?: string;
    /**
     * <p>The email address of the AWS account that is assigned to the user.</p>
     */
    emailAddress?: string;
}
export declare namespace AccountInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountInfo) => any;
}
export interface GetRoleCredentialsRequest {
    /**
     * <p>The friendly name of the role that is assigned to the user.</p>
     */
    roleName: string | undefined;
    /**
     * <p>The identifier for the AWS account that is assigned to the user.</p>
     */
    accountId: string | undefined;
    /**
     * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
     *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
     */
    accessToken: string | undefined;
}
export declare namespace GetRoleCredentialsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRoleCredentialsRequest) => any;
}
/**
 * <p>Provides information about the role credentials that are assigned to the user.</p>
 */
export interface RoleCredentials {
    /**
     * <p>The identifier used for the temporary security credentials. For more information, see
     *         <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
     *         <i>AWS IAM User Guide</i>.</p>
     */
    accessKeyId?: string;
    /**
     * <p>The key that is used to sign the request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
     *         <i>AWS IAM User Guide</i>.</p>
     */
    secretAccessKey?: string;
    /**
     * <p>The token used for temporary credentials. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
     *         <i>AWS IAM User Guide</i>.</p>
     */
    sessionToken?: string;
    /**
     * <p>The date on which temporary security credentials expire.</p>
     */
    expiration?: number;
}
export declare namespace RoleCredentials {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RoleCredentials) => any;
}
export interface GetRoleCredentialsResponse {
    /**
     * <p>The credentials for the role that is assigned to the user.</p>
     */
    roleCredentials?: RoleCredentials;
}
export declare namespace GetRoleCredentialsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRoleCredentialsResponse) => any;
}
/**
 * <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p>The specified resource doesn't exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>Indicates that the request is being made too frequently and is more than what the server can handle.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    message?: string;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
/**
 * <p>Indicates that the request is not authorized. This can happen due to an invalid access token in the request.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
    name: "UnauthorizedException";
    $fault: "client";
    message?: string;
}
export declare namespace UnauthorizedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnauthorizedException) => any;
}
export interface ListAccountRolesRequest {
    /**
     * <p>The page token from the previous response output when you request subsequent pages.</p>
     */
    nextToken?: string;
    /**
     * <p>The number of items that clients can request per page.</p>
     */
    maxResults?: number;
    /**
     * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
     *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
     */
    accessToken: string | undefined;
    /**
     * <p>The identifier for the AWS account that is assigned to the user.</p>
     */
    accountId: string | undefined;
}
export declare namespace ListAccountRolesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccountRolesRequest) => any;
}
/**
 * <p>Provides information about the role that is assigned to the user.</p>
 */
export interface RoleInfo {
    /**
     * <p>The friendly name of the role that is assigned to the user.</p>
     */
    roleName?: string;
    /**
     * <p>The identifier of the AWS account assigned to the user.</p>
     */
    accountId?: string;
}
export declare namespace RoleInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RoleInfo) => any;
}
export interface ListAccountRolesResponse {
    /**
     * <p>The page token client that is used to retrieve the list of accounts.</p>
     */
    nextToken?: string;
    /**
     * <p>A paginated response with the list of roles and the next token if more results are available.</p>
     */
    roleList?: RoleInfo[];
}
export declare namespace ListAccountRolesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccountRolesResponse) => any;
}
export interface ListAccountsRequest {
    /**
     * <p>(Optional) When requesting subsequent pages, this is the page token from the previous response output.</p>
     */
    nextToken?: string;
    /**
     * <p>This is the number of items clients can request per page.</p>
     */
    maxResults?: number;
    /**
     * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
     *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
     */
    accessToken: string | undefined;
}
export declare namespace ListAccountsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccountsRequest) => any;
}
export interface ListAccountsResponse {
    /**
     * <p>The page token client that is used to retrieve the list of accounts.</p>
     */
    nextToken?: string;
    /**
     * <p>A paginated response with the list of account information and the next token if more results are available.</p>
     */
    accountList?: AccountInfo[];
}
export declare namespace ListAccountsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccountsResponse) => any;
}
export interface LogoutRequest {
    /**
     * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
     *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
     */
    accessToken: string | undefined;
}
export declare namespace LogoutRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LogoutRequest) => any;
}
