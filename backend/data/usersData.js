import bcrypt from 'bcryptjs'

const USERS = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Christian Viezzer',
    email: 'chv@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Maria Jerez',
    email: 'mj@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default USERS
