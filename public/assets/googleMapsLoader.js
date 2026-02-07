export function loadGoogleMaps(callback = "initMap") {
  const apiKey = "AIzaSyAJEehBj-zJjgDcKlqRn6ZnDm9b5DvJdno";

  if (window.google && window.google.maps) return;

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callback}`;
  script.async = true;
  script.defer = true;

  document.head.appendChild(script);
}
