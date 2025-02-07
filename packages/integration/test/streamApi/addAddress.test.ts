import { MoralisStreams } from '@moralisweb3/streams';
import { cleanStreamsApi, setupStreamApi } from './setup';

describe('addAddress', () => {
  let StreamApi: MoralisStreams;

  beforeAll(() => {
    StreamApi = setupStreamApi();
  });

  afterAll(() => {
    cleanStreamsApi();
  });

  describe('evm', () => {
    it('should create an address succesfully ', async () => {
      const result = await StreamApi.addAddress({
        network: 'evm',
        address: '0x295522b61890c3672d12efbff4358a6411ce996f',
        id: 'VALID_RESPONSE',
      });

      expect(result).toBeDefined();
      expect(result.toJSON().address).toEqual('0x295522b61890c3672d12efbff4358a6411ce996f');
      expect(result.result.streamId).toEqual('VALID_RESPONSE');
    });

    it('should throw a 400 Error on invalid address ', async () => {
      expect(
        StreamApi.addAddress({
          network: 'evm',
          address: 'some-address',
          id: 'INVALID_ADDRESS',
        }),
      ).rejects.toThrowError('[C0006] Request failed, Bad Request(400): Invalid Address: some-address');
    });

    it('should throw a 404 Error on invalid streamId ', async () => {
      expect(
        StreamApi.addAddress({
          network: 'evm',
          address: '0x295522b61890c3672d12efbff4358a6411ce996f',
          id: 'STREAM_NOT_FOUND',
        }),
      ).rejects.toThrowError('[C0006] Request failed, Not Found(404): Stream not found');
    });
  });
});
