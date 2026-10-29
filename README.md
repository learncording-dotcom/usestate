# React Counter & Multiplication Table App

A simple and interactive React application built with Vite featuring a dynamic counter and a real-time highlighted 1–12 multiplication grid.

---

## 🚀 Features

- **Student Profile Counter**:
  - Increments by `+4` with the **Add** button.
  - Decrements by `-3` with the **Remove** button.
  - Checks and alerts when the count is divisible by 7.
- **Dynamic 1–12 Multiplication Grid**:
  - Displays numbers `1` to `12` horizontally (columns) and vertically (rows).
  - Generates a full $12 \times 12$ multiplication table (1 to 144).
  - Automatically highlights:
    - **Product cells** in green when their value matches the current count.
    - **Header cells** in gold when row/column indices match the count.
- **Clean Layout**: Responsive, stacked card design built using Flexbox and CSS Grid.

---

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **CSS3** (CSS Grid & Flexbox)

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open your browser at `http://localhost:5173` (or the URL displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```text
my-react-app/
├── src/
│   ├── components/
│   │   ├── Counter.jsx    # Counter controls & profile card
│   │   └── Table.jsx      # 1–12 2D multiplication grid
│   ├── App.jsx            # Main app component & state management
│   ├── App.css            # Layout & highlight styling
│   ├── main.jsx           # React DOM root entry
│   └── index.css          # Global styles
├── package.json
└── README.md
```

