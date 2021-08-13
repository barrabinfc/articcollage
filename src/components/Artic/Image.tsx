import React, { useState } from "react";
import { getImageUrl, Artwork } from "./service";

export function Image({ artworkReader }: { artworkReader: () => Artwork }) {
  const { title = "", image_id = "" } = artworkReader();
  const imageUrl = getImageUrl(image_id);
  return <img alt={title} src={imageUrl} />;
}

// export default function ImageLoader({
//   identifier
// }: {
//   identifier: string | number;
// }) {
//   const createArtworkReader = (id: string | number) =>
//     getSuspenceReader(() => getArtwork(id));
//   const [artworkReader, setArtworkReader] = useState(() =>
//     createArtworkReader(identifier)
//   );

//   return (
//     <React.Suspense fallback="loading...">
//       <Image artworkReader={artworkReader} />
//     </React.Suspense>
//   );
// }
