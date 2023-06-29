export const Paths = {
  home: '/',
  users: '/users',
  usersAdd: '/users/add',
  usersDetails: (username: string) => `/users/${username}`,
} as const;
