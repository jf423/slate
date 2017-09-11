/** @jsx h */

import { h } from 'slate-core-test-helpers'

export const schema = {}

export const state = (
  <state>
    <document>
      <paragraph>
        word
      </paragraph>
    </document>
  </state>
)

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
  <div style="position:relative;">
    <span>
      <span>word</span>
    </span>
  </div>
</div>
`.trim()
