export type PostMedia = {
  file_reference_url?: string;
  file_type?: string;
  url?: string;
};

export type PostUser = {
  id?: number | string;
  username?: string;
  first_name?: string;
  last_name?: string;
  creator_name?: string;
  creator_username?: string;
  creator_profile?: string;
  profile_photo_url?: string;
};

export type Bell3Post = {
  id: number | string;
  title?: string;
  content?: string;
  text_content?: string;
  time_ago?: string;
  created_at?: string;
  likes_count?: number;
  comments_count?: number;
  views_count?: number;
  supporters_count?: number;
  user?: PostUser;
  creator?: PostUser;
  media?: PostMedia[];
  content_files?: PostMedia[];
  files?: PostMedia[];
  hashtags?: Array<string | { name?: string; tag?: string }>;
};

export type PostsResponse = {
  data?: Bell3Post[] | { data?: Bell3Post[]; meta?: PaginationMeta };
  posts?: Bell3Post[];
  meta?: PaginationMeta;
  pagination?: PaginationMeta;
};

export type PaginationMeta = {
  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
};

export type FormattedPost = {
  id: string;
  title: string;
  content: string;
  image: string | null;
  fileType: string;
  likes: number;
  comments: number;
  views: number;
  timeAgo: string;
  creatorName: string;
  creatorUsername: string;
  creatorAvatar: string | null;
  hashtags: string[];
};
