const base = "/desi-spotify";

export const routes = {
  HOME: base,
  LOGIN: `${base}/login`,
  SEARCH: `${base}/`,
  PLAYLIST: `${base}/playlist`,
  ERROR: `${base}/*`
};

export const paths = {
  HOME: routes.HOME,
  LOGIN: routes.LOGIN,
  SEARCH: routes.SEARCH,
  PLAYLIST: `${routes.PLAYLIST}/:playlistId`,
  ERROR: routes.ERROR,
};
