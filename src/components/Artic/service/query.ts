import { JSONValue } from "../../../types";

/** Match all operators */
export type MatchAll = "match_all";
export type MatchNone = "match_none";

/** Full text operators */
export type Match = "match";
export type MatchPhrase = "match_phrase";
export type MatchPhrasePrefix = "match_phrase_prefix";
export type QueryString = "query_string";

/* term operators */
export type Term = "term";
export type Terms = "terms";
export type Range = "range";
export type Exists = "exists";
export type Prefix = "prefix";
export type Wildcard = "wildcard";
export type Regexp = "regexp";
export type Fuzzy = "fuzzy";
export type Type = "type";
export type Ids = "ids";

export type AllQueryOperators =
  | MatchAll
  | MatchNone
  | Match
  | MatchPhrase
  | MatchPhrasePrefix
  | QueryString
  | Term
  | Terms
  | Range
  | Exists
  | Prefix
  | Wildcard
  | Regexp
  | Fuzzy
  | Type
  | Ids;

export type QueryClause = {
  [k in AllQueryOperators]?: JSONValue;
};
