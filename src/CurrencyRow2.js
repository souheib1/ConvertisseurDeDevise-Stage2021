import React from 'react'

export default function CurrencyRow2(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    source
  } = props

  
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <buttom className="buttom" value={selectedCurrency}  > 
      <img className="img" src="images/Tunisie11.jpg" />
      {selectedCurrency}
      </buttom>
    </div>
  )
}
