export function getGreeting(name: string = "Пользователь"): string {
  const hours = new Date().getHours();

  if (hours >= 6 && hours < 12) {
    return `Доброе утро, ${name}`;
  }

  if (hours >= 12 && hours < 18) {
    return `Добрый день, ${name}`;
  }

  if (hours >= 17 && hours < 24) {
    return `Добрый вечер, ${name}`;
  }

  return `Доброй ночи, ${name}`;
}
