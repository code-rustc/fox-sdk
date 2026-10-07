import * as core from '../../../core';
import { ArchivesItemType2, archivesItemType2 } from './archives-item-type-2';
import { Type_ } from '../../common/type';

/**
 * Cast schema for the ArchivesItemType model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const archivesItemType = core.cast.identity<ArchivesItemType>();

export type ArchivesItemType = Type_ | ArchivesItemType2;

export const archivesItemTypeResponse = core.cast.identity<ArchivesItemType>();

export const archivesItemTypeRequest = core.cast.identity<ArchivesItemType>();
