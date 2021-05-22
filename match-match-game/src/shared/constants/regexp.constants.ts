export const RegExpConstants = Object.defineProperties({}, {
  INPUT_INITIALS: {
    value: '^([А-Яа-яёa-zA-Z ]{1,30})$',
    writable: false,
  },
  INPUT_EMAIL: {
    value: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$',
    writable: false,
  },
});
