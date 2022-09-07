module.exports = (htmlStr, loan) => {
  let output = htmlStr.replace(/{%NAME%}/g, loan.customerName);
  output = output.replace(/{%PHONE%}/g, loan.phoneNumber);
  output = output.replace(/{%ADDRESS%}/g, loan.address);
  output = output.replace(/{%LOANAMOUNT%}/g, `$${loan.loanAmount}`);
  output = output.replace(
    /{%INTEREST%}/g,
    `${(loan.interest * 100).toFixed(2)}%`
  );
  output = output.replace(/{%LOANTERMYEARS%}/g, loan.loanTermYears);
  output = output.replace(/{%LOANTYPE%}/g, loan.loanType);
  output = output.replace(
    /{%TOTALOWED%}/g,
    `$${(
      loan.loanAmount * Math.pow(1 + loan.interest, loan.loanTermYears)
    ).toFixed(2)}`
  );
  output = output.replace(/{%DESCRIPTION%}/g, loan.description);
  return output;
};
