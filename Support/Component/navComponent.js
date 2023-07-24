class navComponent {

    get allNavElement() {
        return $$(`#zak-primary-menu`)
    }
    get homeNavTab() {
        return $$("#zak-primary-menu [id*='menu-item-']")[0]
    }

    get aboutNavTab() {
        return $$(`#zak-primary-menu [id*='menu-item-']`)[1]
    }

    get shopNavTab() {
        return  $$('#zak-primary-menu li')[2]
      }

    get blogNavTab() {
        return $$(`#zak-primary-menu [id*='menu-item-']`)[3]
    }

    get contactNavTab() {
        return $(`#zak-primary-menu [id*='menu-item-']`)[4]
    }

    get myAccountNavTab() {
        return $(`#zak-primary-menu [id*='menu-item-']`)[5]
    }

    get selectedProductName() {
        return $(`[data-title="Product"]`)
    }

    
      
    async  getRandomNumber(max) {
        return Math.floor(Math.random() * max);
      }
}
export default new navComponent()