//TODO this routing was planned to be used in a react application
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/admin/Dashboard'
import PublicPage from './components/PublicPage'

const useRoutes = (isAdmin) => {
  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default useRoutes
