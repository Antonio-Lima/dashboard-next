const months = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export function getFormatedActualDate(): string {
  const now = new Date();
  const month = now.getMonth(); // retorna o índice do mês (0-11)
  const year = now.getFullYear(); // retorna o ano (ex: 2024)
  return `${months[month]}, ${year}`;
}
