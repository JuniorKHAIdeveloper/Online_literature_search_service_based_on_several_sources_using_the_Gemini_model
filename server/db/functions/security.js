const checkRestrictedSymbols = (str, key) => {
  const restrictedSymbolsRegex = /[\x00-\x1F\x7F-\x9F<>"]/;
  const match = str.match(restrictedSymbolsRegex);
  if (match) {
    const position = match.index;
    throw new Error(
      `Поле ${key}: Заборонений символ знайдено у рядку на позиції ${position + 1}.`
    );
  }
};

const checkBodyFields = (body) => {
  for (const key in body) {
    const value = body[key];
    checkRestrictedSymbols(value, key);
  }
};

module.exports = {
  checkRestrictedSymbols,
  checkBodyFields,
};
