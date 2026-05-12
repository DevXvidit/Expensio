<p align="center">
  <img src="./assets/images/logo.png" width="150" alt="Expensio Logo" />
</p>

# Expensio - Premium Expense Tracker

**Expensio** is a high-fidelity, production-grade expense tracking application built with React Native CLI. It focuses on speed, modularity, and a premium user experience.

## 🚀 Overview
The project is a 5-day implementation of a robust financial dashboard, featuring real-time data synchronization with Firebase and a state-of-the-art UI using NativeWind and Reanimated.

### 📱 Feature Roadmap (4 Key Screens)

#### **S1: Login / Register**
- Secure authentication via **Firebase Auth**.
- Email/Password based login and account creation.
- Session persistence (Stay logged in).

#### **S2: Dashboard**
- **Monthly Total**: Visual summary of spending for the current month.
- **Recent Expenses**: A quick view of the latest 5 transactions.
- **Category Breakdown**: Analytical view of spending across different categories.

#### **S3: Add Expense**
- Interactive amount input.
- Elegant category picker.
- Date selection and notes field.
- Real-time write to **Cloud Firestore**.

#### **S4: History**
- Comprehensive list of all expenses.
- Smart filtering by category.
- Record management (delete own records).

---

## 🛠️ Tech Stack
- **Framework**: React Native CLI
- **Styling**: NativeWind (Tailwind CSS)
- **State Management**: Zustand
- **Server State**: TanStack Query (React Query)
- **Database**: Firebase Firestore
- **Auth**: Firebase Auth
- **Storage**: MMKV
- **Animations**: Moti + Reanimated
- **Forms**: React Hook Form + Zod

---

## 📁 Project Structure
The project follows a **Feature-Based** and **Component-Isolation** pattern:
- `src/components/`: Isolated UI components (no index.ts files).
- `src/store/`: Centralized global state.
- `src/queries/`: API hooks and data fetching logic.
- `src/screens/`: Main application screens.
- `src/constants/`: Shared categories and navigation routes.
- `docs/`: Technical documentation and guidelines.

## 🏁 Getting Started

### Prerequisites
- Node.js >= 22
- React Native Environment Setup (Android Studio / Xcode)

### Installation
1. Clone the repository.
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Install pods (iOS only):
   ```sh
   npx pod-install
   ```
4. Start the application:
   ```sh
   pnpm start
   pnpm android # or pnpm ios
   ```

## 🛠️ Debugging
This project uses **Reactotron** for debugging. Ensure you have the Reactotron desktop app installed for real-time state and network monitoring.
