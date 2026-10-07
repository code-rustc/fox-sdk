import * as core from '../../../core';

export const PaginatedViewType = {
  PartialCollectionView: 'PartialCollectionView',
} as const;

export type PaginatedViewType = (typeof PaginatedViewType)[keyof typeof PaginatedViewType];

export const paginatedViewType = core.cast.identity<PaginatedViewType>();
