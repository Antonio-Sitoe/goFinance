import React, { useEffect } from 'react'
import { HistoryCard } from '../../components/HistoryCard'
import { Container, Header, Title, Content, ChartContainer } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { categories } from '../../utils/category';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

interface TransactionData {
  id: string;
  type: "positive" | "negative"
  name: string
  amount: string
  category: string
  date: string
}

interface CategoryData {
  name: string
  total: number
  totalformatted: string
  color: string
  percentFormatted: string
  percent: number
}

function Resume() {
  const [totalByCategories, setTotalByCategories] = React.useState<CategoryData[]>([])
  const { colors } = useTheme()

  useEffect(() => {
    async function loadData() {
      const dataKey = '@gofinances:transactions'
      const response = await AsyncStorage.getItem(dataKey);
      const responseFormated = response ? JSON.parse(response) : [];

      const expensives = responseFormated.filter((expensive: TransactionData) => expensive.type === 'negative');
      const expensiveTotal = responseFormated.reduce((acumulator: number, expensive: TransactionData) => {
        return acumulator += Number(expensive.amount)
      }, 0)
      const totalByCategory: CategoryData[] = [];


      categories.forEach((category) => {
        let categorySum = 0

        expensives.forEach((expensive: TransactionData) => {
          if (expensive.category === category.key) {
            categorySum += Number(expensive.amount)
          }
        });

        if (categorySum > 0) {
          const total = categorySum.toLocaleString('pt-MZ', { style: "currency", currency: "MZN" });
          const percent = Number(categorySum / expensiveTotal * 100);
          const percentFormatted = `${percent.toFixed(0)}%`

          totalByCategory.push({
            name: category.name,
            total: categorySum,
            totalformatted: total,
            percent: percent,
            percentFormatted: percentFormatted,
            color: category.color
          })
        }
      })
      console.log(totalByCategory)
      setTotalByCategories(totalByCategory)
    }
    loadData()
  }, [])

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Content>
        <ChartContainer>
          <VictoryPie
            data={totalByCategories}
            colorScale={totalByCategories.map(category => category.color)}
            labelRadius={50}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: "bold",
                fill: colors.shape
              }
            }}
            x="percentFormatted"
            y="total"
          />
        </ChartContainer>
        {totalByCategories.map((categories, index) => {
          return <HistoryCard key={index} amount={categories.totalformatted} title={categories.name} color={categories.color} />
        })}
      </Content>

    </Container>
  )
}

export default Resume