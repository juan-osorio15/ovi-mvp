export const RESOURCES_QUERY = `*[_type == "resource" && active == true] | order(featured desc, name asc) {
  _id,
  name,
  slug,
  description,
  logo,
  contact,
  website,
  address,
  mapsUrl,
  socialMedia,
  tags,
  featured,
  active,
  isOnline,
  isFree,
  cost
}`;

export const FEATURED_RESOURCES_QUERY = `*[_type == "resource" && active == true && featured == true] | order(name asc) {
  _id,
  name,
  slug,
  description,
  logo,
  contact,
  website,
  address,
  mapsUrl,
  socialMedia,
  tags,
  featured,
  active,
  isOnline,
  isFree,
  cost
}`;

// Get all unique tags from all resources (useful for filter UI)
export const ALL_TAGS_QUERY = `array::unique(*[_type == "resource" && active == true].tags[])`;
