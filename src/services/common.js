export const filterOnAllInput = (list = [], text = '') => {
  if (list === null || list === undefined) {
    list = [];
  }


  return list.filter(element => Object.keys(element).some(attribut => {
    const data = element[attribut];
    if (typeof data === 'string') {
      return data.toLowerCase().includes(text.toLowerCase());
    } else {
      return data === text;
    }
  })
)};