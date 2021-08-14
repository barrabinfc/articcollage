import React, { Suspense, useEffect, useRef, useState } from "react";
import {AnimatePresence, motion} from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

import getSuspenseReader from "../../lib/getSuspenseReader";
import { getImageUrl, Artwork, loadImageBlob } from "./service";

import styles from './Image.module.scss';

interface ImageProps {
  alt: string,
  imageUrl: string,
  width: number,
  height: number
}

const transition={
  opacity: { type: "spring", stiffness: 10, damping: 100 },
};

export function Image({ alt, imageUrl, width, height, className}: ImageProps & {className: string}) {
  return <motion.img 
      className={className}
      alt={alt} 
      src={imageUrl}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.2}}
      width={width} 
      height={height} />;
}

export function ThumbnailImage({ alt, imageUrl, width, height, className}: ImageProps & {className: string} ) {
  return <motion.img 
      className={className}
      alt={alt}
      // initial={{opacity: 1}}
      // exit={{opacity: 0}}
      src={imageUrl} 
      width={width} 
      height={height} />;
}

function LazyImage({alt, width, height, imageReader}: Partial<ImageProps> & {imageReader: () => string}){
  return <Image key='hqip' className={styles.hqImage} 
          alt={alt} imageUrl={imageReader()} width={width} height={height} />
}

/**
 * A suspenseful image loader in memory.
 * Return a BLOB Url.
 */
export function createImageReader(
   imageUrl: string
): () => string {
  const action = loadImageBlob(imageUrl).then((blob) => URL.createObjectURL(blob))
  // const action = new Promise<string>( (resolve) => {
  //   return;
  // });

  return getSuspenseReader(
    action
  );
}


export function useImageReaderRef(imageReader: () => string) {
  const savedImgReader = useRef<() => string>()
  savedImgReader.current = imageReader;
  return savedImgReader;
}

/**
 * Display thumbnail while image is loading.
 * Animate nicely from one state to another 
 */
export function SmartImage({ artworkReader }: {artworkReader: () => Artwork}) {

  const artwork = artworkReader();
  const {width ,height, alt_text, lqip: thumbnailUrl} = artwork.thumbnail;

  const imageReader = createImageReader(getImageUrl(artwork.image_id));
  const imageReaderRef = useImageReaderRef(imageReader);

  const AnimatedThumbImage = () => (
    // <div>Hello</div>
    <ThumbnailImage key='lqip' className={styles.thumbnailImage} 
                    alt={alt_text} imageUrl={thumbnailUrl} width={width} height={height}  />
  );

  return (
  <div className={styles.smartImage} >
    <AnimatePresence>
      {/* <Suspense fallback={<AnimatedThumbImage />}> */}
      <Suspense fallback={<div className="spinner" style={{position: "absolute",}} />}>
        <LazyImage key='hqip' alt={alt_text} imageReader={imageReaderRef.current} width={width} height={height} />
      </Suspense>
      <motion.img key='lqip' src={thumbnailUrl} alt={alt_text} />
    </AnimatePresence>
  </div>)
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
