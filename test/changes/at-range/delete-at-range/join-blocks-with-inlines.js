/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.get(0)
  const second = texts.get(1)
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: first.text.length,
    focusKey: second.key,
    focusOffset: 0
  })

  return state
    .change()
    .deleteAtRange(range)
}

export const input = (
  <state>
    <document>
      <x-paragraph>one</x-paragraph>
      <x-paragraph>two
        <x-link>three</x-link>four
      </x-paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-paragraph>onetwo
        <x-link>three</x-link>four
      </x-paragraph>
    </document>
  </state>
)
