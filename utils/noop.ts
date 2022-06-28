import { format } from 'date-fns';

export const noop = () => {};
export const formatLongDate = (date: string) =>
  date ? format(new Date(date), 'MMM d, yyyy') : '';

export const formatCurrency = (amount: number) =>
  amount.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });
