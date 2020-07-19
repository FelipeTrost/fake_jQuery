class FakeQueryObjectCollection {
    constructor(elements = []) {
        this.elements = elements
    }

    each(forEachOne) {
        this.elements.forEach((element, index) => {
            const forEachOne_bound = forEachOne.bind(element)
            forEachOne_bound(index)
        })
    }

    css(...styles) {
        // Not an arrow function, because you can't bind context to them
        this.each(function () {
            this.css(...styles);
        })
    }

    on(event, callback) {
        this.each(function () {
            this.on(event, callback);
        })
    }

    html(content) {
        if (!content)
            throw new Error("Can't get html values of multiple elements at the same time")
        this.each(function () {
            this.html(content);
        })
    }

    text(content) {
        if (!content)
            throw new Error("Can't get text values of multiple elements at the same time")

        this.each(function () {
            this.text(content);
        })
    }

    toggleClass(className) {
        this.each(function () {
            this.toggleClass(className);
        })
    }

    remove(event, callback) {
        this.each(function () {
            this.remove();
        })
    }

}