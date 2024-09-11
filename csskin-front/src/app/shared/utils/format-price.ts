export function formatPrice(
  price?: number | string,
  options: {
    currency?: "USD" | "EUR" | "BRL";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "BRL", notation } = options;

  if (price === undefined || price === null) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(0);
  }

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
    notation: notation || undefined,
  }).format(numericPrice);
}
