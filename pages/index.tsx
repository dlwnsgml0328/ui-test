import type { NextPage } from 'next';

import Button from '@eazelui/system.components.button';

const Home: NextPage = () => {
  const Component = () => <Button onPress={() => alert('wow')}>Click me</Button>;
  return <Component />;
};

export default Home;
