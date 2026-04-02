<script setup>
</script>

<template>
  <footer class="border-t py-8" style="border-color: var(--border); background: var(--bg-primary);">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Name + Copyright -->
      <div class="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" class="h-7 w-7 rounded-md opacity-80" />
        <span class="text-sm" style="color: var(--text-muted);">
          © {{ new Date().getFullYear() }} Simone Buccolieri — Tutti i diritti riservati.
        </span>
      </div>

      <!-- Social links -->
      <div class="flex items-center gap-3">
        <a href="https://github.com/SimoneBuccolieri" target="_blank" aria-label="Profilo GitHub"
          class="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:text-brand-400"
          style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/simone-buccolieri" target="_blank" aria-label="Profilo LinkedIn"
          class="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:text-brand-400"
          style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="mailto:simone@buccolieri.com" aria-label="Invia Email"
          class="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:text-brand-400"
          style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
        <a href="cv_simone.pdf" aria-label="Scarica CV"
          class="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:text-brand-400"
          style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        </a>
      </div>
    </div>
  </footer>
</template>
