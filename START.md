# Medical Symptom Checker - Quick Start

**Developer:** Gaurang Dosar

## 🚀 Start in 2 Minutes

### 1. Start Backend Server
```bash
node gemini-server-simple.mjs
```
✅ Should show: `🚀 Local Gemini API Server Running!`

### 2. Start Frontend (new terminal)
```bash
npm run dev
```
✅ Should show: `Local: http://localhost:8080/`

### 3. Test the App
Open **http://localhost:8080** and enter symptoms

---

## 🧪 Quick Tests

```bash
node test-gemini.js       # Quick API test
node test-enhanced.js     # Comprehensive scenarios
```

---

## 📁 Core Files (One Server Only)

```
✅ gemini-server-simple.mjs    # MAIN SERVER (enhanced with retry logic)
✅ test-gemini.js              # Quick test
✅ test-enhanced.js            # Comprehensive test
```

---

## ⚙️ Configuration

- **Model**: `gemini-2.5-flash` (Better reasoning!)
- **API**: v1beta with auto-retry
- **Port**: 3001 (backend), 8080 (frontend)
- **Retry**: 3 attempts on 503 errors

---

## 🔧 Troubleshooting

**Port in use?**
```bash
taskkill /F /IM node.exe
```

**503 errors?**  
Auto-retry handles this (3 attempts with backoff)

---

## 🎯 Model Comparison

| Model | Speed | Quality | Availability |
|-------|-------|---------|--------------|
| gemini-2.5-flash ⭐ | Fast | Excellent | Good |
| gemini-2.0-flash | Fastest | Good | Always |
| gemini-2.5-pro | Slow | Best | Limited |

**Current:** gemini-2.5-flash (best balance)

To switch, edit `gemini-server-simple.mjs`:
```javascript
const MODEL = 'gemini-2.5-flash';  // Change here
```

---

**Ready!** 🎉 All working with one clean server file.
