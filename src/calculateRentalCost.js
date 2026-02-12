/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let total = days * pricePerDay;

  if (days >= 3 && days <= 6) {
    total -= 20;
  } else if (days >= 7) {
    total -= 50;
  }

  return total;
}

module.exports = calculateRentalCost;
