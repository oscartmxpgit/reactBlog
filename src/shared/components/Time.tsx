import { format, parseISO } from 'date-fns';
import ES from 'date-fns/locale/es';

export default function Time({ date }: { date: string }) {
  const parseDate = parseISO(date);
  return (
    <time dateTime={date}>
      {format(parseDate, 'd LLL yyyy', { locale: ES })}
    </time>
  );
}
