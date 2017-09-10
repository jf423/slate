/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 3,
    focusKey: first.key,
    focusOffset: 3
  })

  return state
    .change()
    .insertTextAtRange(range, 'a')
}

export const input = (
  <state>
    <document>
      <x-paragraph>w
        <x-b>or</x-b>d
      </x-paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-paragraph>w
        <x-b>ora</x-b>d
      </x-paragraph>
    </document>
  </state>
)
