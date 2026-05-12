import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  TextInputProps,
  TouchableOpacity
} from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { styles } from './Input.styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  isPassword?: boolean;
}

const Input = ({ label, error, isPassword, style, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View 
        style={[
          styles.inputWrapper, 
          isFocused && styles.inputFocused,
          error ? styles.inputError : null
        ]}
      >
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconWrapper}
          >
            {showPassword ? (
              <EyeOff size={20} color="rgba(255, 255, 255, 0.6)" />
            ) : (
              <Eye size={20} color="rgba(255, 255, 255, 0.6)" />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
