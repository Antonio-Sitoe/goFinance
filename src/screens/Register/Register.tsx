import React from 'react'
import Button from '../../components/Forms/Button/Button'
import Input from '../../components/Forms/Input/Input'
import CategorySelect from '../CategorySelect/CategorySelect'
import CategorySelectButton from '../../components/Forms/CategorySelectButton/CategorySelectButton'
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton/TransactionTypeButton'

import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {
  Container,
  Title,
  Header,
  Form,
  Fields,
  TransactionTypes
} from './style'
import InputForm from '../../components/Forms/InputForm/InputForm'

type ItransactionType = 'up' | "down"
interface FormData {
  name: string
  amount: string
}

const schema = yup.object().shape({
  name: yup.string().required("Nome e obrigatório"),
  amount: yup.number().typeError("Informe um valor numerico").positive("O valor nao pode ser negativo").required("O valor e obrigatorio")
})

function Register() {
  const [transactionTypeselected, setSTransactionTypeselected] = React.useState<ItransactionType>('up');
  const [categoryModalOpen, setCategoryModalOpen] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState({
    key: "category",
    name: "Categoria"
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleTransactionType(type: ItransactionType) {
    setSTransactionTypeselected(type)
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }
  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function validateFieldsBeforeSendData() {
    if (!transactionTypeselected) return Alert.alert("Selecione uma transacao")
    if (category.key === 'category') return Alert.alert("Selecione a categoria")

  }
  function handleRegister(form: FormData) {
    validateFieldsBeforeSendData()

    const data = {
      ...form,
      transactionType: transactionTypeselected,
      category: category.key
    }
    console.log(data)
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              error={errors?.name && `${errors?.name?.message}`}
              autoCapitalize='sentences'
              autoCorrect={false}
              placeholder='Nome'
              name='name'
              control={control}

            />
            <InputForm
              error={errors.amount && `${errors.amount.message}`}
              placeholder='Preço'
              name='amount'
              control={control}
              keyboardType={'numeric'}
            />
            <TransactionTypes>
              <TransactionTypeButton
                isActive={transactionTypeselected === 'up'}
                onPress={() => handleTransactionType('up')}
                title='Income'
                type='up' />
              <TransactionTypeButton
                isActive={transactionTypeselected === 'down'}
                onPress={() => handleTransactionType('down')}
                title='OutCome'
                type='down' />
            </TransactionTypes>
            <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal} />
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default Register