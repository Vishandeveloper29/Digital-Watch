# 🕐 Digital Watch

A lightweight, browser-based **Digital Clock** and **Countdown Timer** built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.
---

## ✨ Features
🔗 link : https://vishandeveloper29.github.io/Digital-Watch/

### 🕒 Digital Clock
- Displays real-time local time in `HH:MM:SS` format
- Auto-updates every second
- Zero-padded for consistent display

### ⏱️ Countdown Timer
- Set custom duration via minute & second inputs
- **Start** — begins the countdown
- **Pause** — halts mid-countdown, preserving remaining time
- **Resume** — continues from where it was paused
- **Reset** — clears all state, returns to `00:00`
- Visual indicator when countdown reaches zero

---

## 🚀 Getting Started

No installation or build tools required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digital-watch.git
   ```

2. **Open in browser**
   ```bash
   cd digital-watch
   open index.html
   ```

That's it! The clock starts immediately. 🎉

---

## 📁 File Structure

```
digital-watch/
├── index.html    # Markup: clock display + timer controls
├── style.css     # Styles for layout, inputs, buttons, and states
└── script.js     # All clock and timer logic
```

---

## 🛠️ How It Works

### Clock
`updateclock()` reads the current time from the JavaScript `Date` object, zero-pads each component, and writes it to the `#clock` element every second via `setInterval`.

### Timer
A single integer (`remsecend`) tracks remaining seconds. On **Start**, input values are converted to total seconds. A 1-second interval calls `stick()`, which decrements the counter and updates the display until zero is reached.

| Function | Description |
|---|---|
| `updateclock()` | Reads current time and updates the clock display |
| `formattime(s)` | Converts total seconds to `MM:SS` string |
| `updatedisplay()` | Writes formatted remaining time to the timer display |
| `stick()` | Decrements remaining seconds; clears interval at zero |

---

## 🧰 Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🌐 Browser Support

Works in all modern browsers — Chrome, Firefox, Edge, Safari. No polyfills needed.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ using Vanilla JS
