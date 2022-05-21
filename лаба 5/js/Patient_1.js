class Patient {
  constructor(f, i, o, d, s, sh) {
    this.F = f;
    this.I = i;
    this.O = o;
    this.D = new Date(d);
    this.S = s;
    this.SH = sh;
  }
  setById() {
    document.getElementById("F").textContent = this.F;
    document.getElementById("I").textContent = this.I;
    document.getElementById("O").textContent = this.O;
    document.getElementById("D").textContent = this.D.getFullYear();
    document.getElementById("S").textContent = this.S;
    document.getElementById("SH").textContent = this.SH;
  }
}

let Ivanov = new Patient("Иванов", "Иван", "Иванович", new Date(1980, 6, 1), "м", "назначено");
Ivanov.setById();

let Sidorov = new Patient("Сидоров", "Сидор", "Помидор", new Date(2022, 1, 3), "м", "исполнено");
Sidorov.setById();

let Mikhailov = new Patient("Михайлов", "Стасик", "Романович", new Date(1999, 9, 10), "м", "медотвод");
Mikhailov.setById();
