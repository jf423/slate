/** @jsx h */

import h from '../../../helpers/h'

import path from 'path'
import readMetadata from 'read-metadata'
import { Raw } from '../../../../../..'

export default function (change) {
  const file = path.resolve(__dirname, 'fragment.yaml')
  const raw = readMetadata.sync(file)
  const fragment = Raw.deserialize(raw, { terse: true }).document

  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: first.text.length,
    focusKey: first.key,
    focusOffset: first.text.length
  })

  return state
    .change()
    .insertFragmentAtRange(range, fragment)
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
      <x-paragraph>wordfragment</x-paragraph>
    </document>
  </state>
)
