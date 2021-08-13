import { APIError, APIErrorDetails, SchemaError } from "./errors";

import { QueryClause } from "./query";
import { Pagination, PaginatedQuery } from "./pagination";
import { Artwork, artworkProps, isArtwork } from "./schemas";

const ARTIC_API_BASE = `https://api.artic.edu/api/v1`;
const ARTIC_IMAGEAPI_BASE = "https://www.artic.edu/iiif/2";

/**
 * Retrieve a single artwork `ìd`
 * @param {string|number} id
 */
export async function getArtwork(id: string | number): Promise<Artwork> {
  const artworkEndpoint = `${ARTIC_API_BASE}/artworks/${String(id)}`;
  const urlParams = new URLSearchParams({
    fields: Object.keys(artworkProps).join(","),
  });

  const response = await fetch(artworkEndpoint + "?" + urlParams);
  if (response.ok) {
    const payload = await response.json();
    const data = payload.data;
    const errors: string[] = [];
    if (isArtwork(data, { errors })) {
      return data;
    } else {
      throw new SchemaError(errors);
    }
  } else {
    const errorDetails = await response.json();
    const error = new APIError(errorDetails);
    throw error;
  }
}

/**
 * Search artworks matching `query``
 * @param {QueryClause} query
 * @see https://www.elastic.co/guide/en/elasticsearch/reference/6.0/query-dsl.html
 */
export async function searchArtworks(
  query: QueryClause,
  pagination: PaginatedQuery = { from: 0, size: 25 }
): Promise<{ data: Artwork[]; pagination: Pagination }> {
  const searchArtworkEndpoint = `${ARTIC_API_BASE}/artworks/search`;
  const urlParams = new URLSearchParams({
    fields: Object.keys(artworkProps).join(","),
    from: String(pagination.from),
    size: String(pagination.size),
  });

  const response = await fetch(searchArtworkEndpoint + "?" + urlParams, {
    method: "POST",
    headers: {
      Accept: ["application/json", "text/plain", "*/*"].join(","),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  });
  if (response.ok) {
    const payload = (await response.json()) as {
      data: Artwork[];
      pagination: Pagination;
    };
    return payload;
  } else {
    const errorDetails = await response.json();
    const error = new APIError(errorDetails as APIErrorDetails);
    throw error;
  }
}

/**
 * Get the full url of the image `identifier`
 * @param {string} identifier
 */
export function getImageUrl(identifier: string): string {
  return `${ARTIC_IMAGEAPI_BASE}/${identifier}/full/843,/0/default.jpg`;
}
