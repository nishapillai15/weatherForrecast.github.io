import { Component, OnInit } from '@angular/core';
import { ForrecastService } from 'src/app/shared/services/forrecast.service';
import { Subscription } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cities: Array<string> = ['Raleigh', 'Mumbai', 'Toronto','New York', 'Delhi']
  public selectedValue: string;
  public forrecastDetails;
  private subscriptions: Subscription[] = [];

  constructor(
    private forrecastService: ForrecastService,
    private ngxService: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
  }

  /**
   * Prevent memory leak when component is destroyed
   */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Fetch Weather Forrecast results
   */
  public callWeatherForrecast(selectedCity) {
    this.ngxService.start();
    const sub =this.forrecastService.getWeatherForrecast(selectedCity.value)
    .subscribe(forrecastDetails => {
      this.forrecastDetails = forrecastDetails.data.slice(0, 5);
    })
    this.subscriptions.push(sub);
    this.ngxService.stop();
  }

}
