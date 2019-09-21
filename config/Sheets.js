import Sheetapi from './api'

async function Sheet() {
    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    const access_token = userOauth.data.access_token
    return access_token

}

async function List1(access_token, value) {

    try {

        this.list = await Sheetapi.getSheet1(access_token, value)

        for (let i = 0; i < this.list.length; i++) {
            this.data = await {
                
            }

        }
    } catch (err) {
        console.log(err);
    }
    return this.data

}

async function List2(access_token, value) {

    if (value == 'sheets!D2:P2') {
        try {
            this.list = await Sheetapi.getSheet2(access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                this.data = await {
                    name: this.list[i][0],
                    อายุ60ถึง69ปี: parseInt(this.list[i][1].replace(",", "")),
                    อายุ60ถึง69ปีร้อยละ: parseFloat(this.list[i][2].replace(",", "")),
                    อายุ70ถึง79ปี: parseInt(this.list[i][3].replace(",", "")),
                    อายุ70ถึง79ปีร้อยละ: parseFloat(this.list[i][4].replace(",", "")),
                    อายุ80ถึง89ปี: parseInt(this.list[i][5].replace(",", "")),
                    อายุ80ถึง89ปีร้อยละ: parseFloat(this.list[i][6].replace(",", "")),
                    อายุมากกว่าหรือเท่ากับ90ปี: parseInt(this.list[i][7].replace(",", "")),
                    อายุมากกว่าหรือเท่ากับ90ปีร้อยละ: parseFloat(this.list[i][8].replace(",", "")),
                    รวม: parseInt(this.list[i][9].replace(",", "")),
                    ชาย: parseInt(this.list[i][10].replace(",", "")),
                    หญิง: parseInt(this.list[i][11].replace(",", "")),
                    รวมชญ: parseInt(this.list[i][12].replace(",", "")),
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    

    if (value == '!N2:P2') {
        try {

            this.list = await Sheetapi.getSheet2(access_token, value)


            for (let i = 0; i < this.list.length; i++) {
                this.data = await {
                    ชาย: parseInt(this.list[i][0].replace(",", "")),
                    หญิง: parseInt(this.list[i][1].replace(",", "")),
                    รวม: parseInt(this.list[i][2].replace(",", "")),

                }
            }
        } catch (err) {
            console.log(err);
        }

    }

    
    return this.data

}

async function List3(access_token, value) {

    try {

        this.list = await Sheetapi.getSheet3(access_token, value)

        for (let i = 0; i < this.list.length; i++) {
            this.data = await {
                name: this.list[i][0],
                อายุ60ถึง69ปี: parseInt(this.list[i][1].replace(",", "")),
                อายุ60ถึง69ปีร้อยละ: parseFloat(this.list[i][2].replace(",", "")),
                อายุ70ถึง79ปี: parseInt(this.list[i][3].replace(",", "")),
                อายุ70ถึง79ปีร้อยละ: parseFloat(this.list[i][4].replace(",", "")),
                อายุ80ถึง89ปี: parseInt(this.list[i][5].replace(",", "")),
                อายุ80ถึง89ปีร้อยละ: parseFloat(this.list[i][6].replace(",", "")),
                อายุมากกว่าหรือเท่ากับ90ปี: parseInt(this.list[i][7].replace(",", "")),
                อายุมากกว่าหรือเท่ากับ90ปีร้อยละ: parseFloat(this.list[i][8].replace(",", "")),
                รวม: parseInt(this.list[i][9].replace(",", "")),
                ชาย: parseInt(this.list[i][10].replace(",", "")),
                หญิง: parseInt(this.list[i][11].replace(",", "")),
                รวมชญ: parseInt(this.list[i][12].replace(",", "")),
            }

        }
    } catch (err) {
        console.log(err);
    }
    return this.data

}


export default {
    Sheet,
    List1,
    List2,
    List3

}