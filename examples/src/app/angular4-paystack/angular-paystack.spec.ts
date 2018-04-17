import { async, TestBed } from "@angular/core/testing";
import { Angular4PaystackComponent } from "./angular4-paystack.component";

describe("Angular4-Paystack Popup", () => {
  let comp: Angular4PaystackComponent

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [Angular4PaystackComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    let fixture = TestBed.createComponent(Angular4PaystackComponent);
    comp = fixture.componentInstance
  })

  it("Should fail validation if key is not supplied", () => {
    comp.amount = 1235678
    comp.email = "ashinzekene@gmail.com"
    comp.callback.subscribe((res) => { })
    expect(comp.checkInput()).toBeFalsy()
  })

  it("Should fail validation if amount is not supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.callback.subscribe((res) => { })
    expect(comp.checkInput()).toBeFalsy()
  })

  it("Should fail validation if amount is not a number", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.ref = "jfdi9urrktkkgkd"
    comp.callback.subscribe((res) => { })
    expect(comp.checkInput()).toBeFalsy()
  })

  it("Should fail validation if ref is not supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.amount = 5000000
    comp.callback.subscribe((res) => { })
    expect(comp.checkInput()).toBeFalsy()
  })

  it("Should fail valiation if callback is not supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.amount = 5000000
    comp.ref = "950gjvkjbk"
    expect(comp.checkInput()).toBeFalsy()
  })

  it("Should pass valiation if ref, amount, email and key and callback is supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.amount = 5000000
    comp.ref = "950gjvkjbk"
    comp.callback.subscribe((res) => { })
    expect(comp.checkInput()).toBeTruthy()
  })

})