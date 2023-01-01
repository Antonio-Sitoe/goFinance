import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
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
  LogoutButton
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
  date: String
}

interface HighLightProps {
  amount: string
}
interface HighLightData {
  entries: HighLightProps
  expensive: HighLightProps
  total: HighLightProps
}
function Dashboard() {
  const [transactions, setTransactions] = React.useState<IListItemProps[]>([])
  const [highlight, setHighlight] = React.useState<HighLightData>({} as HighLightData)
  const dataKey = '@gofinances:transactions'
  let entriesTotal = 0;
  let expensiveTotal = 0;

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
    setTransactions(transactionFormated)
    setHighlight({
      entries: {
        amount: Number(entriesTotal).toLocaleString('pt-MZ', { style: "currency", currency: "MZN" })
      },
      expensive: {
        amount: Number(expensiveTotal).toLocaleString('pt-MZ', { style: "currency", currency: "MZN" })
      },
      total: {
        amount: Number(total).toLocaleString('pt-MZ', { style: "currency", currency: "MZN" })
      }
    })

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
        <HighLightCard title="Entradas" type="up" icon_name="arrow-up-circle" amount={highlight?.entries?.amount} description="Última entrada dia 13 de abril" />
        <HighLightCard title="Saídas" type="down" icon_name="arrow-down-circle" amount={highlight?.expensive?.amount} description="Última saída dia 03 de abril" />
        <HighLightCard title="Total" type='total' icon_name="dollar-sign" amount={highlight?.total?.amount} description="01 à 16 de abril" />
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
    </Container>
  );
}

export default Dashboard;
