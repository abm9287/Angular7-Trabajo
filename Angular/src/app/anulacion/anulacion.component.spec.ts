import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AnulacionComponent } from "./anulacion.component";

describe("AnulacionComponent", () => {
  let component: AnulacionComponent;
  let fixture: ComponentFixture<AnulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnulacionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
