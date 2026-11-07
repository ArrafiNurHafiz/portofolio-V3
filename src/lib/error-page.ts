export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { --paper: #f4f4f0; --ink: #0a0a0a; --hazard: #e61919; }
      * { box-sizing: border-box; border-radius: 0; }
      body {
        font-family: "JetBrains Mono", ui-monospace, monospace;
        background: var(--paper);
        color: var(--ink);
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 1.5rem;
      }
      .card { max-width: 32rem; width: 100%; border: 2px solid var(--ink); background: var(--paper); }
      .bar {
        display: flex;
        justify-content: space-between;
        background: var(--ink);
        color: var(--paper);
        padding: 0.5rem 1rem;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
      }
      .body { padding: 1.5rem; }
      h1 {
        font-family: "Arial Black", Impact, sans-serif;
        font-size: 1.75rem;
        margin: 0 0 0.75rem;
        text-transform: uppercase;
        letter-spacing: -0.02em;
      }
      p { font-size: 13px; line-height: 1.6; margin: 0 0 1.5rem; color: #3a3934; }
      .actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
      a, button {
        font: inherit;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        padding: 0.75rem 1.25rem;
        border: 2px solid var(--ink);
        cursor: pointer;
        text-decoration: none;
      }
      .primary { background: var(--ink); color: var(--paper); }
      .primary:hover { background: var(--hazard); border-color: var(--hazard); color: #fff; }
      .secondary { background: transparent; color: var(--ink); }
      .secondary:hover { background: var(--ink); color: var(--paper); }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="bar"><span>ERR / 500</span><span>SYSTEM FAULT</span></div>
      <div class="body">
        <h1>This page didn't load</h1>
        <p>Something went wrong on our end. You can try refreshing or head back home.</p>
        <div class="actions">
          <button class="primary" onclick="location.reload()">Try again</button>
          <a class="secondary" href="/">Go home</a>
        </div>
      </div>
    </div>
  </body>
</html>`;
}
