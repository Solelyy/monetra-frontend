export function maskAccountNumber(accountNumber?: string) {
  if (!accountNumber) return "Unkown";

  return `********${accountNumber.slice(-4)}`;
}
