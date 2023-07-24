export const convertFToC = (temp) => {
    const tempC = ((temp - 32) * 5 / 9).toPrecision(4) + "°C";
    return tempC;
}