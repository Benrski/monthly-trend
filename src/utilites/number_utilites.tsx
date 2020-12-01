export function formatCurrency(value: number | null | undefined): string {
  const nf = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return nf.format(value ? value : 0);
}
