export const APP_STORE_URL = "https://apps.apple.com/app/bell3/id6478689197";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.georgehadjisavvas.bell3&pcampaignid=web_share";
export const APP_LOGIN_URL = "https://app.bell3.net/login";
export const APP_HOME_URL = "https://app.bell3.net";

export const CONTACT = {
  email: "info@bell3.net",
  addressLines: [
    "60 PAYA LEBAR ROAD",
    "#11-03 PAYA LEBAR SQUARE",
    "Singapore 409051",
  ],
  mapsUrl: "https://goo.gl/maps/9PUxxcg1FFsdawYb8",
};

export const SOCIAL = {
  instagram:
    "https://www.instagram.com/b3llthree/profilecard/?igsh=MWJwZWh6cndkdGgwZg==",
  facebook: "https://www.facebook.com/profile.php?id=61554848218442",
  linkedin: "https://www.linkedin.com/company/bell3",
  youtube: "https://youtube.com/@bellthree-sd2ns?si=mQ4Tb9_CzaAwO7Br",
  tiktok: "https://www.tiktok.com/@bell.three?_t=8r9iwZveY0U&_r=1",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/news-feed", label: "News Feed" },
  { href: "/posts", label: "All Posts" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/events", label: "Events" },
] as const;

/** Hero / section imagery — SVG geometry, tinted in Hero to #F5804F / #D86547 */
export const IMAGES = {
  hero: "/hero-background.svg",
  startPosting: "/start-post.svg",
  appPreview:
    "https://static.wixstatic.com/media/61d124_852f825597234f93a9453350d366f8d9~mv2.png/v1/fill/w_899,h_504,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design.png",
  vision:
    "https://static.wixstatic.com/media/11062b_73545d4e18684a65916f8185e38a66ce~mv2.jpeg/v1/fill/w_735,h_974,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_73545d4e18684a65916f8185e38a66ce~mv2.jpeg",
  community: "/community.svg",
  create:
    "https://static.wixstatic.com/media/11062b_5c171bf6a5694fc7870133ab4f7546d1~mv2.jpeg/v1/crop/x_78,y_148,w_4615,h_3077/fill/w_1062,h_708,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Working%20With%20Headphones.jpeg",
  joinPortrait:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces",
  contactBg: "/getInTouch.svg",
  donate:
    "https://static.wixstatic.com/media/nsplsh_6a20c3dbfcc44208b8f36379307a56d2~mv2.jpg/v1/crop/x_0,y_1667,w_4000,h_2667/fill/w_720,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Andrew%20Neel.jpg",
  appStoreBadge:
    "https://static.wixstatic.com/media/fc7570_2ceee2afeafa4aa083bc3d48986bb811~mv2.png/v1/fill/w_176,h_55,al_c,q_85,enc_avif,quality_auto/fc7570_2ceee2afeafa4aa083bc3d48986bb811~mv2.png",
  playStoreBadge:
    "https://static.wixstatic.com/media/fc7570_83a62c92abd54d60915647751731bc62~mv2.png/v1/fill/w_179,h_55,al_c,lg_1,q_85,enc_avif,quality_auto/fc7570_83a62c92abd54d60915647751731bc62~mv2.png",
};

/** Overlapping creator faces for Discover Daily (local assets) */
export const CREATOR_AVATARS = [
  "/avatars/1.jpg",
  "/avatars/2.jpg",
  "/avatars/3.jpg",
  "/avatars/4.jpg",
  "/avatars/5.jpg",
] as const;
