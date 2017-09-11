/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (state) {
  return state
    .change()
    .removeNodeByKey('a')
    .state
    .change()
    .undo()
    .state
}

export const input = (
  <state>
    <document>
      <paragraph key="a">
        one
      </paragraph>
    </document>
  </state>
)

export const output = input
