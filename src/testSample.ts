import { Selector } from "testcafe"

fixture('sample fixture')
    .page `https://devexpress.github.io/testcafe/example/`

test('testcafe sample test', async t => {
  await t.expect(Selector('h1').withText('Exampla').exists).ok()
})
