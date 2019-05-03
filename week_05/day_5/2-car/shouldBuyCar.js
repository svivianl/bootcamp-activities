function shouldBuyCar(car) {
  if (car === undefined) {
    throw new Error("No Car!");
  }

  if(Object.entries(car).length === 0 && car.constructor === Object){
    return false;
  }

  if (car.type && car.type.toLowerCase() === "hatchback") {
    return false;
  }

  if (car.color && car.color.toLowerCase() === "pink") {
    return true;
  }

  const goodLitres = car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11;
  const goodPrice = car.price && car.price <= 5000;

  if (goodLitres && goodPrice) {
    return true;
  }

  return false;
}

module.exports = shouldBuyCar;
