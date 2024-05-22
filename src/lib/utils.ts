export function haveCommonElements<T>(array1: T[], array2: T[]): boolean {
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      return true;
    }
  }
  return false;
}

export function dumbRandomCoinTossFromString(sourceString: string): boolean {
  return sourceString.length % 2 === 1;
}

// Maps false to 0 and true to 1.
export function booleanToInt(b: boolean): number {
  if (b) {
    return 1;
  }
  return 0;
}

const iconMap = {
  BeautifulSoup4: "img/toolbadges/beautifulsoup_cropped_shrunk.png",
  "C++": "img/toolbadges/cpp_cropped_shrunk.png",
  CSS: "img/toolbadges/css_cropped_shrunk.png",
  Diesel: "img/toolbadges/diesel.jpeg",
  GitHub: "img/toolbadges/GitHub-Mark-removebg-preview_cropped_shrunk.png",
  Golang: "img/toolbadges/golang-removebg-preview_cropped_shrunk.png",
  "Google Forms": "img/toolbadges/forms_cropped_shrunk.png",
  "Google Sheets": "img/toolbadges/sheets-removebg-preview_cropped_shrunk.png",
  HTML: "img/toolbadges/html3.webp",
  Julia: "img/toolbadges/julia-removebg-preview_cropped_shrunk.png",
  "Jupyter Notebook": "img/toolbadges/jupyter_cropped_shrunk.png",
  Kaggle: "img/toolbadges/189_Kaggle-512.webp",
  Matplotlib: "img/toolbadges/matplotlib.png",
  "MS Excel": "img/toolbadges/msexcel-removebg-preview_cropped_shrunk.png",
  Numpy: "img/toolbadges/numpybetter.png",
  Pandas: "img/toolbadges/pandas_cropped_shrunk.png",
  PyGame: "img/toolbadges/pygame1_cropped_shrunk.png",
  Python: "img/toolbadges/python-logo-only_cropped_shrunk.png",
  React: "img/toolbadges/react_cropped_shrunk.png",
  Rust: "img/toolbadges/rust_cropped_shrunk.png",
  Serde: "img/toolbadges/serde.png",
  SQLite: "img/toolbadges/sqlitepngwing.com.png",
  SpotifyAPI: "img/toolbadges/spotify_cropped_shrunk.png",
  TypeScript: "img/toolbadges/typescript_cropped_shrunk.png",
};

export function toolToImgSrc(key: string): string {
  const kkey = key as keyof typeof iconMap;
  return iconMap.hasOwnProperty(key) ? iconMap[kkey] : "";
}
