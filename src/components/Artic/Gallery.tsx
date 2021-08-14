import React, { useState } from "react";
import getSuspenseReader from "../../lib/getSuspenseReader";
import { cn } from "../../lib/helpers";

import styles from './Gallery.module.scss';

import { SmartImage } from "./Image";
import {
  searchArtworks,
  PaginatedQuery,
  QueryClause,
  Artwork,
} from "./service";

function createArtworksListReader(
  query: QueryClause,
  pagination: PaginatedQuery = { from: 0, size: 10 }
): () => Artwork[] {
  // for now, lets ignore pagination response and just return Artwork[]
  const action = searchArtworks(query, pagination).then((payload) => payload.data)

  return getSuspenseReader(
    action
  );
}

export function useArtworkList(
  query: QueryClause,
  pagination: PaginatedQuery = { from: 0, size: 10 }
) {
  return useState<() => Artwork[]>(() => createArtworksListReader(query, pagination));
}

export interface GalleryItemProps {
  className: string|string[],
  artworkReader: () => Artwork
}

function GalleryItem({ className, artworkReader }: GalleryItemProps) {

  const theArtwork = artworkReader();

  return (
    <div className={cn(styles.card,className)}>
      <div className={cn(styles.contentContainer)}>
        <div className={cn(styles.content)}>
          <div className={cn(styles.avatar)}>
            <SmartImage 
              artworkReader={artworkReader} />
          </div>

          <div className={cn(styles.titleContainer)}>
            <h3 className={cn(styles.title)}>{theArtwork.title}</h3>
            <p className={cn(styles.description)}>{theArtwork.artist_title}</p>
          </div>
        </div>          
      </div>
    </div>
  );
}

export default function ArticGallery({artworkListReader}: {artworkListReader: () => Artwork[]}) {
  const list = artworkListReader();

  return (
    <section className={styles.galleryGrid}>
      {list.map((artworkItem) => (
        <GalleryItem className='item' key={artworkItem.id} artworkReader={() => artworkItem} />
      ))}
    </section>
  );
}
