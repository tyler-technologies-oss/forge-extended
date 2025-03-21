import { createContext } from '@lit/context';

export interface IFacet {
  type: any;
}

export interface IFacetContext {
  facets?: IFacet[];
}

export class FacetContext {}

export const facetContext = createContext<FacetContext>('facet-context');
export const updateFacetContext = createContext<(value: string) => void>('facet-context-update');
