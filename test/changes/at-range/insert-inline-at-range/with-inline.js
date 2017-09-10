/** @jsx h */

import h from '../../../helpers/h'

import { Inline } from '../../../../../..'

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
    .insertInlineAtRange(range, Inline.create({
      type: 'image',
      isVoid: true
    }))
}

export const input = (
  <state>
    <document>
      <x-paragraph>word</x-paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <x-paragraph>
        <x-image></x-image>word
      </x-paragraph>
    </document>
  </state>
)
