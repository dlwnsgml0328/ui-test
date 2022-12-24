import type { NextPage } from 'next';

import Button from '@eazelui/system.components.button';

const Home: NextPage = () => {
  return (
    <div>
      <Button onPress={() => alert('wow')}>Click me</Button>
    </div>
  );
};

export default Home;
