import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListComponent } from './contacts-list.component';

describe('ListaContattiComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
