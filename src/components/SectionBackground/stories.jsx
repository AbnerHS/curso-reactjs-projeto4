import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita doloribus dolore illo labore
          accusamus magni minima, aliquid facere. Quos pariatur facere doloribus amet nostrum dolor incidunt ipsum est
          veritatis?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
