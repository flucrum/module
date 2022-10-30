define(["require", "exports", "superstruct"], function (require, exports, T) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const _ModuleManifest = T.object({
        events: T.array(T.string()),
        components: T.object(),
        params: T.object(),
    });
    const ModuleYTypeFabric = function (moduleManifest) {
        T.assert(moduleManifest, _ModuleManifest);
        let eventsSchema = {};
        moduleManifest.events.forEach((e) => {
            eventsSchema[e] = T.func();
        });
    };
});
//# sourceMappingURL=module.js.map