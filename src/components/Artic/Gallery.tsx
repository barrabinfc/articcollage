import React, { Suspense, useState } from "react";
import getSuspenseReader from "../../utils/getSuspenseReader";

import { Image } from "./Image";
import {
  searchArtworks,
  PaginatedQuery,
  QueryClause,
  Artwork
} from "./service";

function createArtworksListReader(
  query: QueryClause,
  pagination: PaginatedQuery = { from: 0, size: 10 }
): () => Artwork[] {
  return getSuspenseReader(
    // for now, lets ignore pagination response and just return Artwork[]
    searchArtworks(query, pagination).then((payload) => payload.data)
  );
}

function useArtworkList(
  query: QueryClause,
  pagination: PaginatedQuery = { from: 0, size: 10 }
) {
  return useState<() => Artwork[]>(() =>
    createArtworksListReader(query, pagination)
  );
}

function GalleryItem({ artworkReader }: { artworkReader: () => Artwork }) {
  const theArtwork = artworkReader();
  return (
    <div className="gallery-item">
      <div className="content-container">
        <h3 className="title">{theArtwork.title}</h3>
        <p className="artist">{theArtwork.artist_title}</p>
      </div>
      <div className="picture-container">
        <Image artworkReader={artworkReader} />
      </div>
    </div>
  );
}

export default function ArticGallery() {
  const [artworkList, setArtworkList] = useArtworkList({
    match_phrase: "prints and drawing"
  });

  console.debug("Rendering:ArticGallery");
  debugger;
  return (
    <section className="artic-gallery">
      {artworkList().map((artworkItem) => (
        <GalleryItem artworkReader={() => artworkItem} />
      ))}
    </section>
  );
}
