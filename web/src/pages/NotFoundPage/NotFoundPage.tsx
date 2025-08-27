import { Link } from '@redwoodjs/router'
import React from 'react'

const NotFoundPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 font-sans text-center">
      <section className="bg-white rounded-lg shadow-md p-8 max-w-md mx-4">
        <h1 className="text-3xl font-medium text-gray-800 mb-4">
          404 Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back to Home
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
