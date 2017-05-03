import { Component }      from '@angular/core';

import { PlannerPage }    from '../planner/planner';
import { TimePage } 	  from '../time/time';
import { EfficiencyPage } from '../efficiency/efficiency';
import { CalendarPage }   from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlannerPage;
  tab2Root = TimePage;
  tab3Root = EfficiencyPage;
  tab4Root = CalendarPage;
  constructor() {

  }
}
