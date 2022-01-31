import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Rem blanditiis quidem perspiciatis nulla voluptate id
    accusantium placeat obcaecati amet quis omnis quisquam,
    ipsam eum qui eveniet deleniti perferendis voluptatum ducimus.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '64rem', padding: '3rem' }}>
      <TextComponent {...args} />
    </div>
  );
};
