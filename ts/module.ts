
class Module<EventName extends string, Components extends {}, Params extends {}> {
  public events: Record<EventName, (Object) => void>;

  constructor(
    events: Record<EventName, (Object) => void>,
    components: Components,
    params: Params
  ) {}
}

type ModuleConfig<M extends typeof Module> = {
  events: Record<M["events"], (Object) => void>
}
