import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('split-tabs.vertical', async () => {
        const result = await vscode.window.showInputBox({
            prompt: 'How many editor groups would you like to create? (2–100)',
            placeHolder: 'e.g., 3',
            validateInput: (text) => {
                const n = parseInt(text, 10);
                if (isNaN(n) || n < 2 || n > 100) {
                    return 'Please enter a number between 2 and 100.';
                }
                return null;
            }
        });

        if (!result) return; // Cancelled

        const n = parseInt(result, 10);

        try {
            // First file is already open. We'll split (n-1) times to create n groups.
            for (let i = 0; i < n - 1; i++) {
                await vscode.commands.executeCommand('workbench.action.splitEditorRight');
                await vscode.commands.executeCommand('workbench.action.nextEditor');
                await vscode.commands.executeCommand('workbench.action.moveEditorToNextGroup');
            }
            // Return focus to the first group
            await vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');

            vscode.window.showInformationMessage(`✅ Layout with ${n} editor groups created.`);
        } catch (err: any) {
            vscode.window.showErrorMessage(`Error: ${err.message || err}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}