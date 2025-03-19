
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { GridComponent } from './componets/grid/grid.component';

import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        LoginComponent,
        GridComponent],
  
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBeDefined();
  });

  it("should not login", () => {
    component.login(false);
    expect(component.isLoggedIn).toBeFalse();
  });

  it("should login", () => {
    component.login(true);
    expect(component.isLoggedIn).toBeTrue();
  });
});