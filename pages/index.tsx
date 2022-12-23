import type { NextPage } from 'next';

import { Button } from '@nextui-org/react';

const Home: NextPage = () => {
  const Component = () => <Button>Click me</Button>;
  return <Component />;
};

export default Home;
