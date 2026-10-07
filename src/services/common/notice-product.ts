import * as core from '../../core';

export const NoticeProduct = {
  Dlbu: 'DLBU',
  Dlps: 'DLPS',
  Dlplus: 'DLPLUS',
  BvalCash: 'BVAL_CASH',
  BvalOtc: 'BVAL_OTC',
  BPipe: 'B-PIPE',
  DataDistributionPlatform: 'DATA_DISTRIBUTION_PLATFORM',
  Sapi: 'SAPI',
} as const;

export type NoticeProduct = (typeof NoticeProduct)[keyof typeof NoticeProduct];

export const noticeProduct = core.cast.identity<NoticeProduct>();
