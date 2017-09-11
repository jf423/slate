/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (state) {
  return state
    .change()
    .delete()
    .state
    .change()
    .undo()
    .state
}

export const input = (
  <state>
    <document>
      <paragraph>
        o<anchor />ne
      </paragraph>
      <paragraph>
        tw<focus />o
      </paragraph>
    </document>
  </state>
)

export const output = input
