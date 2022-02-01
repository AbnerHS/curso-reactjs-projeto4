import { Navbar } from '.';
import links from './mock';
export default {
  title: 'Navbar',
  component: Navbar,
  args: {
    links: links,
  },
  argTypes: {
    links: '',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Navbar {...args} />
    </div>
  );
};
