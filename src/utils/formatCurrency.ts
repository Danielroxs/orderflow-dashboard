export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

// Función que recibe un número y lo convierte a formato de dólar estadounidense con símbolo y decimales."
