const sidebar = {
    addStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
        /* 侧栏 latest */
        .sidebar {
            box-sizing: border-box;
            position: fixed;
            top: 0;
            left: 0;
            width: 350px;
            background-color: #333;
            color: white;
            height: 100vh;
            padding: 20px;
            transform: translateX(0);
            transition: transform 0.3s;
            z-index: 100;
        }
        .sidebarModel {
            top: 0;
            position: fixed;
            width: 100vw;
            height: 100vh;
            z-index: 1;
            left: 0;
            background: #161616ab;
            display: block;
        }
        .sidebarModelCollapsed {
            display: none;
        }
        .sidebar.collapsed {
            transform: translateX(-100%);
        }
        .sidebar h2 {
            margin: 0;
        }
        .toggle-btn {
            cursor: pointer;
            padding: 10px;
            background-color: #444;
            color: white;
            border: none;
            border-radius: 5px;
            margin: 20px;
        }`;
        document.head.append(style);
    },
    setEvent(id, btnIds) {
        // `<div class="sidebar" id="latest">
        //     <h2>最近打开 <button id="sidebarCollapse" class="toggle-btn">收起</button></h2>
        // </div>`
        const side = document.getElementById(id);
        side.classList.add('sidebar');
        side.classList.add('collapsed');
        const sideModel = document.createElement('div');
        sideModel.classList.add('sidebarModel');
        sideModel.classList.add('sidebarModelCollapsed');
        document.body.append(sideModel);

        new Array(btnIds).flatMap(_ => _).forEach(btnId => {
            const btn = document.getElementById(btnId);
            btn.classList.add('toggle-btn');
            btn.onclick = function () {
                side.classList.toggle('collapsed');
                sideModel.classList.toggle('sidebarModelCollapsed');
            }
        });
    }
};