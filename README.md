# Slateman Hunsrück - Landing Page

Eine moderne, responsive Landing Page für die Slateman Hunsrück Mountainbike-Routen im Hunsrück, Rheinland-Pfalz.

## 🚀 Features

- **Modernes Design**: Sauberes, responsives Design mit modernen Webtechnologien
- **Mobile-First**: Optimiert für alle Geräte (Desktop, Tablet, Smartphone)
- **Performance**: Schnelle Ladezeiten durch optimierte Assets
- **Accessibility**: Barrierefreie Gestaltung mit Keyboard-Navigation
- **SEO-Optimiert**: Meta-Tags und strukturierte Daten für bessere Suchmaschinen-Auffindbarkeit

## 📱 Technologien

- **HTML5**: Semantische Struktur
- **CSS3**: Moderne Styling mit CSS Grid, Flexbox und Custom Properties
- **JavaScript**: Interaktive Features und mobile Navigation
- **Font Awesome**: Icons für bessere Benutzererfahrung
- **Google Fonts**: Inter Font für moderne Typografie

## 🏗️ Projektstruktur

```
slateman.de/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # CSS-Styles
├── script.js           # JavaScript-Funktionalität
├── nutzungsbestimmungen.html  # Nutzungsbestimmungen
└── README.md           # Diese Datei
```

## 🌐 GitHub Pages Hosting

### Automatisches Deployment

1. **Repository erstellen**: Erstelle ein neues GitHub Repository namens `slateman.de`
2. **Dateien hochladen**: Lade alle Projektdateien in das Repository hoch
3. **GitHub Pages aktivieren**:
   - Gehe zu Repository Settings
   - Scrolle zu "Pages" im linken Menü
   - Wähle "Deploy from a branch" aus
   - Wähle "main" Branch und "/ (root)" Ordner
   - Klicke "Save"
4. **Custom Domain konfigurieren**:
   - Die `CNAME` Datei ist bereits erstellt
   - Konfiguriere DNS-Einstellungen bei deinem Domain-Provider
   - GitHub Pages erkennt automatisch die Domain `slateman.de`

### Manuelles Deployment

```bash
# Repository klonen
git clone https://github.com/yourusername/slateman.de.git
cd slateman.de

# Dateien hinzufügen
git add .
git commit -m "Initial commit: Slateman Hunsrück Landing Page"
git push origin main
```

## 📋 Inhalt

Die Website enthält alle wichtigen Informationen über die Slateman Hunsrück Mountainbike-Routen:

- **Route-Informationen**: Zwei einzigartige Routen (Soonwald und Hochwald) mit detaillierten Beschreibungen
- **Finisher-System**: Gold, Silber und Bronze Kategorien für erfolgreiche Absolventen
- **Kostenlose GPX-Files**: Download-Links für beide Routen
- **WhatsApp-Kontakt**: Direkte Kommunikation für Finisher-Meldungen und Support
- **Nutzungsbestimmungen**: Wichtige Regeln und Sicherheitshinweise

## 🎨 Design-Features

- **Responsive Grid-Layout**: Automatische Anpassung an verschiedene Bildschirmgrößen
- **Smooth Animations**: Sanfte Übergänge und Hover-Effekte
- **Modern Color Scheme**: Lila-Purpur Farbpalette passend zum Mountainbike-Abenteuer
- **Card-based Layout**: Übersichtliche Darstellung der Routen und Finisher-Kategorien
- **Fixed Navigation**: Immer sichtbare Navigation mit Blur-Effekt

## 🔧 Anpassungen

### Farben ändern

Die Hauptfarben können in der `styles.css` Datei angepasst werden:

```css
:root {
    --primary-color: #8b5cf6;    /* Hauptfarbe */
    --secondary-color: #1e1b4b;  /* Sekundärfarbe */
    --accent-color: #a855f7;     /* Akzentfarbe */
}
```

### Inhalte bearbeiten

Alle Inhalte können direkt in der `index.html` Datei bearbeitet werden. Die Struktur ist semantisch aufgebaut und leicht zu verstehen.

## 🏆 Finisher-System

Das Finisher-System ist ein zentrales Feature der Website:

- **Gold**: Die Elite der Finisher
- **Silber**: Die erfahrenen Abenteurer  
- **Bronze**: Die ersten Pioniere

Finisher melden sich per WhatsApp (+49 160 90813466) um gelistet zu werden.

## 🗺️ Routen

### Route 1: Slateman Hunsrück-Soonwald
- **Distanz**: 213 km
- **Höhenmeter**: 3.690 m
- **Highlights**: Burgruine Schmidtburg, Geierlay Hängebrücke, Devils Rock Trail

### Route 2: Slateman Hunsrück-Hochwald
- **Distanz**: 195 km
- **Höhenmeter**: 3.590 m
- **Highlights**: Nationalpark Hunsrück-Hochwald, Erbeskopf, Bikearena Hattgenstein

---

**Slateman Hunsrück** - Mountainbike Abenteuer im Hunsrück, Rheinland-Pfalz

*Erstellt mit ❤️ für die Mountainbike Community* 