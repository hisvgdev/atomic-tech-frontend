export const transformTextToHtml = (text: string) => {
     return text
          .replace(/\n/g, '<br/>')
          .replace(/^- (.*)$/gm, '<li>$1</li>')
          .replace(/(<li>.*<\/li>)/gm, '<ul>$1</ul>')
}
