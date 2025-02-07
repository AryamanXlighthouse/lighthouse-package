import lighthouse from '..'

describe('dealStatus', () => {
  test('dealStatus', async () => {
    const response = (
      await lighthouse.dealStatus(
        'QmaiauHSgTDMy2NtLbsygL3iKmLXBqHf39SBA1nAQFSSey'
      )
    ).data

    expect(typeof response[0]['miner']).toBe('string')
  }, 20000)

  test('dealStatus null case', async () => {
    try {
      const response = await lighthouse.dealStatus('null')
      expect(response).toBe(null)
    } catch (error: any) {
      expect(typeof error.message).toBe('string')
    }
  }, 20000)
})
