/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 0
  })

  return state
    .change()
    .insertInlineAtRange(range, {
      type: 'hashtag',
      isVoid: true
    })
}

export const input = (
  <state>
    <document>
      <x-image></x-image>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-image></x-image>
    </document>
  </state>
)
