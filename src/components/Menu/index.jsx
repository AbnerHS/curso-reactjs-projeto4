import P from 'prop-types';
import { Navbar } from '../Navbar';
import { LogoLink } from '../LogoLink';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <Navbar links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...Navbar.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
