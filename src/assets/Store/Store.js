let store = {
    update: () => {},

    isR: false,
    data: false,

    dispatch(action) {
        switch (action.type) {
            case 'UPDATE':
                this.update();
                break

            case 'GET-ISR':
                //для показа иконки имени
                return this.isR;

            case 'REVERSE':
                debugger
                //меняет массив противоположно
                let y = this.data[0].reverse();
                this.data[0] = y
                this.isR = !this.isR;
                this.update();
                break

            case 'GET-CARSTABLE':
                return this.data[0]

            case 'GET-TOPTABLE':
                console.log(this.data[1])
                let list = this.data[1]
                try{
                    list.splice(0, 1, 'Марка и модель')
                }catch (e){}
                return list;

            case 'GET-INFO':
                const url = 'https://city-mobil.ru/api/cars'

                async function getCarsApi() {
                    try {
                        let response = await fetch(url);
                        let responseJson = await response.json();
                        responseJson = Object.values(responseJson);
                        return responseJson;
                    } catch(error) {
                        console.error(error);
                    }
                }

                getCarsApi().then((data) => {
                    this.data = data
                    debugger
                })
                this.update();
                break

            default:
                console.warn('ERROR get action.type');
                break;
        }
    },

    observer(subscriber) {
        this.update = subscriber;
        this.update();
    }
};

export default store