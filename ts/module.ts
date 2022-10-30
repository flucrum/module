import * as T from "superstruct";

const _ModuleManifest = T.object({
  events: T.array(T.string()),
  components: T.object(),
  params: T.object(),
});

const ModuleYTypeFabric = function(moduleManifest: T.Infer<typeof _ModuleManifest>) 
{
	T.assert(moduleManifest, _ModuleManifest);
	let eventsSchema = {};
	moduleManifest.events.forEach((e) => {
		eventsSchema[e] = T.func();
	});
	
}
