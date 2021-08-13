/** Typed Error handling */
export interface APIErrorDetails {
  status: number;
  error: string;
  detail: string;
}

export class APIError extends Error {
  details: APIErrorDetails;

  constructor(details: APIErrorDetails) {
    super(`${details.status}: ${details.detail}`);
    this.name = this.constructor.name;
    this.details = details;
  }
}

export class SchemaError extends Error {
  errors: string[];
  constructor(errors: string[]) {
    super(`Failed to validate schema: ${errors.join(" , ")}`);
    this.errors = errors;
  }
}
