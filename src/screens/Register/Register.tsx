import React from 'react'
import Button from '../../components/Forms/Button/Button'
import CategorySelect from '../CategorySelect/CategorySelect'
import CategorySelectButton from '../../components/Forms/CategorySelectButton/CategorySelectButton'
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton/TransactionTypeButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native'
import useAuth from '../../hooks/useAuth'

type ItransactionType = "positive" | "negative"


interface FormData {
  name: string
  amount: string
}

interface IDataToSave extends FormData {
  transactionType: ItransactionType,
  category: string
}

const schema = yup.object().shape({
  name: yup.string().required("Nome e obrigatório"),
  amount: yup.number().typeError("Informe um valor numerico").positive("O valor nao pode ser negativo").required("O valor e obrigatorio")
})


function Register() {
  const [transactionTypeselected, setSTransactionTypeselected] = React.useState<ItransactionType>('positive');
  const [categoryModalOpen, setCategoryModalOpen] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState({
    key: "category",
    name: "Categoria"
  })
  const { setIsChangeSomething } = useAuth();

  const navigation = useNavigation()
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const dataKey = '@gofinances:transactions'


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

  async function SaveToAsyncStorage(data: IDataToSave) {
    try {
      // Salvar dados no Async storage
      const takeData = await AsyncStorage.getItem(dataKey);
      const haveData = takeData ? JSON.parse(takeData) : [];
      const newData = [...haveData, data]

      await AsyncStorage.setItem(dataKey, JSON.stringify(newData));
      Alert.alert("Armazenado com sucesso!");
    } catch (error) {
      console.log(error)
      Alert.alert("Nao foi possivel Salvar")
    } finally {
      setSTransactionTypeselected("positive")
      setCategory({
        key: "category",
        name: "Categoria"
      })
      reset()
      navigation.navigate("Listagem")
      setIsChangeSomething(true)
    }
  }
  async function handleRegister(form: FormData) {
    validateFieldsBeforeSendData()
    const data = {
      ...form,
      type: transactionTypeselected,
      category: category.key,
      date: new Date(),
      id: String(uuid.v4())
    }
    await SaveToAsyncStorage(data)
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
                isActive={transactionTypeselected === 'positive'}
                onPress={() => handleTransactionType('positive')}
                title='Income'
                type='up' />
              <TransactionTypeButton
                isActive={transactionTypeselected === 'negative'}
                onPress={() => handleTransactionType('negative')}
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