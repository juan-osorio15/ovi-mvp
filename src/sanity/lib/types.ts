export interface ContactInfo {
  email?: string;
  phone?: string;
  whatsapp?: string;
}

export interface SocialMedia {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface Resource {
  _id: string;
  _type: 'resource';
  name: string;
  slug: {
    current: string;
  };
  description: string;
  logo?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  contact?: ContactInfo;
  website?: string;
  address?: string;
  mapsUrl?: string;
  socialMedia?: SocialMedia;
  tags: string[];
  featured?: boolean;
  active: boolean;
  isOnline?: boolean;
  isFree?: boolean;
  cost?: string;
}
