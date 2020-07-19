const $ = (...args) => {
    if (typeof args[0] === 'function' && args.length === 1) {

        document.addEventListener('DOMContentLoaded', args[0]);

    } else if (typeof args[0] === 'string' && args.length === 1) {
        const collection = document.querySelectorAll(args[0]);

        if (collection.length === 1) {
            return new FakeQueryObject(...collection)
        } else {
            return new FakeQueryObjectCollection(Array(...collection).map(el => new FakeQueryObject(el)))
        }

    } else if (args[0] instanceof HTMLElement) {

        return new FakeQueryObject(args[0])

    }
}