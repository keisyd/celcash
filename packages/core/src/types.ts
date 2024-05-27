import { z } from 'zod'
import {
    antecipationSchema,
    operationSummarySchema,
    releasesSchema,
} from './schemas/antecipation'
import {
    brandSchema,
    cardSchema,
    listCardsParamsSchema,
    statusCardsSchema,
} from './schemas/cards'
import { addressSchema, paymentSchema, scopeSchema } from './schemas/common'
import { customerSchema, statusCustomerSchema } from './schemas/customers'
import {
    agreementSchema,
    antifraudSchema,
    boletoSchema,
    cardOperatorIdSchema,
    deadlineSchema,
    paymentMethodBoletoSchema,
    paymentMethodCreditCardSchema,
    paymentMethodPixSchema,
    pixSchema,
} from './schemas/payments'
import {
    periodicitySchema,
    planPricesSchema,
    planSchema,
    statusPlansSchema,
} from './schemas/plans'
import {
    mainPaymentMethodIdSchema,
    subscriptionSchema,
    subscriptionStatusSchema,
} from './schemas/subscriptions'
import {
    abecsReasonDeniedSchema,
    conciliationOccurrenceSchema,
    conciliationOccurrenceStatusSchema,
    invoiceConfigSchema,
    invoiceConfigTypeSchema,
    invoiceSchema,
    invoiceStatusSchema,
} from './schemas/transactions'

export type Antecipation = z.infer<typeof antecipationSchema>
export type Releases = z.infer<typeof releasesSchema>
export type OperationSummary = z.infer<typeof operationSummarySchema>

export type StatusCards = z.infer<typeof statusCardsSchema>
export type Brand = z.infer<typeof brandSchema>
export type ListCardsParams = z.infer<typeof listCardsParamsSchema>
export type Card = z.infer<typeof cardSchema>

export type Scope = z.infer<typeof scopeSchema>
export type Payment = z.infer<typeof paymentSchema>
export type Address = z.infer<typeof addressSchema>

export type StatusCustomer = z.infer<typeof statusCustomerSchema>
export type Customer = z.infer<typeof customerSchema>

export type CardOperatorId = z.infer<typeof cardOperatorIdSchema>
export type Agreement = z.infer<typeof agreementSchema>
export type Boleto = z.infer<typeof boletoSchema>
export type PaymentMethodPix = z.infer<typeof paymentMethodPixSchema>
export type Pix = z.infer<typeof pixSchema>
export type PaymentMethodBoleto = z.infer<typeof paymentMethodBoletoSchema>
export type Deadline = z.infer<typeof deadlineSchema>
export type Antifraud = z.infer<typeof antifraudSchema>
export type PaymentMethodCreditCard = z.infer<
    typeof paymentMethodCreditCardSchema
>

export type StatusPlans = z.infer<typeof statusPlansSchema>
export type PlanPrices = z.infer<typeof planPricesSchema>
export type Periodicity = z.infer<typeof periodicitySchema>
export type Plan = z.infer<typeof planSchema>

export type SubscriptionStatus = z.infer<typeof subscriptionStatusSchema>
export type MainPaymentMethodId = z.infer<typeof mainPaymentMethodIdSchema>
export type Subscription = z.infer<typeof subscriptionSchema>

export type InvoiceConfigType = z.infer<typeof invoiceConfigTypeSchema>
export type InvoiceStatus = z.infer<typeof invoiceStatusSchema>
export type Invoice = z.infer<typeof invoiceSchema>
export type InvoiceConfig = z.infer<typeof invoiceConfigSchema>
export type ConciliationOccurrenceStatus = z.infer<
    typeof conciliationOccurrenceStatusSchema
>
export type ConciliationOccurrence = z.infer<
    typeof conciliationOccurrenceSchema
>
export type AbecsReasonDenied = z.infer<typeof abecsReasonDeniedSchema>