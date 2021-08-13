import * as t from "typanion";

export const thumbnailProps = {
  alt_text: t.isString(),
  width: t.isNumber(),
  height: t.isNumber(),
  lqip: t.isNullable(t.isString()),
};
export const isThumbnail = t.isObject(thumbnailProps);
export type Thumbnail = t.InferType<typeof isThumbnail>;

export const artworkProps = {
  _score: t.isNumber(),
  id: t.isNumber(),
  title: t.isString(),
  alt_titles: t.isNullable(t.isArray(t.isString())),
  image_id: t.isString(),
  artist_title: t.isNullable(t.isString()),
  place_of_origin: t.isNullable(t.isString()),
  classification_titles: t.isArray(t.isString()),
  subject_titles: t.isArray(t.isString()),
  thumbnail: isThumbnail,
};
export const isArtwork = t.isObject(artworkProps);
export type Artwork = t.InferType<typeof isArtwork>;
