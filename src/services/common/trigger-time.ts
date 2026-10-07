/**
 * Request start time, in HH:MM:00 format in the default time zone for your account (i.e., Eastern Daylight Time (New York), Greenwhich Mean Time (London), or Japan Standard Time (Tokyo)). If you do not provide a `startTime` and the `startDate` is in the future, your request is scheduled for 00:00 on the `startDate`.
 */
export type TriggerTime = string;
