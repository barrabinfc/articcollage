import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ArticGallery, {useArtworkList} from "./components/Artic/Gallery";
import "./styles/base.scss";

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
  const [artworkList, setArtworkList] = useArtworkList({
    match_phrase: {
      subject_titles: "mythology"
    }
  }, {
    from: 0,
    size: 12
  });

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ArticGallery artworkListReader={artworkList} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
