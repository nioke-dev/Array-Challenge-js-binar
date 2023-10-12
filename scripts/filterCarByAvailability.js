function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log("input Item : ");
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.forEach((element) => {
    if (element.available) {
      result.push(element);
    }
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  console.log("Mobil yang tersedia : ", result);
  return result;
}
