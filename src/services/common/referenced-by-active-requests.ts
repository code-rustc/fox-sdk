/**
 * When ReferencedByActiveRequests is true, DL REST API is indicating that this resource is referenced by an active scheduled request. For fieldLists and Triggers, the consequence of this is that only the title and description may be PATCHed; Attempting PATCH other properties of a fieldList or Trigger which is referenced by an active scheduled request will fail, returning a 400 response code. This constraint does not exist for Universes which can be patched even when linked to an active request: Universes are always evaluated at execution time for a scheduled request.
 */
export type ReferencedByActiveRequests = boolean;
