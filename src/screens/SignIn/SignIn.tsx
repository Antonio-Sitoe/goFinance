import { RFValue } from 'react-native-responsive-fontsize';
import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/Logo.svg'
import { SignInSocialButton } from '../../components/SignInSocialButton/SignInSocialButton';
import useAuth from '../../hooks/useAuth';
import { Platform } from 'react-native';

import {
  Container,
  Header,
  Title,
  TitleWrapper,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles';


export function SignIn() {
  const { SignInWithGoogle } = useAuth()

  return <Container>
    <Header>
      <TitleWrapper>
        <LogoSvg
          width={RFValue(120)}
          height={RFValue(68)}
        />
        <Title>Controle suas {'\n'}
          finanças de forma{'\n'}
          muito simples</Title>
        <SignInTitle>Faça seu login com{'\n'}
          uma das contas abaixo</SignInTitle>
      </TitleWrapper>
    </Header>

    <Footer>
      <FooterWrapper >
        <SignInSocialButton onPress={async () => await SignInWithGoogle()} svg={GoogleSvg} title="Entrar com o Google" />
        {Platform.OS === 'ios' && <SignInSocialButton svg={AppleSvg} title="Entrar com Apple" />}
      </FooterWrapper>

    </Footer>

  </Container>

}