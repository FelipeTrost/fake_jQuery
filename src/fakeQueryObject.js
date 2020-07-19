class FakeQueryObject {
    constructor(element) {
        if (!element instanceof HTMLElement)
            throw new TypeError("Tried to build FakeQueryObject without an HTMLElement")

        this.element = element
    }

    css(...styles) {
        if (typeof styles[0] === 'string') {
            this.element.style[styles[0]] = styles[1];
        } else if (typeof styles[0] === 'object') {
            Object.entries(styles[0]).forEach(([attribute, value]) => {
                this.element.style[attribute] = value;
            });
        }
    }

    on(event, callback) {
        this.element.addEventListener(event, callback);
    }

    html(content) {
        if (content) {
            this.element.innerHTML = content
        } else {
            return this.element.innerHTML
        }
    }

    text(content) {
        if (content) {
            this.element.textContent = content
        } else {
            return this.element.textContent
        }
    }

    toggleClass(className) {
        if (this.element.classList.contains(className)) {
            this.element.classList.remove(className)
        } else {
            this.element.classList.add(className)
        }
    }

    remove() {
        this.element.remove()
    }
}