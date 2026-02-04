# 🧬 MorphMenu

A fluid, morphing popup menu that smoothly transforms from a button into a contextual menu — built with React, TypeScript, and Motion.

The menu dynamically expands, shifts direction, and aligns itself based on configurable `direction` and `anchor` props, creating a tactile, polished interaction that feels alive.

## ✨ Technologies

- React
- TypeScript
- Motion
- Tailwind CSS
- Vite

## 🚀 Features

- Smooth morphing animation from button → menu
- Animated width, height, and border-radius transitions
- Direction-aware expansion (top, bottom, left, right)
- Anchor-based alignment (start, center, end)
- Constraint-safe API (invalid direction/anchor combos handled)
- Spring-based motion for natural, responsive feel
- Clean compound-component architecture
- Fully customizable and reusable
- Strongly typed with TypeScript

## 📍 The Process

I wanted to explore how far a simple popup menu interaction could be pushed using motion alone — without relying on heavy positioning libraries.

The goal wasn’t just to show a menu, but to morph into it.

This component focuses on:

- Separating layout, placement, and animation responsibilities
- Avoiding transform conflicts by layering motion correctly
- Supporting multiple direction + anchor combinations
- Making the animation feel intentional and tactile

The result is a menu that:

- Expands from the trigger instead of appearing abruptly
- Slides naturally in the chosen direction
- Maintains visual alignment across configurations
- Feels expressive without being flashy

It’s designed as a playground for motion-driven UI patterns and a foundation for more advanced menus.

## 📦 Usage

```
import { Menu } from "./components/menu";

<Menu.Root direction="top" anchor="start">
  <Menu.Container
    buttonSize={40}
    menuWidth={160}
    menuRadius={12}
    className="bg-white shadow-lg ring-1 ring-black/5"
  >
    <Menu.Trigger>
      <div className="flex h-10 w-10 items-center justify-center">
        ⋯
      </div>
    </Menu.Trigger>

    <Menu.Content className="p-2">
      <Menu.Item>Edit</Menu.Item>
      <Menu.Item>Copy</Menu.Item>
      <Menu.Item>Share</Menu.Item>
      <Menu.Item>Archive</Menu.Item>
    </Menu.Content>
  </Menu.Container>
</Menu.Root>

```

## 🧭 Direction & Anchor

MorphMenu supports flexible positioning via two props:

`direction`

- `top`
- `bottom`
- `left`
- `right`

`anchor`

- `start`
- `center`
- `end`

> ℹ️ When using left or right, the anchor is automatically constrained to center to ensure correct alignment.

## 🚦 Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit: `http://localhost:5173` in your browser

## 🎛️ Preview Controls

The demo includes an interactive control panel that allows you to:

- Change direction and anchor live
- Preview all valid combinations
- See how the menu adapts in real time

This makes it easy to experiment, record demos, and explore motion behavior visually.

## 🎞️ Preview



https://github.com/user-attachments/assets/8f188333-a591-4a66-8e15-c321c4685b09

