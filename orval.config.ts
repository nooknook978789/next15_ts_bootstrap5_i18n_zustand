// orval.config.ts
export default {
  memberRedemption: {
    input: './src/services/swagger/member.json',
    output: {
      target: './src/services/member/index.ts',
      schemas: './src/services/member/model',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/services/fetcher.ts',
          name: 'memberFetcher',
        },
      },
    },
  },
}
