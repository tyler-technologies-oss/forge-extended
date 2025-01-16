export function autoShadowRoot(element) {
    for (const template of element.querySelectorAll('template[data-shadowroot]')) {
        if (template.parentElement === element) {
            element
                .attachShadow({
                mode: template.getAttribute('data-shadowroot') === 'closed' ? 'closed' : 'open'
            })
                .append(template.content.cloneNode(true));
        }
    }
}
//# sourceMappingURL=auto-shadow-root.js.map