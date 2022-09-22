/*
   Passengers at waiting at different stops along
   the route. Not all will board a bus on route 777,
   and the destination stops vary by passenger.
*/
let route777 = [
  [],
  [
    { boardingRoute: 777, destination: 2 },
    { boardingRoute: 42, destination: 7 },
  ],
  [{ boardingRoute: 777, destination: 5 }],
  [{ boardingRoute: 220, destination: 3 }],
  [
    { boardingRoute: 777, destination: 5 },
    { boardingRoute: 777, destination: 6 },
  ],
  [],
  [],
  /*
     This passenger would need to wait until the
     route starts again to reach their destination.
  */
  [{ boardingRoute: 777, destination: 0 }],
]

/* Our bus for route 777, initially with no passengers */
let bus777 = {
  onboard: [],
  routeNumber: 777,
}

/* Control flow for the bus to perform */
function driveRoute(bus, route) {
  const isBoarding = (p) => p.boardingRoute === bus.routeNumber

  for (let stop = 0; stop < route.length; stop++) {
    const isLeaving = (p) => p.destination === stop
    const isStaying = (p) => !isLeaving(p)

    let nextStop = route[stop]
    let arriving = nextStop.filter(isBoarding)

    /* Has someone has signaled the driver? */
    let onboard = bus.onboard
    let shouldStop = onboard.some(isLeaving) || arriving.length > 0

    if (shouldStop) {
      // Drop off passengers:
      onboard = onboard.filter(isStaying)
      // Pick up passengers:
      onboard = onboard.concat(arriving)
    }

    bus.onboard = onboard
  }
}

driveRoute(bus777, route777)
