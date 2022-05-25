import { BitCannaGlobal } from '../src/proto';

it('messages', async () => {
  expect(
    BitCannaGlobal.bcna.bcna.MessageComposer.withTypeUrl.createBitcannaid({
      address: 'osmo1f4vxvvvvvvvvvv3luuddddddddddcccccccccc',
      bcnaid: 'myid',
      creator: 'creator'
    })
  ).toMatchSnapshot();
});

it('queries', async () => {
  const client = new BitCannaGlobal.bcna.bcna.QueryClient({
    restEndpoint: 'https://bitcanna'
  });
  client.request = async (url) => {
    // modify for testing
    return url;
  };
  const res = await client.bitcannaid({ id: 'someid' });
  console.log(res);
});
