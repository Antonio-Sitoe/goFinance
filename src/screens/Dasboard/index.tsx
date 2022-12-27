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
  TransactionsList
} from "./styles";

export interface IListItemProps {
  id: string;
  type: "positive" | "negative"
  title: string
  amount: string
  category: {
    icon: string
    name: string
  }
  date: String
}

function Dashboard() {

  const data: IListItemProps[] = [
    {
      id: `${Math.random() * 1600}`,
      type: "positive",
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        icon: "dollar-sign",
        name: "category",
      },
      date: "13/04/2020"
    },
    {
      id: `${Math.random() * 1600}`,
      type: "negative",
      title: 'Aluguer de apartamento',
      amount: 'R$ 12.000,00',
      category: {
        icon: "coffee",
        name: "Alimentacao",
      },
      date: "13/04/2020"
    },
    {
      id: `${Math.random() * 1600}`,
      type: "positive",
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        icon: "shopping-cart",
        name: "Compras",
      },
      date: "13/04/2020"
    },
    {
      id: `${Math.random() * 1600}`,
      type: "negative",
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
      date: "13/04/2020"
    }
  ]
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
          <Power name="power" />
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
              title={item?.title}
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
