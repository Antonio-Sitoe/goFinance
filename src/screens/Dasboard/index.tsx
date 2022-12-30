import AsyncStorage from '@react-native-async-storage/async-storage';
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

function Dashboard() {
  const [data, setData] = React.useState<IListItemProps[]>([])
  const dataKey = '@gofinances:transactions'

  const formateDate = (date: Date) => Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: "2-digit",
    year: "2-digit",
  }).format(date)

  async function loadTransactions() {

    try {
      const response = await AsyncStorage.getItem(dataKey)
      const transactions = response ? JSON.parse(response) : []
      const transactionFormated: IListItemProps[] = transactions
        .map(({ amount, date, category, id, name, type }: IListItemProps) => {
          return {
            amount: Number(amount).toLocaleString('pt-PT', { style: 'currency', currency: "MZN" }),
            date,
            category,
            id,
            name,
            type
          }
        })
      setData(transactions)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    loadTransactions()
  }, [])

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
        <HighLightCard title="Entradas" type="up" icon_name="arrow-up-circle" amount="RS 17.400,00" description="Última entrada dia 13 de abril" />
        <HighLightCard title="Saídas" type="down" icon_name="arrow-down-circle" amount="R$ 1.259,00" description="Última saída dia 03 de abril" />
        <HighLightCard title="Total" type='total' icon_name="dollar-sign" amount="R$ 16.141,00" description="01 à 16 de abril" />
      </HighLightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item: IListItemProps) => item.id}
          renderItem={({ item }: { item: IListItemProps }) => (
            <TransactionCard
              type={item.type}
              name={item?.title}
              amount={item?.amount}
              category={{
                icon: item.category.icon,
                name: item.category.name
              }}
              date={item.date}
            />
          )}
        />
      </Transactions>
    </Container>
  );
}

export default Dashboard;
