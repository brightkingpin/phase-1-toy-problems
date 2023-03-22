function calculateNetSalary(basicSalary, benefits) {
    // Tax rates and thresholds
    const taxRates = [
      { threshold: 24000, rate: 0.1 },
      { threshold: 40000, rate: 0.15 },
      { threshold: 60000, rate: 0.20 },
      { threshold: 80000, rate: 0.25 },
      { threshold: Infinity, rate: 0.30 }
    ];
  
    // KRA, NHIF, and NSSF rates
    const kraRate = 0.01;
    const nhifRates = [
      { threshold: 6000, rate: 150 },
      { threshold: 8000, rate: 300 },
      { threshold: 12000, rate: 400 },
      { threshold: 15000, rate: 500 },
      { threshold: 20000, rate: 600 },
      { threshold: 25000, rate: 750 },
      { threshold: 30000, rate: 850 },
      { threshold: 35000, rate: 900 },
      { threshold: 40000, rate: 950 },
      { threshold: Infinity, rate: 1000 }
    ];
    const nssfRate = 0.06;
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate taxable income
    const taxableIncome = grossSalary - kraRate * grossSalary;
  
    // Calculate PAYE (tax)
    let tax = 0;
    let remainingIncome = taxableIncome;
  
    for (let i = 0; i < taxRates.length; i++) {
      const rate = taxRates[i].rate;
      const threshold = taxRates[i].threshold;
  
      if (remainingIncome <= 0) {
        break;
      } else if (remainingIncome > threshold) {
        tax += (threshold * rate);
        remainingIncome -= threshold;
      } else {
        tax += (remainingIncome * rate);
        remainingIncome = 0;
      }
    }
  
    // Calculate NHIF deduction
    let nhif = 0;
  
    for (let i = 0; i < nhifRates.length; i++) {
      const rate = nhifRates[i].rate;
      const threshold = nhifRates[i].threshold;
  
      if (grossSalary <= threshold) {
        nhif = rate;
        break;
      }
    }
  
    // Calculate NSSF deduction
    const nssf = Math.min(nssfRate * grossSalary, 200);
  
    // Calculate net salary
    const netSalary = grossSalary - tax - nhif - nssf;
  
    //  Then Print results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax (PAYE): ${tax}`);
    console.log(`NHIF Deductions: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  