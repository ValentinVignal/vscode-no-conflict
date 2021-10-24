import * as _vscode from "vscode";

_vscode;

declare global {
	const tsVscode: {
		postMessage: ({ type: string, value: any }) => void;
	};
}