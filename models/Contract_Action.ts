import Extension from './Extension';
import Element from './Element';
import CodeableConcept from './CodeableConcept';
import Contract_Subject from './Contract_Subject';
import Reference from './Reference';
import Period from './Period';
import Timing from './Timing';
import Annotation from './Annotation';

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export default class Contract_Action {
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
     * True if the term prohibits the  action.
     */
    doNotPerform?: boolean;

    /**
     * Extensions for doNotPerform
     */
    _doNotPerform?: Element;

    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: CodeableConcept;

    /**
     * Entity of the action.
     */
    subject?: Contract_Subject | Contract_Subject[];

    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: CodeableConcept;

    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: string | string[];

    /**
     * Extensions for linkId
     */
    _linkId?: Element | Element[];

    /**
     * Current state of the term action.
     */
    status: CodeableConcept;

    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: Reference;

    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: string | string[];

    /**
     * Extensions for contextLinkId
     */
    _contextLinkId?: Element | Element[];

    /**
     * When action happens.
     */
    occurrenceDateTime?: string;

    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: Element;

    /**
     * When action happens.
     */
    occurrencePeriod?: Period;

    /**
     * When action happens.
     */
    occurrenceTiming?: Timing;

    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: Reference | Reference[];

    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: string | string[];

    /**
     * Extensions for requesterLinkId
     */
    _requesterLinkId?: Element | Element[];

    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: CodeableConcept | CodeableConcept[];

    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: CodeableConcept;

    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: Reference;

    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: string | string[];

    /**
     * Extensions for performerLinkId
     */
    _performerLinkId?: Element | Element[];

    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: CodeableConcept | CodeableConcept[];

    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: Reference | Reference[];

    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: string | string[];

    /**
     * Extensions for reason
     */
    _reason?: Element | Element[];

    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: string | string[];

    /**
     * Extensions for reasonLinkId
     */
    _reasonLinkId?: Element | Element[];

    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: Annotation | Annotation[];

    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: number | number[];

    /**
     * Extensions for securityLabelNumber
     */
    _securityLabelNumber?: Element | Element[];


}

