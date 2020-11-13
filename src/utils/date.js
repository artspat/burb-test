import { format } from 'date-fns';

export const getDateString = (date) => isNaN(Date.parse(date)) ? '' : format(new Date(date), 'MMM dd, yyyy');