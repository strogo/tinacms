import { SchemaNodePlugin } from '../..'

/**
 * list_item
 */
export const list_item = {
  content: 'paragraph block*',
  defining: true,
  parseDOM: [{ tag: 'li' }],
  toDOM() {
    return ['li', 0]
  },
}

export default {
  __type: 'wysiwyg:schema:node',
  name: 'list_item',
  node: list_item,
} as SchemaNodePlugin