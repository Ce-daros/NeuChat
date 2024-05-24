function onWindowClose() {
	async () => {
		// 循环遍历所有子进程 ID
		for (const id of await Neutralino.os.getSpawnedProcesses()) {
			// 使用 'exit' action 关闭子进程
			await Neutralino.os.updateSpawnedProcess(id, "exit");
		}
	};
	Neutralino.app.exit();
}

Neutralino.init();

Neutralino.events.on("windowClose", onWindowClose);

Neutralino.events.on("spawnedProcess", (evt) => {
	// 处理子进程事件，例如标准输出、标准错误和退出
	switch (evt.detail.action) {
		case "stdOut":
			console.log(evt.detail.data);
			break;
		case "stdErr":
			console.error(evt.detail.data);
			break;
		case "exit":
			console.log(
				`Process ${evt.detail.id} terminated with exit code: ${evt.detail.data}`
			);
			break;
	}
});

function changeSettingPanel() {
	var a = document.querySelector("body > div.line-3");

	if (a) {
		a.classList.toggle("panel-out");
		
		
	}
}
