import * as T from "superstruct";

const EventsManifest = T.array(T.string());

const ComponentsManifest  = T.record(T.string(), T.instance(T.Struct));

const ParamsManifest = T.record(T.string(), T.instance(T.Struct));

const ModuleManifest = T.object({
	events: EventsManifest,
	components: ComponentsManifest,
	params: ParamsManifest
});

/**
 * Фабрика, создающая типы для модулей, с помощью конфига
 * 
 * @param {T.Infer<typeof _ModuleManifest>} moduleManifest [description]
 * @returns {{}}
 */
const ModuleYTypeFabric = function(
	eventsManifest: T.Infer<typeof EventsManifest>,
	componentsManifest: T.Infer<typeof ComponentsManifest>
) {
	T.assert(eventsManifest, EventsManifest);
	T.assert(componentsManifest, ComponentsManifest);

	let eventsSchema = {};
	eventsManifest.forEach((e) => {
		eventsSchema[e] = T.func();
	});

	let componentsSchema = {};
	componentsManifest as object;
	Object.keys(componentsManifest).forEach(k => {
		componentsSchema[k] = componentsManifest[k];
	});

}
