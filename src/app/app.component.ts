import { Component, OnInit } from '@angular/core';
import { Service, Task } from './services/service';
import { style } from '@angular/animations';
import { SelectionChangedEvent } from 'devextreme/ui/list';
import CalendarDisabledDate from 'devextreme/ui/calendar';
import CustomStore from 'devextreme/data/custom_store';
import { createStore } from "devextreme-aspnet-data-nojquery";
import { ValueChangedEvent } from 'devextreme/ui/check_box';
import notify from 'devextreme/ui/notify';

type DisabledDateInfo = {
  date: Date;
  view: 'month' | 'year' | 'decade' | 'century';
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})






export class AppComponent  {

// bulletOptions={
//   value: 75,
//   startScaleValue: 0,
//    endScaleValue: 50,
//   target:68,
//   showZerolevel:true,




// fontStyle: Array<{icon: string,style:string}> = [{
//   icon:"bold",
//   style:"bold"
// },
// {
//   icon:"italic",
//   style:"italic"
// },
// {
// icon: "underline",
// style: "underline"
// },
// {
//   icon:"strike",
//   style:"strike"
// }
// ]
// font:String[]=["italic"];

// selectedFontStyleNames:string[]=["italic"]
// constructor(){
//   this.logSelectionChanged =this.logSelectionChanged .bind(this)
// }
// logSelectionChanged (){
//   let message;
//   if(this.selectedFontStyleNames.length>0){
//     message ="The following styles are selected: "+this.selectedFontStyleNames.join(", ");

//   }else{
//     message = "there are no selected styles";
//   }
//   console.log(message)
// }


//  changeYear(date: Date): Date {
//     const thisYear = new Date().getFullYear();
//     return new Date(date.setFullYear(thisYear));
//   }

//   minDate = this.changeYear(new Date('2022-01-01'));
//   maxDate = this.changeYear(new Date('2022-12-31'));

//   disabledDates = (data: DisabledDateInfo): boolean => {
//     return data.view === 'month' && data.date.getDay() === 0;
//   };

//   federalHolidays: Date[] = [
//     this.changeYear(new Date('2026-01-01')),
//     this.changeYear(new Date('2026-01-17')),
//     this.changeYear(new Date('2026-02-21')),
//     this.changeYear(new Date('2026-05-30')),
//     this.changeYear(new Date('2026-06-19')),
//     this.changeYear(new Date('2026-07-04')),
//     this.changeYear(new Date('2026-09-05')),
//     this.changeYear(new Date('2026-10-10')),
//     this.changeYear(new Date('2026-11-11')),
//     this.changeYear(new Date('2026-11-24')),
//     this.changeYear(new Date('2026-12-25'))
//   ];

//   getCellCssClass(
//     date: Date | undefined,
//     view: 'month' | 'year' | 'decade' | 'century'
//   ): string {
//     let cssClass = '';

//     this.federalHolidays.forEach((item: Date) => {
//       if (
//         date &&
//         date.getDate() === item.getDate() &&
//         date.getMonth() === item.getMonth() &&
//         view !== 'year'
//       ) {
//         cssClass = 'holiday';
//       }
//     });

//     return cssClass;
//   }



// store:any;
// constructor(){
//   this.store = createStore({
//     key:'id',
//     loadUrl:'https://jsonplaceholder.typicode.com/users'
//   })
// }

// Changed(e: ValueChangedEvent) {
//   if (e.value) {
//     notify('The checkBox is checked', 'success', 500);
//   }
// }


}
