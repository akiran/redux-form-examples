import isEmail from 'validator/lib/isEmail';

export function required(value) {
  return value ? undefined : 'Required'
}

export function email(value) {
  return value && isEmail(value) ? undefined : 'Not a valid email'
}
