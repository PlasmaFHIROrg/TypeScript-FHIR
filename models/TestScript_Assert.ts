import Extension from './Extension';
import Element from './Element';

/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export default class TestScript_Assert {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;

    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Extension | Extension[];

    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension | Extension[];

    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: string;

    /**
     * Extensions for label
     */
    _label?: Element;

    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: string;

    /**
     * Extensions for description
     */
    _description?: Element;

    /**
     * The direction to use for the assertion.
     */
    direction?: direction;

    /**
     * Extensions for direction
     */
    _direction?: Element;

    /**
     * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
     */
    compareToSourceId?: string;

    /**
     * Extensions for compareToSourceId
     */
    _compareToSourceId?: Element;

    /**
     * The FHIRPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
     */
    compareToSourceExpression?: string;

    /**
     * Extensions for compareToSourceExpression
     */
    _compareToSourceExpression?: Element;

    /**
     * XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
     */
    compareToSourcePath?: string;

    /**
     * Extensions for compareToSourcePath
     */
    _compareToSourcePath?: Element;

    /**
     * The mime-type contents to compare against the request or response message 'Content-Type' header.
     */
    contentType?: string;

    /**
     * Extensions for contentType
     */
    _contentType?: Element;

    /**
     * The FHIRPath expression to be evaluated against the request or response message contents - HTTP headers and payload.
     */
    expression?: string;

    /**
     * Extensions for expression
     */
    _expression?: Element;

    /**
     * The HTTP header field name e.g. 'Location'.
     */
    headerField?: string;

    /**
     * Extensions for headerField
     */
    _headerField?: Element;

    /**
     * The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId.
     */
    minimumId?: string;

    /**
     * Extensions for minimumId
     */
    _minimumId?: Element;

    /**
     * Whether or not the test execution performs validation on the bundle navigation links.
     */
    navigationLinks?: boolean;

    /**
     * Extensions for navigationLinks
     */
    _navigationLinks?: Element;

    /**
     * The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
     */
    operator?: operator;

    /**
     * Extensions for operator
     */
    _operator?: Element;

    /**
     * The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
     */
    path?: string;

    /**
     * Extensions for path
     */
    _path?: Element;

    /**
     * The request method or HTTP operation code to compare against that used by the client system under test.
     */
    requestMethod?: requestMethod;

    /**
     * Extensions for requestMethod
     */
    _requestMethod?: Element;

    /**
     * The value to use in a comparison against the request URL path string.
     */
    requestURL?: string;

    /**
     * Extensions for requestURL
     */
    _requestURL?: Element;

    /**
     * The type of the resource.  See http://build.fhir.org/resourcelist.html.
     */
    resource?: string;

    /**
     * Extensions for resource
     */
    _resource?: Element;

    /**
     * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
     */
    response?: response;

    /**
     * Extensions for response
     */
    _response?: Element;

    /**
     * The value of the HTTP response code to be tested.
     */
    responseCode?: string;

    /**
     * Extensions for responseCode
     */
    _responseCode?: Element;

    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
     */
    sourceId?: string;

    /**
     * Extensions for sourceId
     */
    _sourceId?: Element;

    /**
     * The ID of the Profile to validate against.
     */
    validateProfileId?: string;

    /**
     * Extensions for validateProfileId
     */
    _validateProfileId?: Element;

    /**
     * The value to compare to.
     */
    value?: string;

    /**
     * Extensions for value
     */
    _value?: Element;

    /**
     * Whether or not the test execution will produce a warning only on error for this assert.
     */
    warningOnly?: boolean;

    /**
     * Extensions for warningOnly
     */
    _warningOnly?: Element;


}

/**
 * The direction to use for the assertion.
 */
export enum direction
{
    "response",
    "request"
}


/**
 * The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
 */
export enum operator
{
    "equals",
    "notEquals",
    "notIn",
    "greaterThan",
    "lessThan",
    "empty",
    "notEmpty",
    "contains",
    "notContains",
    "eval"
}


/**
 * The request method or HTTP operation code to compare against that used by the client system under test.
 */
export enum requestMethod
{
    "get",
    "options",
    "patch",
    "post",
    "put",
    "head"
}


/**
 * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
 */
export enum response
{
    "okay",
    "created",
    "noContent",
    "notModified",
    "bad",
    "forbidden",
    "notFound",
    "methodNotAllowed",
    "conflict",
    "gone",
    "preconditionFailed",
    "unprocessable"
}


