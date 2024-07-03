/** JQuery-style querySelector. */
const $ = (query: string) => document.querySelector(query) as HTMLElement | null

/** JQuery-style querySelectorAll. */
const $a = (query: string) => document.querySelectorAll(query) as NodeListOf<HTMLElement>

/** XPath selector. */
const $x = (xpath: string) =>
  document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue as HTMLElement | null

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'Enter':
      if (e.metaKey) {
        $('[aria-label="Send message"]')?.dispatchEvent(new MouseEvent('mousedown'))
      }
      break
  }
})
