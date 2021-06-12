export const PropertyPersona = {
  approval_rate: 50,
  product_name: "BizPower SME Property Loan",
  scores: {
    financials: 40,
    credit: 50,
    viability: 60,
  },
  factors: {
    financials: {
      balance: true,
      income: true,
      cash_flow: false,
    },
    credit: {
      payment_behaviour: false,
      outstanding_payments: false,
      credit_length: true,
    },
    viability: {
      solvency: false,
      liquidity: true,
    },
  }
}

export const BusinessPersona = {
  approval_rate: 93,
  product_name: "BizPower SME Business Loan",
  scores: {
    financials: 80,
    credit: 95,
    viability: 100,
  },
  factors: {
    financials: {
      balance: true,
      income: true,
      cash_flow: true,
    },
    credit: {
      payment_behaviour: false,
      outstanding_payments: true,
      credit_length: true,
    },
    viability: {
      solvency: true,
      liquidity: true,
    },
  }
}