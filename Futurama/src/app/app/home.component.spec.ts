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
  let a;
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
    a  = fixture.nativeElement.getElementsByTagName('a');
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

  it('there shpuld be two anchor tags', ()=> {
    a  = fixture.nativeElement.getElementsByTagName('a');
    expect(a.length).toBe(2)
    expect(a[1].textContent).toBe('Quiz');
  })

  it('should render Character in first anchor tag', ()=> {
    a  = fixture.nativeElement.getElementsByTagName('a');
    expect(a[0].textContent).toContain('Characters');
  })

  it('should render Quiz in second anchor tag', ()=> {
    a  = fixture.nativeElement.getElementsByTagName('a');
   // expect(a.length).toBe(2)
    expect(a[1].textContent).toContain('Quiz');
  })

 

});
