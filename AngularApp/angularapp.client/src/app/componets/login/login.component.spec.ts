import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should fail vaild Username", () => {
    component.validateUsername("test@test");
    expect(component.validUsername).toBeFalse()
  });

  it("should pass vaild Username", () => {
    component.validateUsername("test@test.com");
    expect(component.validUsername).toBeTrue()
  })

  it("should fail vaild password", () => {
    component.validatePassword("password");
    expect(component.validPassword).toBeFalse()
  });

  it("should pass vaild passowrd", () => {
    component.validatePassword("12345Gg!");
    expect(component.validPassword).toBeTrue()
  });

  it("should fail valid login", () => {
    component.username = "test"
    component.password = "password"
    component.validateLogin();
    expect(component.canLogin).toBeFalse();
  });

  it("should fail valid login", () => {
    component.username = "test@test.com"
    component.password = "password"
    component.validateLogin();
    expect(component.canLogin).toBeFalse();
   
  });

  it("should fail valid login", () => {
   component.username = "test"
    component.password = "12345Gg!"
    component.validateLogin();
    expect(component.canLogin).toBeFalse();
  });

  it("should pass valid login", () => {
    component.username = "test@test.com"
    component.password = "12345Gg!"
    component.validateLogin();
    expect(component.canLogin).toBeTrue();
  });

});
