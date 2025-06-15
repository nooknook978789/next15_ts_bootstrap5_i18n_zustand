# 🌐 Multilingual Next.js 15 App

This is a multilingual web application built with **Next.js 15 (App Router)**, styled with **Bootstrap 5**, and state-managed by **Zustand**. It supports **internationalized routing** using `next-intl` and allows dynamic switching between languages (`th`, `en`).

---

## 📦 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) – state management
- [next-intl](https://next-intl.dev/) – internationalization & localization

---

## 🚀 Features

- 🌍 i18n-ready with dynamic locale routes (`/en`, `/th`)
- 🧠 Global state with Zustand (for UI or user preferences)
- 🎨 Responsive UI with Bootstrap 5 components
- 🧭 Language switcher with automatic routing
- 🧪 Fully type-safe with TypeScript

---

## 📁 Project Structure

src/
├── app/
│ ├── [locale]/
│ │ ├── layout.tsx # Locale-aware layout
│ │ └── page.tsx # Localized home page
│ └── layout.tsx # Root layout
├── components/
│ ├── LangSwitcher/ # Language switcher component
│ └── UI/ # Reusable UI components using Bootstrap
├── messages/
│ ├── en.json # English translations
│ └── th.json # Thai translations
├── stores/ # Zustand stores
│ └── useStore.ts # Example Zustand state
├── i18n.ts # getMessages() function
├── middleware.ts # next-intl middleware


---

## ⚙️ Setup & Run

### 1. Install dependencies

```bash
npm install pnpm
pnpm install
pnpm run dev

Visit the app
English: http://localhost:3000/en
Thai: http://localhost:3000/th

Switching Languages
Use the <LangSwitcher /> component or navigate directly to /en or /th

Common Issues
Invalid i18n request configuration:
➤ Ensure getMessages({ locale }) is used properly in the layout.
➤ i18n.ts must export a default async function.
➤ Do not use useTranslations() outside client components.

useLocale must be used within a LocaleProvider:
➤ Ensure your component is wrapped with NextIntlClientProvider.

-
Created by [Your Nooknook or Team Nooknook]
Frontend powered by Next.js, Bootstrap 5, Zustand, and next-intl.