export function getCoordinatesFromGoogleMapsLink(googleMapsLink : string) {
    // Extraer las coordenadas de la URL usando expresiones regulares
    const match = googleMapsLink.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    console.log(match)
    if (match && match.length >= 3) {
        const latitude = parseFloat(match[1]);
        const longitude = parseFloat(match[2]);
        console.log()
        return { latitude, longitude };
    }
  
    return null; // Devolver null si no se encontraron coordenadas válidas
  }