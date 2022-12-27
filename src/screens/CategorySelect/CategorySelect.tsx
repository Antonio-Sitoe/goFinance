import React from 'react'
import { FlatList } from 'react-native';
import { categories } from '../../utils/category';
import Button from '../../components/Forms/Button/Button'
import {
  Container, Header, Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,

} from './styles'

interface ICategory {
  key: string
  name: string
}

interface CategoryProps {
  category: string;
  setCategory: (category: ICategory) => void
  closeSelectCategory: () => void
}

function CategorySelect({ closeSelectCategory, setCategory, category }: CategoryProps) {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        style={{ flex: 1, width: '100%' }}
        renderItem={({ item }) => <Category>
          <Icon name={item.icon} />
          <Name>{item.name}</Name>
        </Category>}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button title='Selecionar' />
      </Footer>
    </Container>
  )
}

export default CategorySelect