/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.setData({ thing: 'value' })
}

export const input = (
  <state>
    <document>
      <paragraph>
        word
      </paragraph>
      <paragraph>
        another
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state data={{ thing: 'value' }}>
    <document>
      <paragraph>
        word
      </paragraph>
      <paragraph>
        another
      </paragraph>
    </document>
  </state>
)
