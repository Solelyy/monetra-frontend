import { API_BASE_URL } from "@/lib/api";

export async function depositApi(amount: number) {
  const response = await fetch(`${API_BASE_URL}/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(amount),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error("Unable to deposit");
  }

  console.log("Deposit response: ", result);

  return result;
}
