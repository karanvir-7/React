// Price calculation helpers

/**
 * Get original price given the discounted price and discount percentage.
 * Example: discounted 80 with 20% -> original 100.
 */
export function getOriginalPriceFromDiscounted(
  discountedPrice: number,
  discountPercentage: number
): number {
  const rate = discountPercentage / 100;
  if (!isFinite(discountedPrice) || !isFinite(rate)) return NaN;
  if (rate <= 0) return round2(discountedPrice);
  if (rate >= 1) return NaN; // 100% or more makes original undefined
  return round2(discountedPrice / (1 - rate));
}

/**
 * Get original price given the discount amount and discount percentage.
 * Example: discount amount 20 with 20% -> original 100.
 */
export function getOriginalPriceFromDiscountAmount(
  discountAmount: number,
  discountPercentage: number
): number {
  const rate = discountPercentage / 100;
  if (!isFinite(discountAmount) || !isFinite(rate)) return NaN;
  if (rate <= 0) return NaN; // cannot compute with 0%
  return round2(discountAmount / rate);
}

/**
 * Get discounted price from original price and discount percentage.
 */
export function getDiscountedPrice(
  originalPrice: number,
  discountPercentage: number
): number {
  const rate = discountPercentage / 100;
  if (!isFinite(originalPrice) || !isFinite(rate)) return NaN;
  if (rate <= 0) return round2(originalPrice);
  if (rate >= 1) return 0;
  return round2(originalPrice * (1 - rate));
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
