enum Categories {
  Apertures = 'Aberturas',
  Equipment = 'Equipamiento',
  Termination = 'Terminaciones'
}

type ICategory = ISubCategory[];

interface ISubCategory {
  name: string;
  items: ISubCategoryItem[];
}

interface ISubCategoryItem {
  name: string;
  img: string;
}

export {
  Categories
};

export type {
  ICategory,
  ISubCategory,
  ISubCategoryItem
};
