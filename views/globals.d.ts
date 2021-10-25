import * as _vscode from "vscode";

_vscode;

declare global {
	const tsVscode: {
		postMessage: ({ type: string, value: any }) => void;
		/**
		 * Get the persistent state stored for this webview.
		 *
		 * @return The current state or `undefined` if no state has been set.
		 */
		getState(): StateType | undefined;

		/**
		 * Set the persistent state stored for this webview.
		 *
		 * @param newState New persisted state. This must be a JSON serializable object. Can be retrieved
		 * using {@link getState}.
		 *
		 * @return The new state.
		 */
		setState<T extends StateType | undefined>(newState: T): T;
	};
}