import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import HighLightCard from '../../components/HighLightCard/HighLightCard';
import TransactionCard from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Power,
  HighLightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton,
  LoadContainer
} from "./styles";

export interface IListItemProps {
  id: string;
  type: "positive" | "negative"
  name: string
  amount: string
  category: {
    icon: string
    name: string
  }
  date: string
}

interface HighLightProps {
  amount: string
  lastTransaction: string
}
interface HighLightData {
  entries: HighLightProps
  expensive: HighLightProps
  total: HighLightProps
}
function Dashboard() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [transactions, setTransactions] = React.useState<IListItemProps[]>([])
  const [highlight, setHighlight] = React.useState<HighLightData>({} as HighLightData)
  const dataKey = '@gofinances:transactions'
  let entriesTotal = 0;
  let expensiveTotal = 0;
  const { colors } = useTheme()

  function getLastTransactionDate(collection: IListItemProps[], type: "positive" | "negative") {
    const lastTransaction = new Date(Math.max.apply(Math, collection.filter(transaction => transaction.type === type)
      .map(transactions => new Date(transactions.date).getTime())))
    console.log("data", lastTransaction)

    const date = lastTransaction.getDate() ? lastTransaction.getDate() : "--"
    const month = lastTransaction.toLocaleString('pt-MZ', { month: "long" })
    const verifyMonth = month.includes('Invalid') ? "--" : month

    return `${date} de ${verifyMonth}`
  }

  async function loadTransacion() {
    const response = await AsyncStorage.getItem(dataKey)
    const transactions = response ? JSON.parse(response) : []
    const transactionFormated: IListItemProps[] = transactions.map((item: IListItemProps) => {

      if (item.type === "positive") {
        entriesTotal += Number(item.amount)
      } else {
        expensiveTotal += Number(item.amount)
      }

      const amount = Number(item.amount).toLocaleString('pt-MZ', { style: 'currency', currency: "MZN" })
      const dateFormated = Intl.DateTimeFormat('pt-MZ', {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
      }).format(new Date(item.date))
      return {
        id: item.id,
        name: item.name,
        type: item.type,
        category: item.category,
        date: dateFormated,
        amount
      }
    })

    const total = entriesTotal - expensiveTotal;
    const lastTransactionEntries = getLastTransactionDate(transactions, 'positive')
    const lastTransactionExpensive = getLastTransactionDate(transactions, 'negative')
    const totalInterval = `01 a ${lastTransactionExpensive}`

    setTransactions(transactionFormated)
    setHighlight({
      entries: {
        amount: Number(entriesTotal).toLocaleString('pt-MZ', { style: "currency", currency: "MZN" }),
        lastTransaction: `Última entrada dia ${lastTransactionEntries}`

      },
      expensive: {
        amount: Number(expensiveTotal).toLocaleString('pt-MZ', { style: "currency", currency: "MZN" }),
        lastTransaction: `Última saída dia ${lastTransactionExpensive}`
      },
      total: {
        amount: Number(total).toLocaleString('pt-MZ', { style: "currency", currency: "MZN" }),
        lastTransaction: totalInterval
      }
    })
    setIsLoading(false)
  }

  React.useEffect(() => {
    loadTransacion();
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      loadTransacion();
    }, [])
  );

  return (
    <Container>
      {isLoading ?
        <LoadContainer>
          <ActivityIndicator color={colors.primary} size="large" />
        </LoadContainer>
        :
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/72309855?v=4",
                  }}
                />
                <User>
                  <UserGreeting>Ola,</UserGreeting>
                  <UserName>Antonio Sitoe</UserName>
                </User>
              </UserInfo>
              <LogoutButton onPress={() => { }}>
                <Power name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighLightCards >
            <HighLightCard title="Entradas" type="up" icon_name="arrow-up-circle" amount={highlight?.entries?.amount}
              description={highlight?.entries?.lastTransaction} />
            <HighLightCard title="Saídas" type="down" icon_name="arrow-down-circle" amount={highlight?.expensive?.amount}
              description={highlight?.expensive?.lastTransaction} />
            <HighLightCard title="Total" type='total' icon_name="dollar-sign" amount={highlight?.total?.amount} description={highlight?.total?.lastTransaction} />
          </HighLightCards>

          <Transactions>
            <Title>Listagem</Title>
            <TransactionsList
              data={transactions}
              keyExtractor={(item: IListItemProps) => item.id}
              renderItem={({ item }: { item: IListItemProps }) => (
                <TransactionCard
                  type={item.type}
                  name={item?.name}
                  amount={item?.amount}
                  category={`${item.category}`}
                  date={item.date}
                />
              )}
            />
          </Transactions>
        </>
      }
    </Container>
  );
}

export default Dashboard;
