export const formatCurrency = (amount: number | null) => {
    const value = amount || 0;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'IND',
    }).format(value);
  };