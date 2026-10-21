
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'aurix-demo-users'
const SESSION_KEY = 'aurix-demo-session'

function readJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    readJSON(SESSION_KEY, null),
  )

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(SESSION_KEY)
    }
  }, [user])

  const signUp = useCallback((details) => {
    const users = readJSON(USERS_KEY, [])
    const email = details.email.trim().toLowerCase()

    if (users.some((item) => item.email === email)) {
      return {
        ok: false,
        message: 'An account with this email already exists.',
      }
    }

    const newUser = {
      name: details.name.trim(),
      email,
      phone: details.phone.trim(),
      password: details.password,
    }

    users.push(newUser)
    localStorage.setItem(USERS_KEY, JSON.stringify(users))

    setUser({
      name: newUser.name,
      email: newUser.email,
    })

    return { ok: true, message: 'Account created successfully!' }
  }, [])

  const signIn = useCallback((details) => {
    const users = readJSON(USERS_KEY, [])
    const email = details.email.trim().toLowerCase()

    const found = users.find(
      (item) =>
        item.email === email &&
        item.password === details.password,
    )

    if (!found) {
      return {
        ok: false,
        message: 'Invalid email or password. Please try again.',
      }
    }

    const session = {
      name: found.name,
      email: found.email,
    }

    setUser(session)

    if (details.remember) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    } else {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
    }

    return { ok: true, message: 'Welcome back!' }
  }, [])

  const signOut = useCallback(() => {
    setUser(null)
    sessionStorage.removeItem(SESSION_KEY)
    localStorage.removeItem(SESSION_KEY)
  }, [])

  const updateProfile = useCallback((details) => {
    setUser((current) =>
      current ? { ...current, ...details } : current,
    )
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
