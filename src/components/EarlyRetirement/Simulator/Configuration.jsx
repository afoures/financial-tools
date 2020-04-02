import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useConfig } from './SimulatorContext'

import styles from './Configuration.module.scss'

const castForm = (form, cast) => Object.keys(form).reduce((castedForm, key) => {
    castedForm[key] = cast(form[key])
    return castedForm
}, {})

const isNumber = (value) => !isNaN(Number(value))

const InputGroup = ({ name, label, value, registered, error }) => (
    <div className={styles['input-group']}>
        <label htmlFor={name} >{label}</label>
        <input className={error && styles.error} name={name} defaultValue={value} ref={registered}/>
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
                label='Annual Stock Returns'
                value={config.stockReturns}
                registered={register({ required: true, validate: isNumber })}
                error={errors.stockReturns}
            />
            <InputGroup
                name='bondReturns'
                label='Annual Bond Returns'
                value={config.bondReturns}
                registered={register({ required: true, validate: isNumber })}
                error={errors.bondReturns}
            />
            <InputGroup
                name='avgTaxRate'
                label='Average Tax Rate'
                value={config.avgTaxRate}
                registered={register({ required: true, validate: isNumber })}
                error={errors.avgTaxRate}
            />
        </form>
    )
}

function DynamicGroup({ name, dataKey }) {
    const { register, handleSubmit, errors, reset } = useForm()
    const { config, updateConfig } = useConfig()

    const [list, setList] = useState(config[name])

    const removeElem = (id) => {
        setList(list => {
            const copy = [...list]
            copy.splice(id, 1)
            return copy
        })
    }

    const addElem = (elem) => {
        setList(list => [...list, castForm(elem, Number)])
        reset()
    }

    useEffect(() => {
        updateConfig(config => ({...config, [name]: list}))
    }, [list, name, updateConfig])

    return (
        <div className={styles['dynamic-group']}>
            <h3>
                {name}
            </h3>
            <div className={styles['dynamic-list']}>
                <div className={styles.header}>
                    <span className={styles['key-title']}>age</span>
                    <span className={styles['value-title']}>{dataKey}</span>
                </div>
                {list.map((item, index) =>
                    <div
                        className={styles.item}
                        key={index}
                    >
                        <span className={styles.key}>{item.age}</span>
                        <span className={styles.value}>{item[dataKey]}</span>
                        <span
                            onClick={() => removeElem(index)}
                            className={styles.remove}
                        >⨯</span>
                    </div>
                )}
            </div>
            <form
                className={styles['add-item']}
                onSubmit={handleSubmit(addElem)}
            >
                <input className={errors.age && styles.error} name="age" placeholder="age" ref={register({required: true, validate: isNumber})} />
                <input className={errors[dataKey] && styles.error} name={dataKey} placeholder={dataKey} ref={register({required: true, validate: isNumber})} />
                <button type='submit' >add</button>
            </form>
        </div>
    )
}

function DynamicPortfolio() {
    const { register, handleSubmit, getValues, errors, reset } = useForm()
    const { config, updateConfig } = useConfig()

    const [list, setList] = useState(config.portfolio)

    const isOne = () => {
        const values = getValues()
        return (Number(values.stock) + Number(values.bond)) === 1
    }

    const removeElem = (id) => {
        setList(list => {
            const copy = [...list]
            copy.splice(id, 1)
            return copy
        })
    }

    const addElem = (form) => {
        const elem = castForm(form, Number)

        const newElem = {
            age: elem.age,
            repartition: {
                stock: elem.stock,
                bond: elem.bond,
            }
        }
        setList(list => [...list, newElem])
        reset()
    }

    useEffect(() => {
        updateConfig(config => ({...config, portfolio: list}))
    }, [list, updateConfig])

    return (
        <div className={styles['dynamic-portfolio']}>
            <h3>
                portfolio
            </h3>
            <div className={styles['dynamic-list']}>
                <div className={styles.header}>
                    <span className={styles['key-title']}>age</span>
                    <span className={styles['value-title']}>{['stock', 'bond'].join(' - ')}</span>
                </div>
                {list.map((item, index) =>
                    <div
                        className={styles.item}
                        key={index}
                    >
                        <span className={styles.key}>{item.age}</span>
                        <span className={styles.value}>{`${item.repartition.stock} - ${item.repartition.bond}`}</span>
                        <span
                            onClick={() => removeElem(index)}
                            className={styles.remove}
                        >⨯</span>
                    </div>
                )}
            </div>
            <form
                className={styles['add-item']}
                onSubmit={handleSubmit(addElem)}
            >
                <input className={errors.age && styles.error} name="age" placeholder="age" ref={register({required: true, validate: isNumber})} />
                <input className={errors.stock && styles.error} name="stock" placeholder="stock" ref={register({required: true, validate: {isNumber, isOne}})} />
                <input className={errors.bond && styles.error} name="bond" placeholder="bond" ref={register({required: true, validate: {isNumber, isOne}})} />
                <button type='submit' >add</button>
            </form>
        </div>
    )
}


function Dynamic() {
    return (
        <div className={styles.dynamic}>
            <DynamicGroup
                title='Investments'
                name='investments'
                dataKey='amount'
            />
            <DynamicGroup
                title='Income'
                name='income'
                dataKey='amount'
            />
            <DynamicGroup
                title='Spending'
                name='spending'
                dataKey='amount'
            />
            <DynamicPortfolio />
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
                label='Goal'
                value={config.goal.amount}
                registered={register({ required: true, validate: isNumber })}
                error={errors.amount}
            />
            <InputGroup
                name='wr'
                label='Safe Withdrawal Rate'
                value={config.goal.wr}
                registered={register({ required: true, validate: isNumber })}
                error={errors.wr}
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
