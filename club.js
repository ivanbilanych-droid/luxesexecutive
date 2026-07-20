document.addEventListener('DOMContentLoaded', () => {
  const whatsappNumber = '420777399799';

  document.querySelectorAll('form[data-wa-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const lines = [form.dataset.waTitle || 'LUXES EXECUTIVE'];
      form.querySelectorAll('input, textarea, select').forEach((field) => {
        if (!field.value || field.type === 'submit') return;
        const wrapper = field.closest('.field');
        const label = wrapper?.querySelector('label')?.textContent?.trim() || field.name;
        lines.push(`${label}: ${field.value.trim()}`);
      });
      lines.push(`Page: ${window.location.href.split('#')[0]}`);

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});
