import { useTranslation } from 'react-i18next'
import { Amount } from '../../Amount'
import { TransactionSimpleComponent, TransactionSimpleProps } from '../types'
import { SimpleRow } from '../SimpleRow'
import Currency from '../../Currency'

const Simple: TransactionSimpleComponent = (props: TransactionSimpleProps) => {
  const { t } = useTranslation()
  const { data } = props
  const { deliveredPrice, firstCurrency, secondCurrency, pays, gets, cancel } =
    data.instructions

  return (
    <>
      <SimpleRow label={t('buy')} data-test="amount-buy">
        <Amount value={pays} />
      </SimpleRow>
      <SimpleRow label={t('sell')} data-test="amount-sell">
        <Amount value={gets} />
      </SimpleRow>
      {cancel && (
        <SimpleRow label={t('cancel_offer')} data-test="cancel-id">
          #{cancel}
        </SimpleRow>
      )}
      <br />
      <h4>Executed Information</h4>
      <SimpleRow label={t('filled_price')}>
        <div className="amount" data-test="amount">
          {`${Number(deliveredPrice)}`}
          <div className="one-line">
            <Currency
              currency={firstCurrency.currency}
              issuer={firstCurrency.issuer}
              shortenIssuer
            />
            /
            <Currency
              currency={secondCurrency.currency}
              issuer={secondCurrency.issuer}
              shortenIssuer
            />
          </div>
        </div>
      </SimpleRow>
    </>
  )
}
export { Simple }
