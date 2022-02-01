import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
};

export const TextLogo = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const ImageLogo = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextLogo.args = {
  text: 'LOGO',
  srcImg: '',
  link: 'http://localhost',
};

ImageLogo.args = {
  text: 'LOGO',
  srcImg: 'assets/images/logo.svg',
  link: 'http://localhost',
};
