import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyPlayerComponent } from './ready-player.component';

describe('ReadyPlayerComponent', () => {
  let component: ReadyPlayerComponent;
  let fixture: ComponentFixture<ReadyPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
