import * as core from '../../core';

/**
 * Cannot be an empty object.
 */
export interface ActionsFilter {
  /** Filter corporate actions responses by requesting only certain categories of actions. The [Data License Guide](https://developer.blpprofessional.com/portal/documents/data_license/dl_guide?chapterId=4564#sftp_and_web_services-program_names-get_actions) provides a list of mnemonics for these categories. */
  actionEventTypeMnemonics?: string[] | undefined;
  /** Filter corporate actions responses by requesting only certain actions. The [Data License Guide](https://developer.blpprofessional.com/portal/documents/data_license/dl_guide?chapterId=4564#sftp_and_web_services-program_names-get_actions) provides a list of mnemonics for all corporate actions. */
  actionMnemonics?: string[] | undefined;
}

/**
 * Cast schema for the ActionsFilter model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const actionsFilter = core.cast.identity<ActionsFilter>();

/**
 * Cast schema for mapping API responses to the ActionsFilter application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const actionsFilterResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['actionEventTypeMnemonics', 'actionMnemonics']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    actionEventTypeMnemonics: raw['actionEventTypeMnemonics'],
    actionMnemonics: raw['actionMnemonics'],
  };
}, []);

/**
 * Cast schema for mapping the ActionsFilter application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const actionsFilterRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    actionEventTypeMnemonics: raw['actionEventTypeMnemonics'],
    actionMnemonics: raw['actionMnemonics'],
  };
}, []);
