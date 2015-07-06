import gui from 'nw.gui'
import React  from 'react'
import Main from '../views/Main.jsx'

class Bootstrap {

    constructor() {
        this.win = gui.Window.get()
    }

    initialize() {

        let menuBar = new gui.Menu({type:"menubar"})
        menuBar.createMacBuiltin("NW.js Demo")
        this.win.menu = menuBar

        let developMenu = new gui.Menu()
        let developToggleitem = new gui.MenuItem({
            label: 'Toggle Dev Tools',
            click: function() {
                if (this.win.isDevToolsOpen())
                    this.win.closeDevTools()
                else
                    this.win.showDevTools()
            }
        })

        developMenu.append(developToggleitem)
        this.win.menu.append(new gui.MenuItem({
            label: 'Develop',
            submenu: developMenu
        }))

        this.win.on("loaded", () => {

            React.render(<Main />, document.body)
            this.win.focus()

        })

    }

}

export default Bootstrap