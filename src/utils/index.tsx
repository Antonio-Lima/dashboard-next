import { NotificationType } from "@/@types";

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

interface GroupedNotifications {
  [date: string]: NotificationType[];
}

export function groupNotificationsByDate(
  list: NotificationType[]
): GroupedNotifications {
  return list.reduce((acc: GroupedNotifications, obj: NotificationType) => {
    const date = obj.createAt.split(" ")[0];

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(obj);

    return acc;
  }, {});
}

export function isToday(dateStr: string): boolean {
  const [day, month, year] = dateStr.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return date.getTime() === now.getTime();
}
