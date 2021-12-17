import React from 'react'

export default function CurrencyRow1(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props

  
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <buttom className="buttom" value={selectedCurrency}  > 
      <img className="img" src="images/téléchargement.png" />
      {selectedCurrency}
      </buttom>
    </div>
  )
}
