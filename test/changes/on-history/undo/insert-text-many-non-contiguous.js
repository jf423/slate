/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.get(0)
  const second = texts.get(1)

  change
    .collapseToStartOf(first)
    .insertText('text')

    .change()
    .collapseToStartOf(second)
    .insertText('text')
    .state

    .change()
    .undo()
    .state
}

export const input = (
  <state>
    <document>
      <x-paragraph>one</x-paragraph>
      <x-paragraph>two</x-paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-paragraph>textone</x-paragraph>
      <x-paragraph>two</x-paragraph>
    </document>
  </state>
)
