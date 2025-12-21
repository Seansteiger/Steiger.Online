# Troubleshooting & Implementation Notes

This document serves as a reference for resolved issues and configuration details, particularly regarding the AI integration and deployment.

## AI Assistant (Gemini API)

### 1. Model Availability & 404 Errors
**Issue:**  
Persistent `[404] models/gemini-1.5-flash is not found` errors, even with valid keys.

**Cause:**  
Specific model aliases (e.g., `gemini-1.5-flash`, `gemini-1.5-flash-001`, `gemini-pro`) were inconsistently available or not mapped correctly in the `v1beta` endpoint for the active API key tier.

**Resolution:**  
We utilized a script to list explicitly available models associated with the key.
**Confirmed Working Model:** `gemini-flash-latest`

### 2. Chat History Structure (400 Bad Request)
**Issue:**  
`[GoogleGenerativeAI Error]: First content should be with role 'user', got model.`

**Cause:**  
The Gemini API enforces that conversation history *must* strictly alternate User -> Model -> User. Our chat state initialized with a static greeting (`{ role: 'model', ... }`), which was being sent as the first item in the history payload.

**Fix:**  
The `handleSend` function in `AIAssistant.tsx` now explicitly filters out the first message (index 0) before constructing the payload.
```javascript
const historyMsg = messages.filter((_, i) => i > 0); // Exclude filtering greeting
```

### 3. API Key Security (403 Forbidden)
**Issue:**  
`[403] Your API key was reported as leaked.`

**Cause:**  
The original API key was exposed in the git history and subsequently blocked by Google's safety filters.

**Fix:**  
- API Key was rotated.
- Application now uses `import.meta.env.VITE_GEMINI_API_KEY` with a `process.env` fallback defined in `vite.config.ts`.

## Build & Deployment

### Tailwind CSS Syntax
**Issue:**  
Build failures due to malformed class names (e.g., `rounded - xl` instead of `rounded-xl`).

**Fix:**  
A comprehensive pass on `Portfolio.tsx` corrected all spaced class names.

### Environment Variables
To ensure variables work cleanly across local dev (`.env.local`) and GitHub Pages (Static):
1.  **Vite Define:** `vite.config.ts` explicitly defines `process.env.GEMINI_API_KEY` to support the fallback logic.
2.  **Type Defs:** `vite-env.d.ts` was added to resolve TypeScript errors with `import.meta.env`.

## React Component Logic

### Ref Persistence & UseEffect
**Issue:**
IntersectionObserver functionality (or other DOM-dependent logic) failing silently despite correct setup.

**Cause:**
Clearing the ref array (e.g., `cardsRef.current = []`) inside the `useEffect` hook.
`useEffect` runs **after** the render cycle. If the refs were assigned during render (via `ref={el => ...}`), clearing the array inside `useEffect` wipes out those references immediately before the logic tries to use them.

**Fix:**
Do **not** clear refs inside `useEffect`. If cleanup is needed, do it in the cleanup function (return) or handle it conditionally during the render loop itself.
```javascript
// DO NOT DO THIS inside useEffect:
// cardsRef.current = []; 
```
