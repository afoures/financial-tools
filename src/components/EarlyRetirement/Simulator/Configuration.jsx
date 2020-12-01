import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useConfig } from './SimulatorContext'

import styles from './Configuration.module.scss'

import Helper from '../../Helper'




const castForm = (form, cast) => Object.keys(form).reduce((castedForm, key) => {
    castedForm[key] = cast(form[key])
    return castedForm
}, {})

const isNumber = (value) => !isNaN(Number(value))






const InputGroup = ({ name, label, value, registered, error, helper }) => (
    <div className={styles['input-group']}>
        <label
            htmlFor={name}
        >
            {label}
        </label>
        { helper &&
            <Helper title={label} id={name} >
                {helper}
            </Helper>
        }
        <input
            className={error && styles.error}
            name={name}
            defaultValue={value}
            ref={registered}
        />
    </div>
)

function Basic() {
    const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' })
    const { config, updateConfig } = useConfig()

    function onChange(form) {
        updateConfig(config => ({...config, ...castForm(form, Number)}))
    }

    return (
        <form
            className={styles.basic}
            onChange={handleSubmit(onChange)}
        >
            <InputGroup
                name='stockReturns'
                label='Rendement annuel des actions'
                value={config.stockReturns}
                registered={register({ required: true, validate: isNumber })}
                error={errors.stockReturns}
                helper={
                    <p>
                        Entrez les rendements réels des actions.
                        Le rendement boursier moyen au cours 
                        des 150 dernières années était d'environ 8,1%.
                    </p>
                }
            />
            <InputGroup
                name='bondReturns'
                label='Rendement annuel des obligations'
                value={config.bondReturns}
                registered={register({ required: true, validate: isNumber })}
                error={errors.bondReturns}
                helper={
                    <p>
                        Entrez les rendements réels des obligations.
                        Le rendement moyen des titres à revenu fixe au cours 
                        des 150 dernières années était d'environ 2,4 %.
                    </p>
                }
            />
            <InputGroup
                name='avgTaxRate'
                label="Taux d'imposition sur plus-values"
                value={config.avgTaxRate}
                registered={register({ required: true, validate: isNumber })}
                error={errors.avgTaxRate}
                helper={
                    <p>
                        Indiquez votre taux d'imposition moyen 
                        . Les impôts ne sont appliqués que lors 
                        de la vente d'actifs. Ce taux gonflera 
                        le montant que vous devrez retirer 
                        annuellement de votre patrimoine boursier.
                    </p>
                }
            />
        </form>
    )
}




const byAge = (a, b) => Number(a.age) - Number(b.age)




function ListGroup({ name, title, inputs = [], helper }) {
    const { register, handleSubmit, errors, reset } = useForm()
    const { config, updateConfig } = useConfig()

    const [list, setList] = useState(config[name])

    const removeFromList = id => setList(current => {
        const list = [...current]
        list.splice(id, 1)
        return list
    })

    const addToList = item => setList(current => [
        ...current,
        castForm(item, Number)
    ].sort(byAge))


    useEffect(() => updateConfig(config => ({
        ...config,
        [name]: list,
    })), [list, name, updateConfig])

    return (
        <div className={styles['list-group']} >
            <h3>
                {title}
                { helper &&
                    <Helper title={title} id={name} >
                        {helper}
                    </Helper>
                }
            </h3>
            <div className={styles.list}>
                <div className={styles.header}>
                    {inputs.map((input, index) =>
                        <span key={index}>{input.placeholder}</span>
                    )}
                </div>
                {list.map((item, index) =>
                    <div
                        className={styles.item}
                        key={index}
                    >
                        {inputs.map((input, index) =>
                            <span key={index}>{item[input.name]}</span>
                        )}
                        <span
                            onClick={() => removeFromList(index)}
                            className={styles.remove}
                        >⨯</span>
                    </div>
                )}
            </div>
            <form
                className={styles['add-item']}
                onSubmit={handleSubmit(addToList)}
            >
                {inputs.map((input, index) =>
                    <input
                        key={index}
                        className={errors[input.name] && styles.error}
                        name={input.name}
                        placeholder={input.placeholder}
                        ref={register({ required: true, validate: input.validation })}
                    />
                )}
                <button type='submit' >Ajouter</button>
            </form>
        </div>
    )
}


function Dynamic() {
    return (
        <div className={styles.dynamic}>
            <ListGroup
                title='Revenus réguliers'
                name='income'
                inputs={[
                    {name: 'age', placeholder: 'age', validation: { isNumber }},
                    {name: 'amount', placeholder: 'montant', validation: { isNumber }},
                ]}
            />
            <ListGroup
                title='Dépenses régulières'
                name='spending'
                inputs={[
                    {name: 'age', placeholder: 'age', validation: { isNumber }},
                    {name: 'amount', placeholder: 'montant', validation: { isNumber }},
                ]}
            />
            <ListGroup
                title='Investissements irréguliers'
                name='investments'
                inputs={[
                    {name: 'age', placeholder: 'age', validation: { isNumber }},
                    {name: 'amount', placeholder: 'montant', validation: { isNumber }},
                ]}
            />
            <ListGroup
                title='Répartition des actifs'
                name='portfolio'
                inputs={[
                    {name: 'age', placeholder: 'age', validation: { isNumber }},
                    {name: 'stock', placeholder: 'action', validation: { isNumber }},
                    {name: 'bond', placeholder: 'obligation', validation: { isNumber }},
                    // {name: 'cash', placeholder: 'cash', validation: { isNumber }},
                ]}
                helper={
                    <p>
                        Indiquez la repartition en pourcentage cible des actifs de votre portfolio.
                    </p>
                }
            />
        </div>
    )
}

function Goal() {
    const { register, handleSubmit, errors } = useForm()
    const { config, updateConfig } = useConfig()

    function onChange(form) {
        updateConfig(config => ({...config, goal: castForm(form, Number)}))
    }

    return (
        <form
            className={styles.goal}
            onChange={handleSubmit(onChange)}
        >
            <InputGroup
                name='amount'
                label='Dépenses liées à la retraite'
                value={config.goal.amount}
                registered={register({ required: true, validate: isNumber })}
                error={errors.amount}
                helper={
                    <p>
                        Indiquez le montant que vous prévoyez de dépenser 
                        annuellement pendant la retraite. N'oubliez pas 
                        que vous devrez peut-être payer des frais de santé 
                        supplémentaires une fois que vous aurez cessé de travailler.
                    </p>
                }
            />
            <InputGroup
                name='wr'
                label='Taux de retrait sécurisé'
                value={config.goal.wr}
                registered={register({ required: true, validate: isNumber })}
                error={errors.wr}
                helper={
                    <>
                    <p>
                        Le taux de retrait sécurisé est le pourcentage de 
                        l'argent de votre retraite que vous prévoyez de 
                        liquider et de dépenser chaque année à partir de 
                        votre épargne. Il est calculé à partir de la valeur 
                        de votre épargne au moment de votre départ à la 
                        retraite. 4 % est généralement considéré comme un 
                        montant sûr pour une retraite de plus de 30 ans 
                        et vous oblige à économiser 25 fois les dépenses prévues.
                    </p>
                    <p>
                        Les taux de retrait inférieurs (2 à 3 %) sont 
                        généralement considérés comme très sûrs et beaucoup 
                        plus prudents, mais ils vous obligent à épargner 
                        beaucoup plus d'argent pour la retraite.
                    </p>
                    </>
                }
            />
        </form>
    )
}

function Configuration() {
    return (
        <div className={styles.configuration} >
            <Basic />
            <Dynamic />
            <Goal />
        </div>
    )
}

export default Configuration
