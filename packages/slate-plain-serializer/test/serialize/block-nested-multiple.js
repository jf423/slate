/** @jsx h */

import { h } from 'slate-core-test-helpers'

export const input = (
  <state>
    <document>
      <quote>
        <paragraph>
          one
        </paragraph>
        <paragraph>
          two
        </paragraph>
      </quote>
      <quote>
        <paragraph>
          three
        </paragraph>
        <paragraph>
          four
        </paragraph>
      </quote>
    </document>
  </state>
)

export const output = `
one
two
three
four
`.trim()
