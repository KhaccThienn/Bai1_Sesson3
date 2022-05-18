class Purpil {

    code: string;
    name: string;
    age: number;
    gender: string;
    address: string;
    love: boolean;


    constructor(code: string, name: string, age: number, gender: string, address: string, love: boolean) {
        this.code = code;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.love = love;
    }
}
class StudentService {
    protected data: Array<Purpil> = new Array();
    constructor() {
        // gán thuộc tính data từ phương thức setData trả về mảng đối tượng
        this.data = this.setData();
    }
    // phương thức trả về mảng các đối tượng có sẵn
    setData(): Array<Purpil> {
        let std1: Purpil = {
            code: 'B9220',
            name: 'Le Khac Thien',
            age: 18,
            gender: 'Nam',
            address: 'Chuong My',
            love: false
        };
        let std2: Purpil = {
            code: "B9175",
            name: "Hwoang Mgoc Smon",
            age: 18,
            gender: "Nam",
            address: "Ha Noi",
            love: false,
        };
        let std3: Purpil = {
            code: "B9170",
            name: "Ngmuyen Thmi Kim Yemn",
            age: 18,
            gender: "Nu",
            address: "Soc Son",
            love: false,
        };
        let data: Array<Purpil> = new Array(std1, std2, std3);
        return data;
    }
    showListTotable(table_id: string = 'tbody-list'): void {
        let tbody: any = document.getElementById(table_id);
        let _tr = '';
        for (var obj of this.data) {
            _tr += `    
            <tr>
                <th>${obj.code}</th>
                <td>${obj.name}</td>
                <td>${obj.age}</td>
                <td>${obj.gender}</td>
                <td>${obj.address}</td>
                <td>${obj.love}</td>
            </tr>`;
        }
    tbody.innerHTML = _tr;
    }
}
var stdService = new StudentService();
stdService.showListTotable();