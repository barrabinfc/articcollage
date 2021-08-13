import { Artwork, PaginatedQuery, QueryClause } from ".";
import { Pagination } from "./pagination";

export async function searchArtworks(
  query: QueryClause,
  pagination: PaginatedQuery = { from: 0, size: 25 }
): Promise<{ data: Artwork[]; pagination: Pagination }> {
  return new Promise((resolve) => {
    const mockedResponse = searchArtworksSync(query, pagination);
    setTimeout(() => {
      resolve(mockedResponse);
    }, 3000);
  });
}

export function searchArtworksSync(
  query: QueryClause,
  pagination: PaginatedQuery = { from: 0, size: 25 }
): { data: Artwork[]; pagination: Pagination } {
  return {
    pagination: {
      total: 100,
      limit: pagination.size,
      offset: pagination.from,
      total_pages: 10,
      current_page: 1 + Math.floor(pagination.from / pagination.size),
    },
    data: [
      {
        _score: 23663.832,
        classification_titles: ["painting", "modern and contemporary art"],
        subject_titles: [
          "patterns",
          "blue (color)",
          "red (color)",
          "orange (color)",
          "yellow (color)",
        ],
        thumbnail: {
          alt_text:
            "Abstract painting composed of small vertical dabs of multiple shades of blue with a small area of similar strokes of red, orange, and yellow in the upper right.",
          width: 5376,
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAABw/Zhg/aBRBaBZBahRCaxxBahxEahNIchZJcR9LdB9OdiZIZSBEbShLbjxRZyBPeipRcSpReUpWaitXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoMJIDhJAywAcAlEkxhNNTQgAOw==",
          height: 6112,
        },
        alt_titles: null,
        artist_title: "Alma Thomas",
        id: 129884,
        image_id: "e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9",
        title: "Starry Night and the Astronauts",
        place_of_origin: "United States",
      },
      {
        _score: 11831.916,
        classification_titles: [
          "oil on canvas",
          "painting",
          "european painting",
        ],
        subject_titles: [
          "interiors",
          "domestic scenes",
          "Century of Progress",
          "world's fairs",
          "Chicago World's Fairs",
          "beds",
          "bedrooms",
        ],
        thumbnail: {
          alt_text:
            "Painting of bedroom, blue walls, green window, tan bed, red bedding.",
          width: 2867,
          lqip: "data:image/gif;base64,R0lGODlhBgAFAPQAAHhwV3N+bnh/aXR8dJtsG6VsAJx4IIp8PIx0QYZ2SoZ/bIx+b3CGboiAQoKAVoWAVpiLYZqNYIiAcoeIc5SNdJeJfJiKfXyCgneAkXmLp3eFqomMgIWJmZOerAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYoMYEXJdhgwBF1wM4RIE01HYYiVJZk7SEADs=",
          height: 2250,
        },
        alt_titles: null,
        artist_title: "Vincent van Gogh",
        id: 28560,
        image_id: "25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e",
        title: "The Bedroom",
        place_of_origin: "Netherlands",
      },
      {
        _score: 7887.944,
        classification_titles: [
          "stone (unidentified)",
          "stone",
          "sculpture",
          "asian art",
        ],
        subject_titles: ["Buddha"],
        thumbnail: {
          alt_text:
            "Dark stone sculpture of Buddha sitting cross-legged, hands in lap, eyes closed.",
          width: 5085,
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAFdNQ1xSR1BQUVhXVVpYVllaWllaW25jWWljXXFnXWNiYWVjYWxmYGhoaIN6coR8dIiEgYmFggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoEAMQoEwRnMkjQIEC/Q4UQgAOw==",
          height: 6356,
        },
        alt_titles: null,
        artist_title: null,
        id: 21023,
        image_id: "0675f9a9-1a7b-c90a-3bb6-7f7be2afb678",
        title: "Buddha Shakyamuni Seated in Meditation (Dhyanamudra)",
        place_of_origin: "Nagapattinam",
      },
      {
        _score: 5915.958,
        classification_titles: ["painting", "modern and contemporary art"],
        subject_titles: [
          "public housing",
          "projects",
          "African American",
          "Black culture",
          "gardens",
          "birds",
          "flowers",
          "text",
          "trees",
          "Chicago",
        ],
        thumbnail: {
          alt_text:
            "Painting of three black youths gardening, residential towers loom in the background.",
          width: 2636,
          lqip: "data:image/gif;base64,R0lGODlhBgAFAPQAAFJEOV9cVXRJQmBVUnNiQ2ltVmJiWWlrXGd6Zm9zanBzbnpwbHZ7cJF/YY6MfZV/gJaMjJGbiZWYj56Wl5KglZuUoKObo62go6yto7emqb+0ucW+s8q/tODo3QAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYYGVpE5cJVycRjbFgDEJFx1AAwaMkG+SEADs=",
          height: 2250,
        },
        alt_titles: null,
        artist_title: "Kerry James Marshall",
        id: 137125,
        image_id: "d94d0e3d-5d89-ce07-ee0f-7fa6d8def8ab",
        title: "Many Mansions",
        place_of_origin: "United States",
      },
      {
        _score: 2366.3833,
        classification_titles: ["painting"],
        subject_titles: [],
        thumbnail: {
          alt_text:
            "Abstract painting of several various-colored and overlapping rings and circles, looser brushstrokes drape across the circles like winding thread.",
          width: 5467,
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAD4uK1MvI1k+OlhANWRCOmdIQmlKRnRPT21lVWllWmlgXnhgW3JlZXZxaIBmWJd8c6CFbZWdl7WTgKywrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAUR4PQ4EnM0kAEMiBAUyUIoUQgAOw==",
          height: 6765,
        },
        alt_titles: null,
        artist_title: "Tanaka Atsuko",
        id: 229393,
        image_id: "7690dd6e-05ed-773c-a80e-e7cc4eb879cc",
        title: "Untitled",
        place_of_origin: null,
      },
      {
        _score: 1971.986,
        classification_titles: [
          "oil on canvas",
          "painting",
          "european painting",
        ],
        subject_titles: [
          "urban life",
          "cityscapes",
          "weather/seasons",
          "men",
          "leisure",
          "women",
          "everyday life (genre)",
          "water",
        ],
        thumbnail: {
          alt_text:
            "Life-size painting of an urban scene in Paris. A man in a top hat holding an umbrella and a woman in a long fashionable dark dress walk arm in arm toward the viewer as other city dwellers with umbrellas walk in various directions across cobblestone roads and sidewalks.",
          width: 9987,
          lqip: "data:image/gif;base64,R0lGODlhBwAFAPUAACYtLiQwNDs9Pjw/QEFFSUVJTlFGRlhPT11iYmdgZ2xjaGpra2xqcWlvdmtzeHp6dH5+e4GDfXh+hJKLhZWTi4aMlZKVk5OWk5eXkpSanJ6emqSglbOrn6Glpq+spbe0q8G7sMTAtMjFuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhQA7oIwpNFBrLpVNhJBoZiaNwMEA8GARhEHhQNpGFABAEADs=",
          height: 7755,
        },
        alt_titles: null,
        artist_title: "Gustave Caillebotte",
        id: 20684,
        image_id: "f8fd76e9-c396-5678-36ed-6a348c904d27",
        title: "Paris Street; Rainy Day",
        place_of_origin: "Paris",
      },
      {
        _score: 1690.2737,
        classification_titles: [
          "oil on canvas",
          "painting",
          "european painting",
        ],
        subject_titles: [
          "Century of Progress",
          "animals",
          "urban life",
          "weather/seasons",
          "leisure",
          "men",
          "women",
          "children",
          "circles",
          "landscapes",
          "water",
          "world's fairs",
          "Chicago World's Fairs",
        ],
        thumbnail: {
          alt_text:
            "Large painting of people in a crowded park, brushstrokes are dots.",
          width: 16611,
          lqip: null,
          height: 11067,
        },
        alt_titles: null,
        artist_title: "Georges Seurat",
        id: 27992,
        image_id: "1adf2696-8489-499b-cad2-821d7fde4b33",
        title: "A Sunday on La Grande Jatte — 1884",
        place_of_origin: "France",
      },
      {
        _score: 1478.9895,
        classification_titles: [
          "oil on canvas",
          "painting",
          "modern and contemporary art",
        ],
        subject_titles: ["people", "portraits"],
        thumbnail: {
          alt_text:
            "Painting of an Indigenous woman native to Mexico bent and seated on a brown floor, using red thread to create a geometric design on a backstrap loom. Earth tones dominate, while a dresser in the background and the bottom portion of the woman's white dress are a deep blue.",
          width: 3000,
          lqip: "data:image/gif;base64,R0lGODlhCAAFAPUAADRNUy1QXT9abGNqT39yUnV4V3x5X1lZY01jeWpze3Nye3h+f5Z2VpV9XKB+WJGHWZCEXaWMU6OMVKGIXbOMVK6WVbmRV6KIZ7KNZW9+jI+OgpGWkJydkKuWhKSjj6qonL+3pLvBuczEqs3Hu+HFrNTRwOPl3enw4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAIAAUAAAYlwAxCEDpxNKaE4vApgTqjB2TSuGBIIoqlIjEsNh4HgxApBACDIAA7",
          height: 1805,
        },
        alt_titles: null,
        artist_title: "Diego Rivera",
        id: 151363,
        image_id: "718aaa92-ac48-2c17-2832-b034827bc45f",
        title: "Weaving",
        place_of_origin: "México",
      },
      {
        _score: 876.43823,
        classification_titles: ["painting", "modern and contemporary art"],
        subject_titles: [
          "cityscapes",
          "yellow (color)",
          "brown (color)",
          "green (color)",
          "purple (color)",
          "pink (color)",
          "orange (color)",
          "red (color)",
          "black (color)",
          "gray (color)",
          "white (color)",
        ],
        thumbnail: {
          alt_text:
            "Abstract painting composed of a central tangle of vibrant colors—purple, pink, orange, green, red—on a mostly gray background, subtly divided into rectangular areas.",
          width: 7326,
          lqip: "data:image/gif;base64,R0lGODlhBQAFAPQAAG1TSnJbWo1saox7cpt+dIiBepSBfZ6NfZOKgJWLh52blKyWh7Ceiammm6+on7SplbOqm7evnLWvormxp7+3pr63qMC0qcO9rcK+sQAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVIFZNDkRd0WMdQgAMibEQjFIgjRQCADs=",
          height: 7344,
        },
        alt_titles: null,
        artist_title: "Joan Mitchell",
        id: 86385,
        image_id: "f7f9615d-2c2b-6b23-47b2-cd6cdc846504",
        title: "City Landscape",
        place_of_origin: "United States",
      },
      {
        _score: 788.7944,
        classification_titles: [
          "ceremonial object",
          "stone",
          "arts of the americas",
          "art of the americas",
          "sculpture",
        ],
        subject_titles: [
          "architecture",
          "history",
          "coronations",
          "animals",
          "record of events",
          "Hieroglyphs",
          "Mexico",
          "Aztecs",
          "mythology",
          "kingship",
          "rulers (people)",
          "goddesses",
        ],
        thumbnail: {
          alt_text:
            "Large plaque of stone carved with animal and geometric hieroglyphs.",
          width: 1743,
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAACgiHzIrJDMvLDw1L01IQFZUTmZjWm5nXWVpaHFvaH54boF8bYeBcouEdoKEgYGFhIOMj52UhaOdjrSunwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAUR4BAAwhE1hDJJRsIsBfQ4SAgAOw==",
          height: 2250,
        },
        alt_titles: [
          'Coronation Stone of Moctezuma II ("Stone of the Five Suns")',
          "Stone of the Five Suns",
        ],
        artist_title: "Aztec (Mexica)",
        id: 75644,
        image_id: "ea8c5d62-6ce8-88e8-feb1-e0053cf534c5",
        title: "Coronation Stone of Motecuhzoma II (Stone of the Five Suns)",
        place_of_origin: "Tenochtitlan",
      },
    ],
  };
}
