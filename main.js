const vscode = require("vscode");
const { exec } = require("child_process");

exports.activate = (context) => {
  context.subscriptions.push(
    vscode.commands.registerCommand("ssen.touchbar.run", () => {
      vscode.commands.executeCommand("workbench.action.debug.run");
    }),
    vscode.commands.registerCommand("ssen.touchbar.debug", () => {
      vscode.commands.executeCommand("workbench.action.debug.start");
    })
  );
};

exports.deactivate = () => {};
