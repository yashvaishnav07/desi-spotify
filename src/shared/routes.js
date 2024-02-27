const base = "/desi-spotify";

export const routes = {
  HOME: base,
  LOGIN: `${base}/login`,
  SEARCH: `${base}/search`,
  PLAYLIST: `${base}/playlist`,
  ALBUM: `${base}/album`,
  ERROR: `${base}/*`,
};

export const paths = {
  HOME: routes.HOME,
  LOGIN: routes.LOGIN,
  SEARCH: routes.SEARCH,
  PLAYLIST: `${routes.PLAYLIST}/:playlistId`,
  ALBUM: `${routes.ALBUM}/:albumId`,
  ERROR: routes.ERROR,
};
