import React, { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ArticGallery from "./components/Artic/Gallery";
import "./styles.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>
        {error.name} {error.message}
      </pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ArticGallery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
