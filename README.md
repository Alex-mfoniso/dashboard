

```markdown
# Dashboard

A high-performance, responsive analytics dashboard built with **React**, **Tailwind CSS**, and **Lucide Icons**. This project features a clean, professional UI with real-time activity feeds, statistics cards, and a sidebar navigation.

## 🚀 Features

- **Activity Feed**: A scrollable sidebar with custom status indicators and message bubbles.
- **Dynamic InfoCards**: Statistic cards featuring:
  - Custom vertical separators.
  - Trend indicators (positive/negative) using solid triangle icons.
  - Support for both Lucide Components and FontAwesome strings.
- **Responsive Layout**: A fixed-height sidebar with internal scrolling for a "force-fit" professional feel.
- **Modern UI/UX**: Utilizes the Slate and Emerald color palettes for a crisp, accessible look.

## 🛠️ Tech Stack

- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide-React
- **State Management**: Functional Components & Hooks

## 📸 Component Highlights

### InfoCard
The InfoCard component is designed to show quick metrics with trend data. It uses a custom mapper to handle icon strings from JSON data without crashing the React DOM.

### RightSidebar
Includes a user profile section, a scroll-managed activity feed, and a sticky message input box at the bottom.

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Alex-mfoniso/dashboard.git](https://github.com/Alex-mfoniso/dashboard.git)

```

2. Install dependencies:
```bash
npm install

```


3. Start the development server:
```bash
npm run dev

```



## 📂 Project Structure

```text
src/
├── components/
│   ├── InfoCard.jsx      # Reusable stat cards with trend logic
│   ├── RightSidebar.jsx  # Fixed sidebar with activity feed
│   └── Header.jsx        # Greeting and date display
├── data/
│   └── dashboard.json    # Mock data for cards and charts
└── App.js                # Main layout composition

```

## 👤 Author

**Alex Mfoniso**

* GitHub: [@Alex-mfoniso](https://www.google.com/search?q=https://github.com/Alex-mfoniso)

```

--