export function renderBlocksToHtml(blocks: any[]): string {
     return blocks
          .sort((a, b) => a.order - b.order)
          .map((block) => {
               switch (block.type) {
                    case 'text':
                         return `<div>${block.content.html ?? ''}</div>`

                    case 'image':
                         return `<img src="${block.content.url ?? ''}" alt="" style="width:100%;border-radius:16px;" />`

                    case 'quote':
                         return `<blockquote style="padding:16px;border-left:4px solid #ccc;font-style:italic;">
                              ${block.content.text ?? ''}
                          </blockquote>`

                    default:
                         return ''
               }
          })
          .join('\n')
}
