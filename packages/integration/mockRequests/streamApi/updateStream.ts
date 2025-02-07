import { rest } from 'msw';
import { STREAM_API_ROOT, MOCK_API_KEY } from '../config';

export const mockUpdateStreamOutput: Record<string, unknown> = {
  webhookUrl: 'https://webhook.site/c76c6361-960d-4600-8498-9fecba8abb5f',
  description: 'string',
  tag: 'string',
  tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  topic0: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  filter: {},
  abi: {},
  address: '0x992eCcC191D6F74E8Be187ed6B6AC196b08314f7',
  chainIds: ['0x3'],
  type: 'wallet',
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
};

export const mockUpdateStream = rest.post(`${STREAM_API_ROOT}/streams/evm/:id`, (req, res, ctx) => {
  const id = req.params.id as string;
  const apiKey = req.headers.get('x-api-key');

  if (apiKey !== MOCK_API_KEY) {
    return res(ctx.status(401));
  }

  const value = mockUpdateStreamOutput;

  if (value.id !== id) {
    return res(ctx.status(404));
  }

  return res(ctx.status(200), ctx.json(value));
});
