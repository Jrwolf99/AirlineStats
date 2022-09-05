import myFuel from "../data/fuel.json";

const useFuelCost = () => {
  const getFuelCost = (month, year) => {
    let resultCost;
    myFuel.data.forEach((monthRow) => {
      if (monthRow.Year === year && monthRow.Month === month)
        resultCost = monthRow.Price;
    });
    return resultCost;
  };

  return { getFuelCost };
};

export default useFuelCost;
