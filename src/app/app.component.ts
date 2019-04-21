import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Crud";
  msg: string = "";

  employees = [
    { name: "Gerardo", position: "Manager", email: "email@mail.com" },
    { name: "Alexis", position: "CEO", email: "email@mail.com" },
    { name: "Esteban", position: "CHEF", email: "email@mail.com" }
  ];

  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  myValue;

  addEmployee(): void {
    this.employees.push(this.model);
    this.msg = "Campo agregado satisfactoriamente";
  }

  deleteEmployee(i): void {
    const answer = confirm("Estas seguro querer eliminarlo?");
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = "Campo eliminado satisfactoriamente";
    }
  }
  editEmployee(i): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    const i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i === j) {
        this.employees[i] = this.model2;
        this.msg = "Campo acualizado satisfactoriamente";
        this.model2 = {};
      }
    }
  }

  closeAlert(): void {
    this.msg = "";
  }
}
