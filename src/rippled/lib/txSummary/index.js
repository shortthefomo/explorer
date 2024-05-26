import { transactionTypes } from '../../../containers/shared/components/Transaction'
import { defaultParser } from '../../../containers/shared/components/Transaction/defaultParser'

const getInstructions = (tx, meta) => {
  const type = tx.TransactionType
  const parser = transactionTypes[type]?.parser || defaultParser
  return parser(tx, meta)
}

const summarizeTransaction = (d, details = false) => {
  const summary = {
    hash: d.hash,
    ctid: d.ctid,
    type: d.tx.TransactionType,
    result: d.meta.TransactionResult,
    account: d.tx.Account,
  }
  if (details === false) return summary
  return {
    ...summary,
    index: Number(d.meta.TransactionIndex),
    fee: d.tx.Fee / 1000000,
    sequence: d.tx.Sequence,
    ticketSequence: d.tx.TicketSequence,
    isHook: !!d.tx.EmitDetails,
    date: d.date,
    details: details
      ? {
          instructions: getInstructions(d.tx, d.meta),
          tx: d.tx,
          meta: d.meta,
        }
      : undefined,
  }
}

export default summarizeTransaction
