import includes from 'lodash/includes';
import startCase from 'lodash/startCase';

export const prettifyTitle = (title: string): string => {
  if (includes(title, '-')) {
    return startCase(title);
  }
  return title;
};
