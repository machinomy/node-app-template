import Options from '../src/config/Options'
import { Registry } from '../src/Registry'

test('basic', () => {
  const registry = new Registry({} as Options)
  expect(registry.methodA()).toBe('I am methodA')
})
