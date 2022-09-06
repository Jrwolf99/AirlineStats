const useProjection = () => {
  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  const albersCalculateXY = (long, lat) => {
    const stdParaOne = toRadians(140); //standard parallel 1
    const stdParaTwo = toRadians(500); //standard parallel 2
    const lat0 = toRadians(38.16); //latitude of origin
    const long0 = toRadians(-95.02); //central meridian

    const n = 0.5 * (Math.sin(stdParaOne) + Math.sin(stdParaTwo));
    const c = Math.cos(stdParaOne);
    const C = c * c + 2 * n * Math.sin(stdParaOne);
    const p0 = Math.sqrt(C - 2 * n * Math.sin(lat0)) / n;

    const theta = n * (toRadians(long) - long0);
    const p = Math.sqrt(C - 2 * n * Math.sin(toRadians(lat))) / n;

    const x = p * Math.sin(theta);
    const y = p0 - p * Math.cos(theta);

    return [x, y];
  };

  const scaleXY = (myX, myY) => {
    const scale = 1250;
    const shiftX = 494;
    const shiftY = 291;

    myX = myX * scale + shiftX;
    myY = myY * scale + shiftY;

    return [myX, myY];
  };

  return { albersCalculateXY, scaleXY };
};

export default useProjection;
