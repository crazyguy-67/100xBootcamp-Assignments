const translations = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" },
};

const result = {};

for (let lang in translations) {
  for (let key in translations[lang]) {
    if (!result[key]) {
      result[key] = {};
    }

    result[key][lang] = translations[lang][key];
  }
}

console.log(result);
