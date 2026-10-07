import * as core from '../../../core';
import { ArchiveType2, archiveType2 } from './archive-type-2';
import { Type_ } from '../../common/type';

/**
 * Cast schema for the ArchiveType model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const archiveType = core.cast.identity<ArchiveType>();

export type ArchiveType = Type_ | ArchiveType2;

export const archiveTypeResponse = core.cast.identity<ArchiveType>();

export const archiveTypeRequest = core.cast.identity<ArchiveType>();
