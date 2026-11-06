import { escapeHtml, formatPercentValue } from '../../utils/formatting.js';

/** Gráfico de barras horizontales accesible (lista semántica). */
export function barChart({ rows, emptyMessage = '' }) {
  if (!rows || rows.length === 0) {
    return `<p class="text-muted">${escapeHtml(emptyMessage)}</p>`;
  }
  const items = rows
    .map((row) => {
      const percent = Math.max(0, Math.min(100, Math.round(row.value ?? 0)));
      const variant =
        row.variant ?? (percent >= 80 ? 'success' : percent >= 60 ? 'warning' : 'danger');
      return `
        <li class="bar-row">
          <span class="bar-row__label">${escapeHtml(row.label)}</span>
          <span class="bar-row__track">
            <span class="bar-row__fill bar-row__fill--${variant}" style="width:${percent}%"></span>
          </span>
          <span class="bar-row__value">${escapeHtml(row.display ?? formatPercentValue(percent))}</span>
        </li>
      `;
    })
    .join('');
  return `<ul class="bar-chart">${items}</ul>`;
}

/** Anillo de progreso SVG. `value` de 0 a 100. */
export function progressRing({ value = 0, size = 128, stroke = 12, label = null }) {
  const percent = Math.max(0, Math.min(100, Math.round(value)));
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const color = percent >= 80 ? 'var(--color-success)' : percent >= 60 ? 'var(--color-warning)' : 'var(--color-ocean)';

  return `
    <div class="progress-ring" style="width:${size}px;height:${size}px"
         role="img" aria-label="${escapeHtml(label ?? `${percent}%`)}">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
        <circle cx="${size / 2}" cy="${size / 2}" r="${radius}" fill="none"
                stroke="var(--surface-muted)" stroke-width="${stroke}" />
        <circle cx="${size / 2}" cy="${size / 2}" r="${radius}" fill="none"
                stroke="${color}" stroke-width="${stroke}" stroke-linecap="round"
                stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
                transform="rotate(-90 ${size / 2} ${size / 2})" />
      </svg>
      <span class="progress-ring__label">${percent}%</span>
    </div>
  `;
}

export default { barChart, progressRing };
