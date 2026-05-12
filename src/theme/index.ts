export const COLORS = {
  primary: '#8B5CF6', // Electric Purple
  secondary: '#0EA5E9', // Sky Blue
  background: '#0F172A', // Deep Midnight
  surface: '#1E293B', // Slate Surface
  text: '#F8FAFC', // Near White
  textSecondary: '#94A3B8', // Muted Slate
  error: '#EF4444', // Red
  success: '#22C55E', // Green
  warning: '#F59E0B', // Amber
  border: '#334155', // Border
  glass: 'rgba(255, 255, 255, 0.1)',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const FONT_WEIGHTS = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

// Common shadows for elevation
export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};
