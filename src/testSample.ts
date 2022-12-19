import { Selector } from "testcafe"

fixture('sample fixture')
    .page `https://devexpress.github.io/testcafe/example/`

test('testcafe sample test', async t => {
  await t.takeScreenshot() //fails with odd error on node 18.2.1, works on node 14.17.6
  await t.expect(Selector('h1').withText('Exampla').exists).ok() //stalls if taking screenshot on failure is enabled on node 18.2.1, works as expected on node 14.17.6
})
