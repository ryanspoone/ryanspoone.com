declare module '@tryghost/content-api' {
  interface GhostContentAPIOptions {
    url: string;
    key: string;
    version: string;
  }

  interface PostOrPage {
    id: string;
    slug: string;
    title: string;
    html?: string;
    feature_image?: string;
    featured?: boolean;
    published_at?: string;
    reading_time?: number;
    excerpt?: string;
    [key: string]: any;
  }

  interface BrowseOptions {
    limit?: number | 'all';
    page?: number;
    filter?: string;
    fields?: string | string[];
    include?: string | string[];
    order?: string;
    formats?: string[];
  }

  interface ReadOptions {
    fields?: string | string[];
    formats?: string[];
    include?: string | string[];
  }

  class GhostContentAPI {
    constructor(options: GhostContentAPIOptions);
    posts: {
      browse(options?: BrowseOptions): Promise<PostOrPage[]>;
      read(data: { id?: string; slug?: string }, options?: ReadOptions): Promise<PostOrPage>;
    };
  }

  export default GhostContentAPI;
}
