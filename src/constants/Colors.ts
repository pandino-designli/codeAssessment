export enum Colors {
  PRIMARY = '#ffffff',
  SECONDARY = '#131313',
  GRAY = '#f7f7f7',
  TEXT_GRAY = '#666666',
}

export enum BackgroundColors {
  BLUE = '#AECBFA',
  GREEN = '#C8FACD',
  PINK = '#FBCFE8',
}

export enum Categories {
  ELECTRONICS = 'Electronics',
  CLOTHES = 'Clothes',
  MISCELLANEOUS = 'Miscellaneous',
  NEW_CATEGORY = 'New Category',
}

export const categoryToColor = {
  [Categories.ELECTRONICS]: BackgroundColors.BLUE,
  [Categories.CLOTHES]: BackgroundColors.GREEN,
  [Categories.MISCELLANEOUS]: BackgroundColors.PINK,
  [Categories.NEW_CATEGORY]: BackgroundColors.BLUE,
};
