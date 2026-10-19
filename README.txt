F.R.I.E.N.D. Website
==================

This download contains the complete editable website: HTML, CSS, JavaScript,
companion artwork, and locally bundled fonts. No API key or npm install is needed.

Run it locally
--------------
1. Extract this ZIP.
2. Open the FRIEND-Website folder in VS Code.
3. Open a terminal in that folder.
4. On Windows, run: py -m http.server 8000
   On macOS/Linux, run: python3 -m http.server 8000
5. Visit http://localhost:8000 in your browser.

Alternatively, use the VS Code Live Server extension from this folder.
Use a local server rather than double-clicking index.html, because the site
uses JavaScript modules and paths relative to the server root.

Files
-----
index.html: page structure and copy
style.css: visual design and responsive layouts
app.js: mood check-in, journal, breathing timer, and conversation interface
core.mjs: scripted conversation responses and shared logic
assets/: locally bundled fonts
favicon.svg: companion icon

Deployment
----------
Upload the contents of this folder to a static website host. Serve index.html
from the website root. No build step is required.

Prototype scope
---------------
The conversation uses prepared responses; no live AI model, voice integration,
or clinical assessment is connected. Journals stay in the current tab unless
the visitor explicitly chooses to save entries on their device.
