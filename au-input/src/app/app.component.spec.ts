import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let el: DebugElement;
    let emailField: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AuFaInputComponent,
                InputRefDirective
            ],
        }).compileComponents();
    }));

    beforeEach(()=>{
        const fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el=fixture.debugElement;
        emailField = el.query(By.css('#email-field'));

        fixture.detectChanges();
    })

    it('should create the app', async(() => {
        
        expect(component).toBeTruthy();
    }));

    it('should create a font awesome email input', async()=>{

        console.log(emailField.nativeElement.outerHTML);
        expect(emailField).toBeTruthy();
        expect(By.css('i.icon.fa.fa-envelope')).toBeTruthy();
        expect(By.css('input.test-class')).toBeTruthy();
    });






});
