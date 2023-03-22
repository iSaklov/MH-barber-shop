import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'

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
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default useRoutes
