import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render small size', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render medium size', () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  it('should render big size', () => {
    renderTheme(<Heading size="big">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should render huge size', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
});
