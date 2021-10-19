import * as vscode from 'vscode';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {
	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider('no-conflict', sidebarProvider)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('no-conflict.refresh', async () => {
			await vscode.commands.executeCommand('workbench.action.closeSidebar');
			await vscode.commands.executeCommand('workbench.view.extension.no-conflict');
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }
