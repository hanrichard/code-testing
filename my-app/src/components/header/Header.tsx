import { Link } from 'react-router-dom';
import * as Styles from './Header.styles';

export const Header = () => {
  return <Styles.Container data-testid="header">
    <Styles.ContainerInner>
      <Styles.Logo to='/'><b>DEMO Streaming</b></Styles.Logo>
      <nav>
        <Link to='/'>Log in</Link>
        <Styles.ButtonLink to='/'>Start your free trail</Styles.ButtonLink>
      </nav>
    </Styles.ContainerInner>
  </Styles.Container>
};
