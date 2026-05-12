import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BORDER_RADIUS, SPACING } from '../../theme';

interface GlassCardProps {
  children: ReactNode;
  style?: ViewStyle;
}

const GlassCard = ({ children, style }: GlassCardProps) => {


  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(30, 41, 59, 0.7)', // surface with opacity
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default GlassCard;
