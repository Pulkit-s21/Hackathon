const watchId = navigator.geolocation.watchPosition(position => {
  const { latitude, longitude } = position.coords;
  // Show a map centered at latitude / longitude.
  console.log(`watchId = ${watchId}`)
});