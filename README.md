# MTK — Speed Converter

A minimal, industrial-themed dark web app for converting between **km/h** and **mph** in real time. Bidirectional — type in either field and the other updates instantly.

```
[ KM/H <-> MPH ]
```

## Features

- Live bidirectional conversion (no submit button needed)
- Industrial dark UI with monospace typography and grid background
- Pulsing status indicator and orange accent details
- Reset button to clear both fields
- Conversion ratios displayed in the footer
- Zero dependencies — pure HTML, CSS, and JavaScript
- Responsive layout

## Getting Started

Clone or download the files, then open `index.html` in any modern browser:

```bash
xdg-open index.html
```

Or serve locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## File Structure

```
mtk/
├── index.html    # Markup
├── style.css     # Industrial dark theme
├── script.js     # Conversion logic
└── README.md     # This file
```

## Conversion Formulas

| Direction        | Ratio                    |
|------------------|--------------------------|
| km/h → mph       | `value * 0.621371`       |
| mph → km/h       | `value * 1.609344`       |

Results are rounded to two decimal places.

## Customization

Theme colors live as CSS variables in `style.css`:

```css
:root {
    --bg: #0a0a0b;
    --panel: #111114;
    --accent: #ff7a1a;
    --text: #d4d4d8;
    /* ... */
}
```

Change `--accent` to swap the highlight color across the entire UI.

## Browser Support

Works in any modern browser that supports CSS custom properties and ES6.

## License

MIT — do whatever you want with it.

---

`MTK-001 // ONLINE`

`ALPTOOLS`
