/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 1,
    focusKey: first.key,
    focusOffset: 1
  })

  return state
    .change()
    .insertBlockAtRange(range, 'image')
}

export const input = (
  <state>
    <document>
      <x-video></x-video>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-video></x-video>
      <x-image></x-image>
    </document>
  </state>
)
