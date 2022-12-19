import { useState } from "react";
import { Button, Container, Paragraph } from "./styles";

function Dashboard() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Paragraph>Dashboard</Paragraph>
      <Button
        title={"Hello world " + count}
        onPress={() => setCount(count + 1)}
      />
    </Container>
  );
}

export default Dashboard;
