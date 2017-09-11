/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.setBlock('code')
}

export const input = (
  <state>
    <document>
      <paragraph>
        <cursor />word
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <code>
        <cursor />word
      </code>
    </document>
  </state>
)
