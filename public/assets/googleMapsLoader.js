export function loadGoogleMaps(callback = "initMap") {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error("VITE_GOOGLE_MAPS_API_KEY is missing");
    return;
  }

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callback}`;
  script.async = true;
  script.defer = true;

  document.head.appendChild(script);
}
