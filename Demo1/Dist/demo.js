class Purpil {
    constructor(code, name, age, gender, address, love) {
        this.code = code;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.love = love;
    }
}
class StudentService {
    constructor() {
        this.data = new Array();
        // gán thuộc tính data từ phương thức setData trả về mảng đối tượng
        this.data = this.setData();
    }
    // phương thức trả về mảng các đối tượng có sẵn
    setData() {
        let std1 = {
            code: 'B9220',
            name: 'Le Khac Thien',
            age: 18,
            gender: 'Nam',
            address: 'Chuong My',
            love: false
        };
        let std2 = {
            code: "B9175",
            name: "Hwoang Mgoc Smon",
            age: 18,
            gender: "Nam",
            address: "Ha Noi",
            love: false,
        };
        let std3 = {
            code: "B9170",
            name: "Ngmuyen Thmi Kim Yemn",
            age: 18,
            gender: "Nu",
            address: "Soc Son",
            love: false,
        };
        let data = new Array(std1, std2, std3);
        return data;
    }
    showListTotable(table_id = 'tbody-list') {
        let tbody = document.getElementById(table_id);
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
