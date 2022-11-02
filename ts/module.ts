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
const ModuleYTypeFabric = function(moduleManifest: T.Infer<typeof ModuleManifest>) 
{
	T.assert(moduleManifest, ModuleManifest);
	let eventsSchema = {};
	moduleManifest.events.forEach((e) => {
		eventsSchema[e] = T.func();
	});
	

}
