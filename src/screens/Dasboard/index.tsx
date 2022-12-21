import HighLightCard from '../../components/HighLightCard/HighLightCard';
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
  HighLightCards
} from "./styles";

function Dashboard() {
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
        <HighLightCard title="Entradas" icon_name="arrow-up-circle" amount="RS 17.400,00" description="Última entrada dia 13 de abril" />
        <HighLightCard title="Entradas" icon_name="arrow-up-circle" amount="RS 17.400,00" description="Última entrada dia 13 de abril" />
        <HighLightCard title="Entradas" icon_name="arrow-up-circle" amount="RS 17.400,00" description="Última entrada dia 13 de abril" />
      </HighLightCards>
    </Container>
  );
}

export default Dashboard;
