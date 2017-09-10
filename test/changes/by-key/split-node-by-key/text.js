/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const { selection } = state

  const range = selection.merge({
    anchorKey: 'b',
    anchorOffset: 4,
    focusKey: 'b',
    focusOffset: 5
  })

  change
    .select(range)
    .splitNodeByKey('b', 3, { normalize: false })

  // The second text
  const second = next.document.getTexts().last()

  assert.deepEqual(
    next.selection.toJS(),
    range.merge({
      anchorKey: second.key,
      anchorOffset: 1,
      focusKey: second.key,
      focusOffset: 2
    }).toJS()
  )
}

export const input = (
  <state>
    <document>
      <x-paragraph>onetwo</x-paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-paragraph>onetwo</x-paragraph>
    </document>
  </state>
)
