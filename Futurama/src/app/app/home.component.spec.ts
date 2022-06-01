import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { FuturamaService } from '../services/futurama.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home.component';
import { first, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let futuramaServiceStub = jasmine.createSpyObj({getInfo: null});
 // let futuramaServiceStub = jasmine.createSpyObj(['getInfo']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true},
        {provide: FuturamaService, useValue: futuramaServiceStub}
      ],
      imports: [
        MatCardModule
       
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    futuramaServiceStub= TestBed.inject(FuturamaService);
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the getInfo method when initialized', () => {
    fixture.componentInstance.ngOnInit();
    component.ngOnInit();
    futuramaServiceStub.getInfo.and.returnValue(of(true));
    expect(futuramaServiceStub.getInfo).toHaveBeenCalled();
   
  })

  it('should render characters in an anchor tag', ()=> {
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('Characters');
  });

});
