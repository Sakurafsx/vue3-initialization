interface Watcher<T> {
  on: <k extends string & keyof T>(eventname: `${k}Changed`, callback: (oldValue: T[k], newValue: T[k]) => void) => void
}
