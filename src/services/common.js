export const filterOnAllInput = (list, text) => {
  return list.filter(element => Object.keys(element).some(attribut => element[attribut].includes(text)));
}