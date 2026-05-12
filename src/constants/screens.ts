export const SCREENS = {
    AUTH: {
        LOGIN: 'Login' as const,
        REGISTER: 'Register' as const,
        FORGOT_PASSWORD: 'ForgotPassword' as const,
    },
    MAIN: {
        DASHBOARD: 'Dashboard' as const,
        HISTORY: 'History' as const,
        ADD_EXPENSE: 'AddExpense' as const,
        SETTINGS: 'Settings' as const,
    },
    ROOT: {
        AUTH_STACK: 'AuthStack' as const,
        MAIN_STACK: 'MainStack' as const,
    }
};