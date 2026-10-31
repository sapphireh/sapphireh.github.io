(() => {
  'use strict';
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());
  document.querySelectorAll('.copy-citation').forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.parentElement.querySelector('code');
      const status = document.getElementById('copy-status');
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Copied';
        if (status) status.textContent = 'Citation copied to clipboard.';
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code);
        if (selection) { selection.removeAllRanges(); selection.addRange(range); }
        button.textContent = 'Selected — copy manually';
        if (status) status.textContent = 'Citation selected. Press Control C or Command C to copy.';
      }
      window.setTimeout(() => { button.textContent = 'Copy citation'; }, 3500);
    });
  });
  const printButton = document.getElementById('print-cv');
  if (printButton) printButton.addEventListener('click', () => window.print());
})();
