import React, { useEffect } from 'react'
import { HistoryCard } from '../../components/HistoryCard'
import { Container, LoadContainer, Header, Title, Content, ChartContainer, MonthSelect, MonthSelectButton, MonthSelectIcon, Month } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { categories } from '../../utils/category';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

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
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [isLoading, setIsLoading] = React.useState(false)
  const { colors } = useTheme()

  function handleChangeDate(action: "next" | 'preview') {
    switch (action) {
      case "next":
        const actualDate = addMonths(selectedDate, 1)
        setSelectedDate(actualDate)
        return actualDate

      case "preview":
        const subMonthsDate = subMonths(selectedDate, 1)
        setSelectedDate(subMonthsDate)
        return actualDate

      default:
        throw new Error("Invalid action")
    }
  }


  async function loadData() {
    setIsLoading(true)
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormated = response ? JSON.parse(response) : [];

    const expensives = responseFormated.filter((expensive: TransactionData) => {
      const expensiveNewDate = new Date(expensive.date);
      return expensive.type === 'negative' &&
        expensiveNewDate.getMonth() === selectedDate.getMonth() &&
        expensiveNewDate.getFullYear() === selectedDate.getFullYear()
    })


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
    setTotalByCategories(totalByCategory)
    setIsLoading(false)
  }


  useFocusEffect(React.useCallback(() => {
    loadData()
  }, [selectedDate]))

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {isLoading ?

        <LoadContainer>
          <ActivityIndicator color={colors.primary} size="large" />
        </LoadContainer>
        :

        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 24,
            paddingBottom: useBottomTabBarHeight(),
          }}
        >

          <MonthSelect>
            <MonthSelectButton onPress={() => handleChangeDate('preview')}>
              <MonthSelectIcon name="chevron-left" />
            </MonthSelectButton>

            <Month>{format(selectedDate, 'MMMM,yyyy', { locale: ptBR })}</Month>

            <MonthSelectButton onPress={() => handleChangeDate('next')}>
              <MonthSelectIcon name="chevron-right" />
            </MonthSelectButton>

          </MonthSelect>
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
      }

    </Container >
  )
}

export default Resume