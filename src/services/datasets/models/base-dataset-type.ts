import * as core from '../../../core';
import { BaseDatasetType2, baseDatasetType2 } from './base-dataset-type-2';
import { Type_ } from '../../common/type';

/**
 * Cast schema for the BaseDatasetType model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const baseDatasetType = core.cast.identity<BaseDatasetType>();

export type BaseDatasetType = Type_ | BaseDatasetType2;

export const baseDatasetTypeResponse = core.cast.identity<BaseDatasetType>();

export const baseDatasetTypeRequest = core.cast.identity<BaseDatasetType>();
