import React from 'react'
import Button from '../../components/Forms/Button/Button'
import Input from '../../components/Forms/Input/Input'
import CategorySelect from '../CategorySelect/CategorySelect'
import CategorySelectButton from '../../components/Forms/CategorySelectButton/CategorySelectButton'
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton/TransactionTypeButton'

import { Modal } from 'react-native'
import { useForm } from 'react-hook-form'

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

function Register() {
  const [transactionTypeselected, setSTransactionTypeselected] = React.useState<ItransactionType>('up');
  const [categoryModalOpen, setCategoryModalOpen] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState({
    key: "category",
    name: "Categoria"
  })
  const { control, handleSubmit } = useForm()

  function handleTransactionType(type: ItransactionType) {
    setSTransactionTypeselected(type)
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }
  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }
  function handleRegister(form: FormData) {
    const data = {
      ...form,
      transactionType: transactionTypeselected,
      category: category.key
    }
    console.log(data)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm placeholder='Nome' name='name' control={control} />
          <InputForm placeholder='Preço' name='amount' control={control} />
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
  )
}

export default Register