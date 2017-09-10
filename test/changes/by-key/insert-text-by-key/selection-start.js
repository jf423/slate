/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const firstText = texts.first()

  const nextSelection = selection.merge({
    anchorKey: firstText.key,
    focusKey: firstText.key,
    anchorOffset: 2,
    focusOffset: 4
  })

  change
    .select(nextSelection)
    .insertTextByKey(firstText.key, 2, 'XX')

  assert.deepEqual(
    next.selection.toJS(),
    nextSelection.merge({
      anchorOffset: 4,
      focusOffset: 6
    }).toJS()
  )
}

export const input = (
  <state>
    <document>
      <x-paragraph>hello</x-paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-paragraph>heXXllo</x-paragraph>
    </document>
  </state>
)
