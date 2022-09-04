const useDistance = () => {
  function toRadians(point) {
    return [point[0] * (Math.PI / 180), point[1] * (Math.PI / 180)];
  }

  const findDistanceMiles = (point1, point2) => {
    const point1Rad = toRadians(point1);
    const point2Rad = toRadians(point2);

    const dLong = point1Rad[0] - point2Rad[0];
    const dLat = point1Rad[1] - point2Rad[1];

    let result =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.cos(point1Rad[1]) *
        Math.cos(point2Rad[1]) *
        Math.pow(Math.sin(dLong / 2), 2);

    result = 2 * Math.asin(Math.sqrt(result));

    // Radius of Earth in
    // Kilometers, R = 6371
    // Use R = 3956 for miles
    const R = 3956;
    result = result * R;

    return result;
  };

  return { findDistanceMiles };
};

export default useDistance;
