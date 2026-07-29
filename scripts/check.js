import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');

const required = [
  'Amarella Spa',
  'Ama by SolversAI',
  '$6.000.000',
  '$27.000.000',
  'Instagram',
  'Google Calendar',
  'Agenda propia avanzada',
  'Caja, ingresos y egresos',
  'Inventario',
  'CRM de clientas',
  'Fidelización',
  'Dashboard gerencial',
  'Calculadora',
  'Presupuesto disponible',
  'Mariana',
  'reconectar contigo',
  'wa.me',
];

const missing = required.filter((text) => !html.includes(text));
if (missing.length) {
  console.error('Missing required content:', missing.join(', '));
  process.exit(1);
}

const forbidden = ['Leah', 'Atlab', 'Tetra Pak', 'Arturo Calle', 'Parkcol'];
const presentForbidden = forbidden.filter((text) => html.includes(text));
if (presentForbidden.length) {
  console.error('Forbidden legacy content:', presentForbidden.join(', '));
  process.exit(1);
}

console.log('check ok');
