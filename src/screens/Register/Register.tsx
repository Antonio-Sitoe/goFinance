import React from 'react'
import Button from '../../components/Forms/Button/Button'
import CategorySelect from '../../components/Forms/CategorySelect/CategorySelect'
import Input from '../../components/Forms/Input/Input'
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton/TransactionTypeButton'
import {
  Container,
  Title,
  Header,
  Form,
  Fields,
  TransactionTypes
} from './style'

type ItransactionType = 'up' | "down"

function Register() {
  const [transactionTypeselected, setSTransactionTypeselected] = React.useState<ItransactionType>('up')

  function handleTransactionType(type: ItransactionType) {
    setSTransactionTypeselected(type)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
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
          <CategorySelect title='Categoria' />
        </Fields>
        <Button title="Enviar" />
      </Form>


    </Container>
  )
}

export default Register