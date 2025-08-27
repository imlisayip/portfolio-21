// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful :)

// This import will be automatically removed when building for production
import { DevFatalErrorPage } from '@redwoodjs/web/dist/components/DevFatalErrorPage'
import React from 'react'

export default DevFatalErrorPage ||
  (() => (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 font-sans text-center">
      <section className="bg-white rounded-lg shadow-md p-8 max-w-md mx-4">
        <h1 className="text-3xl font-medium text-gray-800 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Refresh Page
        </button>
      </section>
    </main>
  ))
