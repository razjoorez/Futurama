import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { FuturamaService } from '../services/futurama.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let futuramaServiceStub = jasmine.createSpyObj({getInfo: null})

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true},
        {provide: FuturamaService, useValue: futuramaServiceStub}
      ],
      imports: [
        MatCardModule
       
      ]
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
    component.ngOnInit();
    expect(futuramaServiceStub.getInfo).toHaveBeenCalled();
  })
});
