import planes from "../data/planes.json";

const useCalculate = () => {
  const findTimeInAir = (miles, speed) => {
    let hours = Math.floor(miles / speed);
    let minutes = Math.round((miles / speed - hours) * 60);
    return [hours, minutes];
  };

  const calculateTotalFlightTime = (
    miles,
    speedTakeoff,
    speedCruising,
    speedLanding
  ) => {
    let totalHours;
    let totalMinutes;

    //one half hour of takeoff time and landing time.

    let milesTakeoff = 0;
    let milesLanding = 0;
    if (miles > 0) {
      milesTakeoff = 0.5 * speedTakeoff;
      milesLanding = 0.5 * speedTakeoff;
    }

    let [hoursTakeoff, minutesTakeoff] = findTimeInAir(
      milesTakeoff,
      speedTakeoff
    );

    let milesCruising = miles - milesTakeoff - milesLanding;
    let [hoursCruising, minutesCruising] = findTimeInAir(
      milesCruising,
      speedCruising
    );

    let [hoursLanding, minutesLanding] = findTimeInAir(
      milesLanding,
      speedLanding
    );

    totalHours = hoursTakeoff + hoursLanding + hoursCruising;
    totalMinutes = minutesTakeoff + minutesCruising + minutesLanding;

    if (totalMinutes > 59) {
      totalHours += Math.floor(totalMinutes / 60);
      totalMinutes = totalMinutes % 60;
    }

    return `${totalHours} hrs and ${totalMinutes} mins`;
  };

  const calculateTotalFuelCosts = (miles, costPerGallon) => {
    let milesTakeoff = 0;
    let milesLanding = 0;
    if (miles > 0) {
      milesTakeoff = 0.5 * planes.Boeing737800.takeoff.speed;
      milesLanding = 0.5 * planes.Boeing737800.takeoff.speed;
    }
    let milesCruising = miles - milesTakeoff - milesLanding;

    let hoursTakeoff = milesTakeoff / planes.Boeing737800.takeoff.speed;
    let hoursCruising = milesCruising / planes.Boeing737800.cruising.speed;
    let hoursLanding = milesLanding / planes.Boeing737800.landing.speed;

    let totalGallons = 0;
    totalGallons += planes.Boeing737800.takeoff.fuelConsumption * hoursTakeoff;
    totalGallons +=
      planes.Boeing737800.cruising.fuelConsumption * hoursCruising;
    totalGallons += planes.Boeing737800.landing.fuelConsumption * hoursLanding;

    return Math.floor(totalGallons * costPerGallon).toLocaleString();

    //30 min take off time
    //30 min landing time
    //it costs 1553 gallons for take off
    //200 gallons for landing
    //and 850 to cruise.
  };

  return { calculateTotalFlightTime, calculateTotalFuelCosts };
};

export default useCalculate;
