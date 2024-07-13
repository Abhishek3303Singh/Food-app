export function filterFunction(search, restroList) {
    const filteredData = restroList.filter((restorant) => restorant.info.name.toLowerCase().includes(search.toLowerCase()))
    return filteredData
  }