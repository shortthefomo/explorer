import { useTranslation } from 'react-i18next'
import { Amount } from '../../Amount'
import Currency from '../../Currency'

export const TableDetail = (props: any) => {
  const { t } = useTranslation()
  const { instructions } = props
  const {
    gets,
    pays,
    deliveredPrice,
    firstCurrency,
    secondCurrency,
    cancel,
    tfSell,
  } = instructions

  const rendetfSell = () =>
    tfSell ? <div className="partial-payment">tfSell</div> : null
  return pays && gets ? (
    <div className="offercreate">
      <div className="price" data-test="pair">
        <span className="label">{t('filled_price')}:</span>

        <span className="amount" data-test="amount">
          {`${Number(deliveredPrice)} `}
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
        </span>
      </div>
      <div>
        <span className="label">{t('buy')}</span>
        <Amount value={pays} data-test="amount-buy" />
      </div>
      <div>
        <span className="label">{t('sell')}</span>
        <Amount value={gets} data-test="amount-sell" />
        {rendetfSell()}
      </div>
      {cancel && (
        <div className="cancel" data-test="cancel-id">
          <span className="label">{t('cancel_offer')}</span>
          {` #`}
          <span className="sequence">{cancel}</span>
        </div>
      )}
    </div>
  ) : null
}
