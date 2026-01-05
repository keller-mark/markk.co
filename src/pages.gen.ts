// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_BlogSlug_getConfig } from './pages/blog/[slug]';
// prettier-ignore
import type { getConfig as File_BlogIndex_getConfig } from './pages/blog/index';
// prettier-ignore
import type { getConfig as File_Cv_getConfig } from './pages/cv';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_PhotosAlbumPhoto_getConfig } from './pages/photos/[album]/[photo]';
// prettier-ignore
import type { getConfig as File_PhotosAlbumIndex_getConfig } from './pages/photos/[album]/index';
// prettier-ignore
import type { getConfig as File_PhotosIndex_getConfig } from './pages/photos/index';
// prettier-ignore
import type { getConfig as File_Research_getConfig } from './pages/research';
// prettier-ignore
import type { getConfig as File_Software_getConfig } from './pages/software';
// prettier-ignore
import type { getConfig as File_Uses_getConfig } from './pages/uses';

// prettier-ignore
type Page =
| ({ path: '/blog/[slug]' } & GetConfigResponse<typeof File_BlogSlug_getConfig>)
| ({ path: '/blog' } & GetConfigResponse<typeof File_BlogIndex_getConfig>)
| ({ path: '/cv' } & GetConfigResponse<typeof File_Cv_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/photos/[album]/[photo]' } & GetConfigResponse<typeof File_PhotosAlbumPhoto_getConfig>)
| ({ path: '/photos/[album]' } & GetConfigResponse<typeof File_PhotosAlbumIndex_getConfig>)
| ({ path: '/photos' } & GetConfigResponse<typeof File_PhotosIndex_getConfig>)
| ({ path: '/research' } & GetConfigResponse<typeof File_Research_getConfig>)
| ({ path: '/software' } & GetConfigResponse<typeof File_Software_getConfig>)
| ({ path: '/uses' } & GetConfigResponse<typeof File_Uses_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
