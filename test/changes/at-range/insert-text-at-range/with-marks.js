/** @jsx h */

import h from '../../../helpers/h'

import { Mark } from '../../../../../..'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: first.text.length,
    focusKey: first.key,
    focusOffset: first.text.length
  })

  const marks = Mark.createSet([
    Mark.create({
      type: 'bold'
    })
  ])

  return state
    .change()
    .insertTextAtRange(range, 'a', marks)
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
      <x-paragraph>word
        <x-b>a</x-b>
      </x-paragraph>
    </document>
  </state>
)
