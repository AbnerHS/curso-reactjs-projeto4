import { screen } from '@testing-library/react';
import { GridTwoColumns } from '.';
import { renderTheme } from '../../styles/render-theme';
import { mock } from './mock';

describe('<GridTwoColumns />', () => {
  it('should render grid with background', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid without background', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
