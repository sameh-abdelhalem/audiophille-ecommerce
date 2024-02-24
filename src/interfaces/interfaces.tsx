interface CategoryImage {
  desktop: string;
  mobile: string;
  tablet: string;
}

interface GalleryImage {
  desktop: string;
  mobile: string;
  tablet: string;
}

export interface Product {
  category: string;
  categoryImage: CategoryImage;
  description: string;
  features: string;
  gallery: {
    first: GalleryImage;
    second: GalleryImage;
    third: GalleryImage;
  };
  id: number;
  image: CategoryImage;
  includes: { item: string; quantity: number }[];
  name: string;
  new: boolean;
  others: { id: number; image: CategoryImage; name: string; slug: string }[];
  price: number;
  slug: string;
}
