import { COLORS, FONT_WEIGHTS } from './index';

export const TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.text,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.text,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: FONT_WEIGHTS.semiBold,
    color: COLORS.text,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: FONT_WEIGHTS.regular,
    color: COLORS.text,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: FONT_WEIGHTS.regular,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textSecondary,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
  },
};
