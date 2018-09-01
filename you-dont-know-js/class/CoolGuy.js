class CoolGuy {
    constructor(trick) {
        this.specialTrick = trick;
    }

    // specialTrick = 'nothing';

    // CoolGuy(trick) {
    //     this.specialTrick = trick;
    // }

    showOff() {
        console.log('이게 내 장기랍니다:', this.specialTrick);
    }
}

Joe = new CoolGuy('카드 마술');
Joe.showOff();