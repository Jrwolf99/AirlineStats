import myFuel from "../data/fuel.json";

const useFuelCost = () => {
  const getFuelCost = (month, year) => {
    let resultCost;

    myFuel.data.forEach((monthRow) => {
      if (monthRow.Year === "2000" && monthRow.Month === "July")
        resultCost = monthRow.Price;
    });
    return resultCost;
  };

  return { getFuelCost };
};

export default useFuelCost;
