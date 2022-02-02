import { Menu } from '.';

import linksMock from '../Navbar/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: 'Target',
      imgSrc: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
