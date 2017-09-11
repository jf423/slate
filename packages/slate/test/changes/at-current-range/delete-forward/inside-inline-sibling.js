/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.deleteForward()
}

export const input = (
  <state>
    <document>
      <paragraph>
        one<link><cursor />a</link>two
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>one<cursor />two</paragraph>
    </document>
  </state>
)
