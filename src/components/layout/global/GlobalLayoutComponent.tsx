'use client'

import React from 'react'
import GlobalTopNavbarComponent from './GlobalTopNavbarComponent'
import GlobalFooterComponent from './GlobalFooterComponent'

export default function GlobalLayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      {/* Top Navbar */}
      <div className="row">
          <GlobalTopNavbarComponent />
      </div>

      {/* Main Content */}
      <div className="row flex-grow-1">
          {children}
      </div>

      {/* Footer */}
      <div className="row">
          <GlobalFooterComponent />
      </div>
    </div>
  )
}
