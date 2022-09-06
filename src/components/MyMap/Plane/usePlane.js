import useProjection from "../../../hooks/useProjection";

const usePlane = () => {
  const { albersCalculateXY, scaleXY } = useProjection();

  const findAirportCoords = (airports, index) => {
    let x = 0;
    let y = 0;
    airports.forEach((airport, i) => {
      if (i === index) {
        x = albersCalculateXY(airport.longitude_deg, airport.latitude_deg)[0];
        y = albersCalculateXY(airport.longitude_deg, airport.latitude_deg)[1];
        x = scaleXY(x, y)[0];
        y = scaleXY(x, y)[1];
      }
    });

    return [x, y];
  };

  const FindUnitVector = (point1, point2) => {
    let vector = [point2[0] - point1[0], point2[1] - point1[1]];

    let magnitude = Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    let unitVector = [vector[0] / magnitude, vector[1] / magnitude];

    return unitVector;
  };

  const findAngle = (airports) => {
    let resultAngle = 0;
    let [currX, currY] = findAirportCoords(airports, airports.length - 2);
    let [nextX, nextY] = findAirportCoords(airports, airports.length - 1);
    let planeUnitVector = FindUnitVector([currX, currY], [nextX, nextY]);
    resultAngle = Math.atan2(planeUnitVector[1], planeUnitVector[0]);
    resultAngle = (180 * resultAngle) / Math.PI;
    return resultAngle;
  };

  const makeParticleCoordsArray = (airports) => {
    let resultArray = [[]];
    let [currX, currY] = findAirportCoords(airports, airports.length - 2);
    let [nextX, nextY] = findAirportCoords(airports, airports.length - 1);
    let vector = [nextX - currX, nextY - currY];

    //where i is percentage along the vector
    for (let i = 0; i < 100; i++) {
      let percentage = i / 100;
      resultArray.push([
        currX + vector[0] * percentage,
        currY + vector[1] * percentage,
      ]);
    }
    return resultArray;
  };

  return { findAngle, findAirportCoords, makeParticleCoordsArray };
};

export default usePlane;
