import * as core from '../../core';

export const NoticeImpact = {
  ActionRequired: 'ACTION_REQUIRED',
  ReviewRecommended: 'REVIEW_RECOMMENDED',
  InformationOnly: 'INFORMATION_ONLY',
} as const;

export type NoticeImpact = (typeof NoticeImpact)[keyof typeof NoticeImpact];

export const noticeImpact = core.cast.identity<NoticeImpact>();
