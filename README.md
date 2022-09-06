# Airplane Stats
This is a program designed to display airline and flight data in a visual way. check it out here: https://airplanestats.netlify.app


# The Info
This program analyzes an aircraft's flight time, distance, and fuel cost that it takes to fly a Boeing 737 from one airport to the next.

These calculations were based on an assumption that flight journey is split into three categories: takeoff, cruising, and landing. 

It is important to note that the time calculations and fuel consumption calculations are all based on these three assumed stages of flight journey. 

[A 737-800 burns around 850 gallons of jet fuel per hour.](https://www.topspeed.com/aviation/aviation-reviews/boeing/1998-2010-boeing-737-800-ar85475.html)


[A 737 Max 8 burns around 14% less than the 800, putting it at roughly 731 gallons of jet fuel per hour.](https://centreforaviation.com/analysis/reports/key-boeing-customers-southwest-and-american-satisfied-in-the-early-days-of-737-max-8-operations-392181)

This map uses stats for the 737-800.

[The fuel costs come from The Bureau of Transportation Statistics and was collected using python and html parsing](https://www.transtats.bts.gov/fuel.asp)


[The speeds of the planes were gathered here.](https://executiveflyers.com/how-fast-do-planes-fly/#:~:text=The%20Boeing%20737%20across%20all,What%20is%20this%3F&text=The%20Boeing%20737's%20landing%20speed,h%20or%20140%2D160%20mph.)


# Other Sources and Calculations
[takeoff fuel consumption: 5,234 pounds, and assuming a 30 min total takeoff and climb time, ](https://www.boeing.com/commercial/aeromagazine/articles/qtr_4_08/article_05_3.html)

[with one gallon of jet fuel weighs roughly 6.74 pounds,](https://powersportsguide.com/jet-fuel-weight/#:~:text=One%20gallon%20of%20jet%20fuel%20weighs%20about%206.47%2D7.01%20pounds.)

makes (5234lbs/6.74lbs) gallons per takeoff, and at .5 hours make it  1553 gallons per hour.

Landing is assumed to be much less due to the engines idling as the plane descends. 
