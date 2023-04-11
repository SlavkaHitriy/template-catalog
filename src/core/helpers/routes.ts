export const HomeURLPath = "/";
export const SearchResultsURLPath = {
   baseUrl: "/search/:query",
   getUrl: (query: string) => `/search/${query}`,
};

export const MovieURLPath = {
   baseUrl: "/movie/:id",
   getUrl: (id: number) => `/movie/${id}`,
};
