/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.first()
  const second = texts.get(1)
  const last = texts.last()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: last.key,
    focusOffset: 3
  })

  change
    .select(range)
    .delete()

  assert.deepEqual(
    next.selection.toJS(),
    {
      anchorKey: second.key,
      anchorOffset: 0,
      focusKey: second.key,
      focusOffset: 0,
      isBackward: false,
      isFocused: false,
      marks: null
    }
  )
}

export const input = (
  <state>
    <document>
      <x-image></x-image>
      <x-paragraph>one</x-paragraph>
      <x-paragraph>two</x-paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-paragraph></x-paragraph>
    </document>
  </state>
)
