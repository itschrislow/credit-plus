export const PropertyPersona = {
  approval_rate: 55,
  finance_rate: 6.25,
  product_name: "BizPower SME Property Loan",
  scores: {
    financials: 45,
    credit: 86,
    viability: 40,
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
  approval_rate: 87,
  finance_rate: 3.45,
  product_name: "BizPower SME Business Loan",
  scores: {
    financials: 80,
    credit: 90,
    viability: 83,
  },
  factors: {
    financials: {
      balance: true,
      income: true,
      cash_flow: true,
    },
    credit: {
      payment_behaviour: true,
      outstanding_payments: true,
      credit_length: true,
    },
    viability: {
      solvency: true,
      liquidity: true,
    },
  }
}

export const ReliefPersona = {
  approval_rate: 84,
  finance_rate: 3.45,
  product_name: "BizPower Relief Financing",
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

export const SuccessPersona = {
  approval_rate: 86,
  finance_rate: 3.75,
  product_name: "BizPower SME Business Loan",
  scores: {
    financials: 80,
    credit: 90,
    viability: 83,
  },
  factors: {
    financials: {
      balance: true,
      income: true,
      cash_flow: true,
    },
    credit: {
      payment_behaviour: true,
      outstanding_payments: true,
      credit_length: true,
    },
    viability: {
      solvency: true,
      liquidity: true,
    },
  }
}

export const FailurePersona = {
  approval_rate: 55,
  finance_rate: 6.25,
  product_name: "BizPower SME Property Loan",
  scores: {
    financials: 45,
    credit: 86,
    viability: 40,
  },
  factors: {
    financials: {
      balance: true,
      income: false,
      cash_flow: false,
    },
    credit: {
      payment_behaviour: true,
      outstanding_payments: true,
      credit_length: true,
    },
    viability: {
      solvency: false,
      liquidity: false,
    },
  }
}

// export function createPersona(steps) {
//   const { income } = steps;
//   const { balance } = steps;
//   const { finance } = steps;
//   const { type } = steps;



//   const rating = calculateApprovalRate(income, balance, finance);
//   const name = getProductname(type);


// }

// function getProductname(type) {
//   switch (type) {
//     case "business":
//       return "BizPower SME Business Loan";
//     case "property":
//       return "BizPower SME Property Loan"
//     case "relief":
//       return "BizPower Relief Financing"
//   }
// }

// function calculateApprovalRate(income, balance, finance) {
//   // high income = high ar weightage = 2
//   // high balance = high ar weightage = 1
//   // high finance = low ar weightage = 1
//   // total score = 4
//   if (income > 1000000) {
//     this.incomeScore = 2
//   } else if (income > 500000) {
//     this.incomeScore = 1
//   } else {
//     this.incomeScore = 0
//   }

//   if (balance < 0) {
//     this.balanceScore = 0;
//   } else {
//     this.balanceScore = 1;
//   }

//   if (finance > 3 * balance) {
//     this.financeScore = 0;
//   } else {
//     this.financeScore = 1;
//   }
//   return Math.round((this.incomeScore + this.balanceScore + this.financeScore) / 4 * 100);
// }