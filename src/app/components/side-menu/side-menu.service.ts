import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class SideMenuService {
    private side_menu_isActive = signal<boolean>(false)
    getSideMenuStatus() {
        return this.side_menu_isActive()
    }
    setSideMenuStatus() {
        this.side_menu_isActive() === false ? this.side_menu_isActive.set(true) : this.side_menu_isActive.set(false)
        console.log(this.side_menu_isActive())
    }
}