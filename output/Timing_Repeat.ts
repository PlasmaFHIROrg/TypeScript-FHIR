import Extension from './Extension';
import Duration from './Duration';
import Range from './Range';
import Period from './Period';
import Element from './Element';

/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export default class Timing_Repeat {
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
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsDuration?: Duration;

    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: Range;

    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: Period;

    /**
     * A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.
     */
    count?: number;

    /**
     * Extensions for count
     */
    _count?: Element;

    /**
     * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
     */
    countMax?: number;

    /**
     * Extensions for countMax
     */
    _countMax?: Element;

    /**
     * How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.
     */
    duration?: number;

    /**
     * Extensions for duration
     */
    _duration?: Element;

    /**
     * If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.
     */
    durationMax?: number;

    /**
     * Extensions for durationMax
     */
    _durationMax?: Element;

    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: durationUnit;

    /**
     * Extensions for durationUnit
     */
    _durationUnit?: Element;

    /**
     * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
     */
    frequency?: number;

    /**
     * Extensions for frequency
     */
    _frequency?: Element;

    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: number;

    /**
     * Extensions for frequencyMax
     */
    _frequencyMax?: Element;

    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
     */
    period?: number;

    /**
     * Extensions for period
     */
    _period?: Element;

    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: number;

    /**
     * Extensions for periodMax
     */
    _periodMax?: Element;

    /**
     * The units of time for the period in UCUM units.
     */
    periodUnit?: periodUnit;

    /**
     * Extensions for periodUnit
     */
    _periodUnit?: Element;

    /**
     * If one or more days of week is provided, then the action happens only on the specified day(s).
     */
    dayOfWeek?: string | string[];

    /**
     * Extensions for dayOfWeek
     */
    _dayOfWeek?: Element | Element[];

    /**
     * Specified time of day for action to take place.
     */
    timeOfDay?: string | string[];

    /**
     * Extensions for timeOfDay
     */
    _timeOfDay?: Element | Element[];

    /**
     * An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.
     */
    when?: when | when[];

    /**
     * Extensions for when
     */
    _when?: Element | Element[];

    /**
     * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: number;

    /**
     * Extensions for offset
     */
    _offset?: Element;


}

/**
 * The units of time for the duration, in UCUM units.
 */
export enum durationUnit
{
    "s",
    "min",
    "h",
    "d",
    "wk",
    "mo",
    "a"
}


/**
 * The units of time for the period in UCUM units.
 */
export enum periodUnit
{
    "s",
    "min",
    "h",
    "d",
    "wk",
    "mo",
    "a"
}


/**
 * An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.
 */
export enum when
{
    "MORN",
    "NOON",
    "AFT",
    "EVE",
    "NIGHT",
    "PHS",
    "HS",
    "WAKE",
    "C",
    "CM",
    "CD",
    "CV",
    "AC",
    "ACM",
    "ACD",
    "ACV",
    "PC",
    "PCM",
    "PCD",
    "PCV"
}


