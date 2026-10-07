/**
 * Request start date, in YYYY-MM-DD format. If not provided, the request will start running at the next scheduled time, based on the timezone of the account. Past 'startDate' values will be rejected at request submission.
 */
export type TriggerDate = string;
