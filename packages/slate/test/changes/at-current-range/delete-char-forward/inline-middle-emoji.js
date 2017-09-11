/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.deleteCharForward()
}

export const input = (
  <state>
    <document>
      <paragraph>
        <link>wo<cursor />📛rd</link>
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <link>wo<cursor />rd</link>
      </paragraph>
    </document>
  </state>
)
