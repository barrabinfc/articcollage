import { getArtwork, getImageUrl, searchArtworks } from "./service";
import { APIError } from "./errors";

describe("getArtwork", () => {
  it("Should return a record for a valid artwork", async () => {
    const artwork = await getArtwork(27992);
    expect(artwork.id).toBeDefined();
    expect(artwork.title).toBeDefined();
    expect(artwork.image_id).toBeDefined();
  });
  it("Should throw a APIError for a invalid artwork", async () => {
    expect.assertions(2);
    try {
      await getArtwork(-1);
    } catch (e) {
      expect(e).toBeInstanceOf(APIError);
      expect(e.details.status).toBe(400);
    }
  });
});

describe("searchArtworks", () => {
  it("Should allow ElasticSearch query DSL", async () => {
    const { pagination, data } = await searchArtworks({
      match_phrase: "prints and drawing"
    });
    expect(pagination).toBeDefined();
    expect(data).toBeDefined();
    expect(data.length).toBeDefined();
  });
  it("Should allow pagination", async () => {
    const paginate = {
      from: 20,
      size: 10
    };
    const { pagination, data } = await searchArtworks(
      {
        match_phrase: "prints and drawing"
      },
      paginate
    );
    const page = 1 + Math.floor(paginate.from / paginate.size);
    expect(pagination.current_page).toBe(page);
    expect(pagination.limit).toBe(paginate.size);
    expect(pagination.offset).toBe(paginate.from);
    expect(data.length).toBe(paginate.size);
  });
});

describe("getImageUrl", () => {
  it("Should return a url", () => {
    const url = getImageUrl("abcd");
    expect(url).toContain("abcd");
    expect(url).toContain("https");
  });
});
