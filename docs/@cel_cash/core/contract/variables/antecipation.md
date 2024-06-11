[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / antecipation

# Variable: antecipation

> `const` **antecipation**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### create

> **create**: `object`

### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `anteciparBodySchema`

#### Type declaration

##### antecipationUuid

> **antecipationUuid**: `ZodString`

### create.method

> **method**: `"POST"` = `'POST'`

### create.path

> **path**: `"/"` = `'/'`

### create.responses

> **responses**: `object`

### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `anteciparResponseSchema`

#### Type declaration

##### type

> **type**: `ZodBoolean`

### create.summary

> **summary**: `"Antecipar recebíveis"` = `'Antecipar recebíveis'`

### simulate

> **simulate**: `RecursivelyApplyOptions`\<`object`, `object`\>

#### Type declaration

##### create

> **create**: `object`

##### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `simulatarAntecipacaoBodySchema`

###### Type declaration

###### brands

> **brands**: `ZodEffects`\<`ZodArray`\<`ZodEnum`\<[..., ..., ..., ..., ..., ...]\>, `"many"`\>, `undefined` \| `string` \| `number`, (`"discover"` \| `"mastercard"` \| `"elo"` \| `"hipercard"` \| `"amex"` \| `"visa"`)[]\>

###### transactionGalaxPayIds

> **transactionGalaxPayIds**: `ZodEffects`\<`ZodArray`\<`ZodNumber`, `"many"`\>, `undefined` \| `string` \| `number`, `number`[]\>

###### value

> **value**: `ZodNumber`

##### create.method

> **method**: `"POST"` = `'POST'`

##### create.path

> **path**: `"/"` = `'/'`

##### create.responses

> **responses**: `object`

##### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `simulatarAntecipacaoResponseSchema`

###### Type declaration

###### Antecipation

> **Antecipation**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### averageDays

> **averageDays**: `ZodNumber`

###### cet

> **cet**: `ZodNumber`

###### companyGalaxPayId

> **companyGalaxPayId**: `ZodNumber`

###### createdAtFrom

> **createdAtFrom**: `ZodString`

###### createdAtTo

> **createdAtTo**: `ZodString`

###### done

> **done**: `ZodEnum`\<...\>

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### netValue

> **netValue**: `ZodNumber`

###### totalAntecipateTax

> **totalAntecipateTax**: `ZodNumber`

###### totalMdr

> **totalMdr**: `ZodNumber`

###### totalValue

> **totalValue**: `ZodNumber`

###### transactionsGalaxPayIds

> **transactionsGalaxPayIds**: `ZodString`

###### uuid

> **uuid**: `ZodString`

###### OperationSummary

> **OperationSummary**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### averageDays

> **averageDays**: `ZodNumber`

###### cet

> **cet**: `ZodNumber`

###### finalTax

> **finalTax**: `ZodNumber`

###### grossTotal

> **grossTotal**: `ZodNumber`

###### mdr

> **mdr**: `ZodNumber`

###### mdrTax

> **mdrTax**: `ZodNumber`

###### netValue

> **netValue**: `ZodNumber`

###### Releases

> **Releases**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### type

> **type**: `ZodBoolean`

##### create.summary

> **summary**: `"Simula antecipação"` = `'Simula antecipação'`

##### getByFilters

> **getByFilters**: `object`

##### getByFilters.method

> **method**: `"GET"` = `'GET'`

##### getByFilters.path

> **path**: `"/get-by-filters"` = `'/get-by-filters'`

##### getByFilters.query

> **query**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `listarAntecipacoesParamsSchema`

##### getByFilters.responses

> **responses**: `object`

##### getByFilters.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listarAntecipacoesResponseSchema`

###### Type declaration

###### Antecipation

> **Antecipation**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

##### getByFilters.summary

> **summary**: `"Lista as simulações antecipação de transações"` = `'Lista as simulações antecipação de transações'`

## Source

[packages/core/src/contract/antecipation.ts:14](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/contract/antecipation.ts#L14)