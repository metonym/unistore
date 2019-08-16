// T - Wrapped component props
// S - Wrapped component state
// K - Store state
// I - Injected props to wrapped component

declare module "@metonym/unistore/preact" {
	import * as Preact from "preact";
	import { ActionCreator, StateMapper, Store } from "@metonym/unistore";

	export function connect<T, S, K, I>(
		mapStateToProps: string | Array<string> | StateMapper<T, K, I>,
		actions?: ActionCreator<K> | object
	): (Child: Preact.ComponentConstructor<T & I, S> | Preact.AnyComponent<T & I, S>) => Preact.ComponentConstructor<T | T & I, S>;


	export interface ProviderProps<T> {
		store: Store<T>;
	}

	export class Provider<T> extends Preact.Component<ProviderProps<T>> {
		render(props: ProviderProps<T>): JSX.Element;
	}
}
