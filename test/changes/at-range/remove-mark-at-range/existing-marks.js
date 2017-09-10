/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 2
  })

  return state
    .change()
    .removeMarkAtRange(range, 'bold')
}

export const input = (
  <state>
    <document>
      <x-paragraph>
        <x-b>
          <x-i>word</x-i>
        </x-b>
      </x-paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-paragraph>
        <x-i>wo</x-i>
        <x-b>
          <x-i>rd</x-i>
        </x-b>
      </x-paragraph>
    </document>
  </state>
)
